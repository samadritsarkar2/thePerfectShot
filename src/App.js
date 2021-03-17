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
          <div className="row image-list" >
            <div className="card-group">
            {
              data.map(item => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card " >
                    <img 
                    style={{
                      width : '20em',
                      height : '20em'
                    }}
                    className="" 
                    src={item.urls.thumb} 
                    />
                    { item.description ? (
                        <span className="lead">{ item.description }</span>
                    ) : (
                      <span className="lead">{ item.alt_description }</span>
                    )  }
                    
                  </div>

                  // </div>
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
