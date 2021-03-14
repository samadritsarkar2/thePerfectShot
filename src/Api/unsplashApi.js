import axios from "axios";


const endpoint = `https://api.unsplash.com/topics/nature/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`;

export const fetchData = async () => {
    try {
        const response = await axios.get(endpoint);
  
        return response.data;
        
  
    } catch (err) {
        
        return err.response.data
    }


}





