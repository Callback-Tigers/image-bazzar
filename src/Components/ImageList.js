import React from "react";

const ImageList = ({images}) => {
   // const imgages = [10,20,24,30,40,50]

    return(
        <div>
            {images.map((image, index) => (
                <img key={image.id} src={image.urls.thumb} alt={image.alt_description}/>
                // <img key={index} src={image.urls.thumb} alt={image.alt_description}/>
                // https://www.npmjs.com/package/uuid
            ))}
        </div>
    )

}

export default ImageList;