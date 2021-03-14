import axios from "axios";


const endpoint = `https://api.unsplash.com/topics/nature/photos?client_d=${process.env.REACT_APP_CLIENT_ID}`;

export const fetchData = async () => {
    try {
        const response = await axios.get(endpoint);
        // if(response.errors)
        // {
        //     return 
        // }
        if(response.status == 200){
            return response;
        } else {
            return Object.assign({}, {error : 'Soemthing is wrong'})
        }
  
    } catch (err) {
        console.log(err.response)
        return Object.assign({}, {error : 'Soemthing is wrong'})
    }


}





