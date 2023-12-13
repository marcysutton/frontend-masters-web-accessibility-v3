import { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import type { ImageData } from '../../types';

type ProductImageGalleryProps = {
	imageData: ImageData;
	onFullscreenOpen: () => void;
	onFullscreenClose: () => void;
};
const ProductImageGallery = ({ imageData, onFullscreenOpen, onFullscreenClose }: ProductImageGalleryProps) => {
	const [fullscreenImage, setFullscreenImage] = useState(null);

	const openFullscreen = () => {
		onFullscreenOpen();
	};

	const closeFullscreen = () => {
		onFullscreenClose();
		setFullscreenImage(null);
	};
	useEffect(() => {
		if (fullscreenImage) {
			onFullscreenOpen();
		} else {
			onFullscreenClose();
		}
	}, [fullscreenImage]);
	return (
		<>
			<div
				className="grid gap-2 grid-cols-none grid-flow-row
			grid-cols[repeat(2, minmax(0, 1fr))] m-4 cursor-pointer">
				<div className="col-span-2 row-span-2 block">
					<button onClick={() => setFullscreenImage(imageData.mainImage)}>
						<Image src={imageData.imagePath + imageData.mainImage.src} alt={imageData.mainImage.alt} />
					</button>
				</div>
				{imageData.galleryImages.map((image, index) => (
					<button className="block" key={`gallery-${index}`}>
						<img src={imageData.imagePath + image.src} alt={image.alt || imageData.mainImage.alt} />
					</button>
				))}
			</div>
			{!!fullscreenImage && (
				<div className="absolute top-0 left-0 right-0 bg-white">
					<div
						aria-label="Close modal"
						className="button cursor-pointer absolute right-4 top-4 font-bold font-serif text-xl"
						onClick={() => closeFullscreen()}
						role="button">
						X
					</div>
					<img src={imageData.imagePath + fullscreenImage.src} alt={fullscreenImage.alt} />
				</div>
			)}
		</>
	);
};
export default ProductImageGallery;
