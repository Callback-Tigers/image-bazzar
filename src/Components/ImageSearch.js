
import React,{useState, useEffect} from "react";
import axios from "axios";

// console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY)

const ImageSearch = ({setImages}) => {
    const [searchTerm, setSearchTerm] = useState('');
   

// then catch
    // function implementSearch(){
    //        axios.get("https://api.unsplash.com/search/photos",{
    //         params: {
    //             query :searchTerm
    //         },
    //         headers: {
    //             Authorization : "Client-ID Qgvtz618opcuUyCyXEHCnuxwU-35CEslYSeNienJnZI"
    //         }
    //        })
    //        .then(response => console.log("Success", response.data.results))
    //        .catch(err => console.log(err))
    // }

// async and await:

useEffect(()=>{
    implementSearch()
},[])

async function implementSearch(){

    try{
    const response = await axios.get("https://api.unsplash.com/search/photos",{
     params: {
         query :searchTerm || "random"
     },
     headers: {
         Authorization : `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
     }
    })
        setImages(response.data.results)
    }
    catch(err){
        console.log(err)
    }
}


    return(
        <div>
            <input type="text"  placeholder="Enter something..."
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button onClick={implementSearch}>Search</button>
        </div>
    )
}

export default ImageSearch;