import react, {useEffect, useState} from "react"
import logo from './logo.svg';
import { fetchData } from "./Api/unsplashApi";

function App() {
  const [data, setData] = useState();

  const preloadData = () => {
    fetchData().then( data => {
      
        if(data.errors)
        {
          console.log(data.errors)
        } else {
          setData(data)
        }
      }
    )
  }

  useEffect(() => {
    preloadData();
  }, [])

  return (
    <div>
      
       <p>Hell ssdo</p>
      <p> {JSON.stringify(data)} </p>
    </div>
  );
}

export default App;
