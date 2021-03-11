import axios from "axios";

const endpoint = 'https://api.unsplash.com/topics/nature';

export const fetchData = async () => {
    try {
        const response = await axios.get(endpoint);

        return response.json();
    } catch (err) {
        return console.log(err);
    }


}





