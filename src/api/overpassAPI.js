export const fetchNearbyCenters = async (lat, lon) => {
  const query = `
    [out:json];
    node
      ["amenity"="hospital"](around:5000, ${lat}, ${lon});
    out body;
  `;
  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Overpass API");
    }

    const data = await response.json();
    return data.elements.map((el) => ({
      latlng: [el.lat, el.lon],
      name: el.tags.name || "Unknown Center"
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
