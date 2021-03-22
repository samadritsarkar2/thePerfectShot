import react, {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css'
import { fetchPhotos, fetchData } from "./Api/unsplashApi";

function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({})
  const preloadData = () => {

    fetchData().then((res) => {
      if(res.errors)
      {
        console.log(res.errors)
      } else {
        setInfo(res)
      } 

      fetchPhotos().then( data => {

        if(data.errors)
        {
          console.log(data.errors)
        } else {
          setData(data)
        }
      }
    )
    })

    
  }

  useEffect(() => {
    preloadData();
  }, [])

  return (
    <div>
    
        <div className="container">
          {/* <p>{JSON.stringify(info.title)}</p> */}
          <div className="row-images" >
            {
              data.map(item => {
                return (
                  <div className="wrapper">

                    <img 
                    style={{
                      
                    }}
                    className="img" 
                    
                    src={item.urls.regular} 
                    />
                    
                  </div>
                )
              })
            }
              </div>
          
        </div>
    </div>
  );
}

export default App;
