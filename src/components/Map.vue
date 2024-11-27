<template>
  <div class="w-[1280px] self-center mx-auto h-[90vh]">
    <h1 class="uppercase w-full text-5xl">Schedule</h1>
    <p class="text-xl">
      Your Health, Our Priority—Book Your Appointment Today!
    </p>

    <!-- Buttons for location options -->
    <div class="">
      <div class="search-form flex flex-row gap-4">
        <button @click="getUserLocation" class="bg-blue-700 text-white">
          Use My Location
        </button>
        <div class="bg-orange flex flex-col flex-grow px-3 py-2">
          <label for="manual-location" class="uppercase">Location:</label>
          <input
            id="manual-location"
            v-model="manualLocation"
            type="text"
            placeholder=""
            class="bg-transparent text-lg border-b-2 border-transparent focus-within:outline-none focus-within:border-b-2 focus-within:border-b-white"
          />
        </div>
        <div class="bg-orange flex flex-col px-3 py-2">
          <label for="manual-location" class="uppercase">Date:</label>
          <input
            type="date"
            placeholder=""
            class="bg-transparent text-lg border-b-2 border-transparent focus-within:outline-none focus-within:border-b-2 focus-within:border-b-white"
          />
        </div>
        <div class="bg-orange flex flex-col px-3 py-2">
          <label for="manual-location" class="uppercase">Time:</label>
          <input
            type="time"
            placeholder=""
            class="bg-transparent text-lg border-b-2 border-transparent focus-within:outline-none focus-within:border-b-2 focus-within:border-b-white"
          />
        </div>
        <button @click="searchByManualLocation" class="text-white bg-blue-700">
          ->
        </button>
      </div>
    </div>
    <div class="flex w-full flex-row h-[60vh]">
      <!-- Results -->
      <div id="results" class="p-5 w-[40%] bg-blue-200 h-full">
        <h2 class="text-2xl">Search Results</h2>
        <ul class="h-[50%] overflow-y-auto hover:text-yellow-200">
          <li
            v-for="(place, index) in places"
            :key="index"
            @click="focusPlace(place)"
            style="cursor: pointer"
            class="bg-orange m-2 p-3 rounded-lg"
          >
            {{ place.name }} ({{ place.vicinity }})
          </li>
        </ul>
        <!-- Place Details -->
        <div class="py-3">
          <h2 class="text-2xl">Place Details</h2>
          <p><strong>Name:</strong> {{ selectedPlace.name }}</p>
          <p>
            <strong>Address:</strong>
            {{ selectedPlace.formatted_address || selectedPlace.vicinity }}
          </p>
          <p v-if="selectedPlace.formatted_phone_number">
            <strong>Phone:</strong> {{ selectedPlace.formatted_phone_number }}
          </p>
          <p v-if="selectedPlace.rating">
            <strong>Rating:</strong> {{ selectedPlace.rating }} / 5
          </p>
          <p v-if="selectedPlace.website">
            <strong>Website:</strong>
            <a :href="selectedPlace.website" target="_blank">{{
              selectedPlace.website
            }}</a>
          </p>
        </div>
      </div>
      <!-- Map Container -->
      <div
        id="map"
        style="height: 100% !important; width: 70%; margin-top: 20px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapWithSearch",
  data() {
    return {
      manualLocation: "", // Manual location input
      keyword: ["health center", "health centers", "hospital", "clinic"], // Default keyword for searching
      map: null, // Google map instance
      service: null, // Places service instance
      places: [], // Stores the search results
      userLocation: { lat: 0, lng: 0 }, // User's current location
      markers: [], // Markers on the map
      highlightedMarker: null, // Currently highlighted marker
      selectedPlace: "" // Details of the selected place
    };
  },
  mounted() {
    this.loadGoogleMapsScript()
      .then(() => {
        this.initMap();
        this.getUserLocation();
      })
      .catch((error) => {
        console.error("Error loading Google Maps:", error);
      });
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (typeof google !== "undefined" && google.maps) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBnYdcQGv-SQBj6AHw2vEBpL_eCP2ob0Wg&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
      });
    },
    initMap() {
      const mapOptions = {
        center: { lat: 51.505, lng: -0.09 }, // Default center (can be updated later)
        zoom: 13
      };

      this.map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      this.service = new google.maps.places.PlacesService(this.map);
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.map.setCenter(this.userLocation);
            this.map.setZoom(14);
            this.searchNearbyCenters(this.userLocation);
          },
          () => {
            alert(
              "Error retrieving your location. Please input a location manually."
            );
          }
        );
      } else {
        alert(
          "Geolocation is not supported by this browser. Please input a location manually."
        );
      }
    },
    searchNearbyCenters(location) {
      const request = {
        location,
        radius: 5000, // Search within 5km
        keyword: this.keyword // Always search for "health centers"
      };

      this.clearMarkers();
      this.places = [];

      this.service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.places = results;
          this.addMarkersToMap(results);
        } else {
          alert("No results found.");
        }
      });
    },
    searchByManualLocation() {
      if (!this.manualLocation) {
        alert("Please enter a location.");
        return;
      }

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.manualLocation }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const location = results[0].geometry.location;
          this.map.setCenter(location);
          this.clearMarkers(); // Clear markers before starting the search
          this.searchNearbyCenters({
            lat: location.lat(),
            lng: location.lng()
          });
        } else {
          alert("Location not found. Please try again.");
        }
      });
    },
    addMarkersToMap(places) {
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location,
          title: place.name
        });

        // Add a click listener to the marker
        google.maps.event.addListener(marker, "click", () => {
          // Call the same function used when a result link is clicked
          this.focusPlace(place);
        });

        this.markers.push(marker);
      });
    },
    clearMarkers() {
      console.log("Clearing markers:", this.markers); // Log before clearing
      this.markers.forEach((marker) => {
        marker.setMap(null); // Remove the marker from the map
        marker.setIcon(null); // Optionally clear the icon
      });
      this.markers = []; // Reset the markers array
      console.log("Markers cleared:", this.markers); // Log after clearing
    },
    focusPlace(place) {
      // Clear previously highlighted marker
      if (this.highlightedMarker) {
        this.highlightedMarker.setMap(null);
        this.highlightedMarker.setIcon(null);
      }

      // Highlight the clicked place
      this.highlightedMarker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        title: place.name,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          scaledSize: new google.maps.Size(40, 40) // Bigger marker
        }
      });

      this.map.setCenter(place.geometry.location);
      this.map.setZoom(16);

      // Fetch place details
      this.service.getDetails({ placeId: place.place_id }, (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.selectedPlace = result;
        } else {
          console.error("Error fetching place details:", status);
        }
      });
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Norwester;
}
.bg-orange {
  background-color: #f28756;
  color: white;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
#results {
  margin-top: 20px;
}
li:hover {
  color: darkblue;
}
</style>
