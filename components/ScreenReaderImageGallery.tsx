import React from 'react';

const ScreenReaderImageGallery = () => {
    return (
			<div className="grid grid-cols-7 grid-row-1 gap-2 grid">
				<figure className="my-2 col-span-4">
					<img
						alt="a dirt path next to a small lake, with Fall colors of red, yellow and green. The sky is blue with wispy high clouds."
						className="mb-2"
						src="/exercises/north-cascades.jpg"
					/>
					<figcaption>
						<p className="italic">Make your escape to the North Cascades.</p>
					</figcaption>
				</figure>
				<div className="my-2 col-span-3">
					<img alt="" src="/exercises/hawaii.jpg" className="object-cover w-full max-h-full mb-2" />
					<em>Hawaii calls!</em>
				</div>
			</div>
		);
}

export default ScreenReaderImageGallery;
