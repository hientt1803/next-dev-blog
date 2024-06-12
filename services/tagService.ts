export async function getAllTags() {
  const res = await fetch(`${process.env.API_URL}/api/tags`);
  const data = await res.json();
  return data;
}
