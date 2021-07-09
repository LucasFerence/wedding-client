import React from 'react';
import './gallery.css';

import ImageGallery from 'react-image-gallery';
import useWindowDimensions from 'util/window';

function getGalleryImages(height, width, ...values) {
    const multiplier = width > 768 ? 0.7 : 0.5; 
    const imageHeight = height * multiplier;

    return values.map(v => {
        return {
            original: process.env.PUBLIC_URL + '/img/gallery/' + v,
            originalHeight: imageHeight
        }
    });
}

const Gallery = () => {

    const { height, width } = useWindowDimensions();

    const images = getGalleryImages(
        height, width,
        'gi1.jpg', 'gi2.jpg', 'gi3.jpeg', 'gi4.jpg', 'gi10.jpg',
        'gi5.jpg', 'gi8.jpg', 'gi6.jpeg', 'gi7.jpg', 'gi9.jpg'
    );

    return(
        <div id="gallery">
            <h2 className="gallery-header">Gallery</h2>

            <ImageGallery
                additionalClass="gallery-container"
                items={images}
                lazyLoad={true}
                showFullscreenButton={false}
                showThumbnails={false}
            />
        </div>
    );
}

export default Gallery;