import ProductHeader from './ProductHeader';
import ProductDetails from './ProductDetails';
import ProductImageGallery from './ProductImageGallery';

import { ChakraProvider, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Text } from '@chakra-ui/react';

import type { Product } from '../types';

const BackIcon = () => (
	<svg viewBox="5 5 16 16" focusable="false">
		<path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
	</svg>
);

type ProductPageProps = {
	productData: Product;
	children?: React.ReactNode;
};

const ProductPage = ({ productData, children }: ProductPageProps) => {
	return (
		<ChakraProvider>
			<div className="bg-white border-2 border-solid border-slate-600 demo">
				<ProductHeader />
				<section className="text-black my-2 max-w-[1400px] mx-auto">
					<HStack>
						<Button variant="link" color="currentColor" size="sm" leftIcon={<BackIcon />}>
							&lt; Back
						</Button>
						<Text>/</Text>
						<Breadcrumb separator="/" fontSize="sm" color="black">
							<BreadcrumbItem>
								<BreadcrumbLink href="#hike-camp" color="black">
									Hike &amp; Camp
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbItem>
								<BreadcrumbLink href={productData.breadcrumb.slug} color="black">
									{productData.breadcrumb.title}
								</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					</HStack>
					<div className="grid grid-cols-2 grid-template-[4fr_1fr] gap-2">
						<ProductImageGallery imageData={productData.images} />
						<ProductDetails product={productData} />
					</div>
				</section>
			</div>
		</ChakraProvider>
	);
};
export default ProductPage;
