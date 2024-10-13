import { useEffect, useState } from 'react';
import { Image, Modal, ModalHeader, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
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
					<button onClick={() => setFullscreenImage(imageData.mainImage)} aria-label="Open image in full-screen">
						<Image src={imageData.imagePath + imageData.mainImage.src} alt={imageData.mainImage.alt} />
					</button>
				</div>
				{imageData.galleryImages.map((image, index) => (
					<button className="block" key={`gallery-${index}`}>
						<img src={imageData.imagePath + image.src} alt={image.alt || imageData.mainImage.alt} />
					</button>
				))}
			</div>
			<div className="relative">
				{!!fullscreenImage && (
					<Modal isOpen={!!fullscreenImage} onClose={closeFullscreen} size="full">
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>{imageData.mainImage.alt}</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Image src={imageData.imagePath + imageData.mainImage.src} alt={imageData.mainImage.alt} />
							</ModalBody>
						</ModalContent>
					</Modal>
				)}
			</div>
		</>
	);
};
export default ProductImageGallery;
