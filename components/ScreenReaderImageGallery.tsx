import React from 'react';

const ScreenReaderImageGallery = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: '1em'}}>
            <figure style={{margin: '1em 0'}}>
                <img alt="A woman on a mountain bike going over a big rock" src="/exercises/IMG_0920.JPG" />
                <figcaption>
                    <p>Mountain biking in Moab, Utah.</p>
                </figcaption>
            </figure>
            <div style={{margin: '1em 0'}}>
                <img alt="" src="/exercises/IMG_0920.JPG" />
            </div>
        </div>
    )
}

export default ScreenReaderImageGallery;
