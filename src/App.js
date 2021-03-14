import react, {useEffect, useState} from "react"
import logo from './logo.svg';
import { fetchData } from "./Api/unsplashApi";

function App() {
  const [data, setData] = useState([]);

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
      <p> Data</p>
        <div className="container">
          {/* <p>{JSON.stringify(typeof data)}</p> */}

            {
              data.map(item => {
                return (
                <img src={item.urls.regular} style={{ width : 100, height : 100 } } />
                )
              })
              
            }
          
        </div>
    </div>
  );
}

export default App;
