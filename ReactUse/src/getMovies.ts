import axios from "axios";
import { IMovie } from "./models/IMovie";

export const getMovies = async () => {
  const response = await axios.get<IMovie[]>(
    `https://medieinstitutet-wie-products.azurewebsites.net/api/products`
  );

  return response.data;
};
