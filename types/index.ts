export type Image = {
	src: string;
	alt?: string;
};
export type ImageData = {
	imagePath: string;
	mainImage: Image;
	galleryImages: Image[];
};
export type Product = {
	breadcrumb: { title: string; slug: string };
	companyName: string;
	companySlug: string;
	productTitle: string;
	images: ImageData;
	overallRating: string;
	reviews?: any[] | null;
	assetPath: string;
	price: string;
	colors: string[];
	colorwayImages: string[];
	sizes: string[];
};
