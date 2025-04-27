import axios from "axios";

export const getAPIData = async (offset: number, limit: number) => {
  const apiUrl = `./api/songServer?offset=${offset}&limit=${limit}`;

  try {
    const data = await axios.get(apiUrl);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
