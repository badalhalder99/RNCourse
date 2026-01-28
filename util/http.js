const BACKEND_URL = "http://192.168.0.115:3005/api/places";

export async function addPlace(placeData) {
  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(placeData),
  });

  const data = await response.json();
  return data;
}

export async function fetchPlaces() {
  const response = await fetch(BACKEND_URL);
  const data = await response.json();
  return data;
}

export async function fetchPlaceDetails(id) {
  const response = await fetch(`${BACKEND_URL}/${id}`);
  return await response.json();
}

export async function deletePlace(id) {
  await fetch(`${BACKEND_URL}/${id}`, { method: "DELETE" });
}
