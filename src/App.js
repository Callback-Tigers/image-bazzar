import React,{useState} from "react";
import ImageSearch from "./Components/ImageSearch";
import ImageList from "./Components/ImageList";


const App = () => {
  const [images, setImages] = useState([]);

  return (
    <div>
       <ImageSearch  setImages={setImages}/>
       <ImageList images={images} />
    </div>
  );
}

export default App;


// array => [] 
// object => null 
// string => ""
// number => 0