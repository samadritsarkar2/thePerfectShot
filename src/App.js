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
                  
                  <div className="img"
                  style={{
                    backgroundImage : `url(${item.urls.thumb})`,
                    backgroundSize : 'cover',
                    width : '100%'
                  }}
                  >

                  </div>


                    // <img 
                    // style={{
                    //   width : '20rem',
                    //   height : '20rem'
                    // }}
                    // className="" 
                    
                    // src={item.urls.thumb} 
                    // />
                )
              })
            }
              </div>
          
        </div>
    </div>
  );
}

export default App;
