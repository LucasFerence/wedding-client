import React from 'react';
import './gallery.css';

import ImageGallery from 'react-image-gallery';

function getGalleryImages(...values) {
    return values.map(v => {
        return {
            original: process.env.PUBLIC_URL + '/img/gallery/' + v,
            originalClass: 'gallery-image'
        }
    });
}

const Gallery = () => {

    const images = getGalleryImages(
        'gi1.jpg', 'gi2.jpg', 'gi3.jpeg', 'gi4.jpg', 'gi10.jpg',
        'gi5.jpg', 'gi8.jpg', 'gi6.jpeg', 'gi7.jpg', 'gi9.jpg'
    );

    return(
        <div id="gallery">
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