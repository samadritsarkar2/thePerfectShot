import react, {useEffect, useState} from "react"
import logo from './logo.svg';
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
          <div className="row">
            <div className="card-group">
            {
              data.map(item => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12">

                  <div className="card h-50" >
                    <img className="card-img-top img-thumbnail" src={item.urls.thumb} 
                    
                    />
                  </div>

                  </div>
                )
              })
            }
              </div>
          </div>
          
        </div>
    </div>
  );
}

export default App;
