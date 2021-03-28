import react, {useEffect, useState, useRef} from "react"
import "./assets/App.css"
import { fetchNature, searchUnsplash } from "./Api/unsplashApi";
import InfiniteScroll from 'react-infinite-scroller';

import Modal from "react-modal";

const App = ({location}) => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState(location.query.search);
  const [page, setPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);

  // console.log(info)
  // const myScroller = useRef();

  const preloadData = () => {

    searchUnsplash(location.query.search, 1).then( pics => {
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
  searchUnsplash(location.query.search, page)
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

              {/* <Modal
              isOpen={selectedImg}
              onRequestClose={() => setSelectedImg(null)}
              style={{
                content : {
                  top                   : '50%',
                  left                  : '50%',
                  right                 : 'auto',
                  bottom                : 'auto',
                  marginRight           : '-50%',
                  transform             : 'translate(-50%, -50%)'
                }
              }}
              > 
                 <img style={{width : '100%', height : '100%' }} src={selectedImg?.url?.regular} />
              </Modal> */}
        </div>


  );
}

export default App;
