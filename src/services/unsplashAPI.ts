import axios from "axios";
import { UnsplashAPIResponse } from "../components/App/App.types";
const API_KEY = import.meta.env.VITE_ACCESS_KEY;

export const fetchDataAPI = async (
  query: string = "",
  page: number = 1
): Promise<UnsplashAPIResponse> => {
  try {
    const { data } = await axios.get<UnsplashAPIResponse>(
      "https://api.unsplash.com/search/photos",
      {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
        params: {
          query,
          page,
          per_page: 10,
        },
      }
    );

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching photos:", error.message);
      throw error;
    }
    console.error("Error fetching photos:", error);
    throw new Error("Failed to fetch data from Unsplash API.");
  }
};
