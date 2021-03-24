import axios from "axios";


// const endpoint = `https://api.unsplash.com/topics/nature/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`;

export const fetchPhotos = async () => {
    try {
        const response = await axios.get(`https://api.unsplash.com/topics/nature/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=15`);
  
        return response.data;
        
  
    } catch (err) {
        
        return err.response?.data
    }

}

export const fetchData = async () => {
    try {
        const response = await axios.get(`https://api.unsplash.com/topics/nature?client_id=${process.env.REACT_APP_CLIENT_ID}`);
        return response.data;
    } catch (err) {
        return err.response?.data
    }
} 




