import { Image } from '@chakra-ui/react';
import type { ImageData } from '../types';

type ProductImageGalleryProps = {
	imageData: ImageData;
};
const ProductImageGallery = ({ imageData }: ProductImageGalleryProps) => {
	return (
		<div
			className="grid gap-2 grid-cols-none grid-flow-row
        grid-cols[repeat(2, minmax(0, 1fr))] m-4">
			<div className="col-span-2 row-span-2 block">
				<button>
					<Image src={imageData.imagePath + imageData.mainImage.src} alt={imageData.mainImage.alt} />
				</button>
			</div>
			{imageData.galleryImages.map((image, index) => (
				<button className="block" key={`gallery-${index}`}>
					<img src={imageData.imagePath + image.src} alt={image.alt || imageData.mainImage.alt} />
				</button>
			))}
		</div>
	);
};
export default ProductImageGallery;
