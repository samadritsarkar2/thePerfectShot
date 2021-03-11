import axios from "axios";

const endpoint = 'https://api.unsplash.com/topics/nature/photos';

export const fetchData = async () => {
    try {
        const response = await axios.get(endpoint);

        return response;
    } catch (err) {
        return console.log(err);
    }


}





