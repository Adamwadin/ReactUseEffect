import axios from "axios";

export const getMovieData = async () => {
    const movies = await axios.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products");
    

    
    
    
    
    
    
    
    
    
    
    
    
    return movies;
}