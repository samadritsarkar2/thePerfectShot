import axios from "axios";


// const endpoint = `https://api.unsplash.com/topics/nature/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`;

export const fetchNature = async (pageNo) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/topics/nature/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=15&page=${pageNo}`);
        // console.log(pageNo)
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



export const fetchRandom = async (pageNo) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=15&page=${pageNo}`);
       // console.log(pageNo)
        return response.data;
        
  
    } catch (err) {
        
        return err.response?.data
    }

}

export const searchUnsplash = async (query, pageNo) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=15&page=${pageNo}`);
        // console.log(response.data.results)
        return response.data.results;
        
  
    } catch (err) {
        //console.log(err)
        return err.response?.data
    }

}

