import react, {useEffect, useState, useRef} from "react"
import './App.css'
import { fetchPhotos, fetchData } from "./Api/unsplashApi";
import InfiniteScroll from 'react-infinite-scroller';


function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  // const myScroller = useRef();
  const preloadData = () => {
    fetchData().then((res) => {
      if(res.errors)
      {
        console.log(res.errors)
      } else {
        setInfo(res)
      } 

      fetchPhotos(1).then( pics => {
        if(pics.errors)
        {
          console.log(pics.errors)
        } else {
          setData(pics)
          setPage(2);
       }
      }
    )

    }) 
  }
  const loadMore = () => {
      fetchPhotos(page)
      .then(pics => {
        if(pics.errors)
        {
          console.log(pics.errors)
        } else {
        
          setData(data => data.concat(pics));
          setPage(page+1);
        }
      }
    )
  }
  useEffect(() => {
    preloadData();
  }, []);

 

  return (
    
        <div className=" app-class ">
         
      <InfiniteScroll
        pageStart={page}
        loadMore={()=> loadMore() }
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
        >
          <div className="row-images" >
{/* 
               <p>{JSON.stringify(info.title)}</p>
                 <p>{JSON.stringify(data)}</p> */}
            {
              data.map(item => {
                return (
                  <div className="wrapper">

                    <img 
                    style={{
                      
                    }}
                    className="img" 
                    
                    src={item.urls?.regular} 
                    />
                    
                  </div>
                )
              })
            }
              </div>
              </InfiniteScroll>
        </div>
  );
}

export default App;
