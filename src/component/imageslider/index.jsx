import { useEffect, useState } from 'react';
import './style.css'

export default function ImageSlider() {

    const [image, setImages] = useState([]);

    async function fetchImage() {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
        const imgData = await response.json();
        setImages(imgData);
    }


    useEffect(() => {
        if (image) fetchImage();
    }, [])



    function handlePrev() { }
    function handleNext() { }
    return <div className='container'>
        <button className='left-arrow' onClick={handlePrev}>Prev</button>
        {image && image.length ?
            image.map((imageItem) => {
                return <img key={imageItem.download_url} src={imageItem.download_url} />
            }) : null
        }
        <button className='right-arrow' onClick={handleNext}>Next</button>
        {
            [1, 2, 3, 4, 5].map((_, index) => {
                return <span key={index} className='current-indicator'>*</span>
            })
        }
    </div>
}

//https://picsum.photos/v2/list?page=2&limit=10
/*
get the images 
set those images on an array
increase the images[1] to get to the current image in a slider
*/