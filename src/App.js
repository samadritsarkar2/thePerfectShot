import react, {useEffect, useState, useRef} from "react"
import "./assets/App.css"
import { fetchNature, searchUnsplash } from "./Api/unsplashApi";
import InfiniteScroll from 'react-infinite-scroller';
import {ReactComponent as LeftArrow} from "./assets/left-arrow.svg";
import { Link } from "react-router-dom";

const App = ({location}) => {
  const [data, setData] = useState([]);
 const [info, setInfo] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState(false);

  // console.log(info)
  // const myScroller = useRef();

  const preloadData = () => {
    if(location.query?.search || location.query?.search !== '' )
   { searchUnsplash(location.query?.search, 1).then( pics => {
        if(pics.errors || pics.length ==0)
        {
          setError(true);
          console.log(pics.length, error)
        } else {
          setData(pics)
          setPage(2);
         
       }
      }
    )
  } else {
    setError(true);
  }
    
    
  }

const loadMore = () => {
  searchUnsplash(location.query?.search, page)
      .then(pics => {
        {
          if(pics.errors || pics.length ==0)
        {
          setError(true);
          console.log(pics.errors)
        } else {
        
          setData(data => data.concat(pics));
          setPage(page+1);
        }
      }
    })
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
         
        {
          error ? (
            <div 
            className="error-div"
            > 
              <p style={{fontSize : '3rem'}}>Ooops !</p>
              <p>Please, try searching for something else</p>

            <Link to="/" 
            
            >
              <div className="back-btn" >
                 <LeftArrow className="left-svg" /> 
                 <p className="back-text">Go Back</p>
                  </div>
            </Link>
            </div>
          ) : 
          (
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
            
          )
        }

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
