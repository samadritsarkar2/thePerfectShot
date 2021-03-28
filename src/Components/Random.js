import react, {useEffect, useState, useRef} from "react"
import '../App.css'
import { fetchRandom , fetchData } from "../Api/unsplashApi";
import InfiniteScroll from 'react-infinite-scroller';

import Modal from "react-modal";

function Random() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null)

  // const myScroller = useRef();
  const preloadData = () => {

    fetchRandom(1).then( pics => {
        if(pics.errors)
        {
          console.log(pics.errors)
        } else {
          setData(pics)
          setPage(2);
       }
      }
    )

    
  }

const loadMore = () => {
    fetchRandom(page)
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

  const handleImageClick = (img) => {
    setSelectedImg(img);
    console.log(selectedImg);
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
        loader={<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        useWindow={true}
        >
          <div className="row-images" >
            {
              data.map(item => {
                return (
                  <div className="wrapper" key={item.id}>
             
                    <img 
                    style={{
                      
                    }}
                    className="img" 
                    src={item.urls?.regular} 
                    onClick={() => handleImageClick(item)}
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

export default Random;
