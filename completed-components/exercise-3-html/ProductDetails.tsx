import { Dispatch, useState, useRef } from 'react';
import { HStack } from '@chakra-ui/react';

import ProductBuyBoxVariantSelector from './ProductBuyBoxVariantSelector';
import { IconStarRating, IconTag, IconMinus, IconPlus } from '../../components/Icons';

import type { Product } from '../../types';

type ProductDetailsProps = {
	product: Product;
	onAddToCart: Dispatch<any>;
};
const ProductDetails = ({ product, onAddToCart }: ProductDetailsProps) => {
	const hasReviews = product.reviews.length > 0;
	const maxProductCount = 10;
	const [productCount, setProductCount] = useState<number>(0);
	const productCountRef = useRef<HTMLInputElement>(null);

	const decrementProductCount = () => {
		if (productCount > 0) {
			setProductCount(productCount - 1);

			productCountRef.current.focus();
		}
	};
	const incrementProductCount = () => {
		if (productCount < maxProductCount) {
			setProductCount(productCount + 1);
			productCountRef.current.focus();
		}
	};

	return (
		<div className="light">
			<h1>
				<div>
					<a href={product.companySlug} className="font-normal">
						{product.companyName}{' '}
					</a>
				</div>
				<span className="font-bold text-xl" data-id="productTitle">
					{product.productTitle}
				</span>
			</h1>
			<div className="flex flex-row mt-2" data-id="buyboxRating">
				<div className="css-0">
					<h2 className="sr-only">Reviews</h2>
					<a href="#the-wall">
						{hasReviews && (
							<>
								<span className="hidden">{product.overallRating}</span>
								<HStack>
									<div>
										<IconStarRating rating={1} />
										<IconStarRating rating={1} />
										<IconStarRating rating={1} />
										<IconStarRating rating={1} />
										<IconStarRating rating={1} />
									</div>
									<span>
										{product.reviews.length} Review{product.reviews.length > 1 ? 's' : null}
									</span>
								</HStack>
							</>
						)}
						{!hasReviews && <span className="underline text-xs">Be the first to review</span>}
					</a>
				</div>
			</div>
			<hr className="my-6" />
			<div>
				<div>
					<h2 className="sr-only">Price</h2>
					<span data-id="pricing">
						<span className="font-bold text-xl">{product.price}</span>
					</span>
				</div>
				<div className="button">
					<div className="flex flex-row">
						<IconTag />
						<p>Lowest Price Guarantee</p>
					</div>
				</div>
			</div>
			<ProductBuyBoxVariantSelector Product={product} />
			<div className="flex flex-row items-center">
				<div className="flex flex-col">
					<h2 className="font-bold">Quantity</h2>
					<div className="flex flex-row items-start mt-2 gap-1">
						<button
							className="rounded-sm border-[1px] border-color-[#ccc] border-solid flex w-[32px] h-[38px] bg-slate-300 items-center text-center"
							disabled={false}
							onClick={decrementProductCount}
							type="button"
							aria-label="Remove one"
							role="button"
							tabIndex={-1}
							aria-disabled="true">
							<IconMinus />
						</button>
						<input
							className="block w-[40px] h-[38px] rounded border-2 text-center font-bold bg-white"
							type="number"
							inputMode="decimal"
							pattern="[0-9]*(.[0-9]+)?"
							aria-label="Product count"
							value={productCount}
							onChange={(event) => setProductCount(parseInt(event.target.value))}
							role="spinbutton"
							aria-valuemin={1}
							aria-valuemax={maxProductCount}
							aria-valuenow={productCount}
							aria-valuetext={productCount.toString()}
							autoComplete="off"
							autoCorrect="off"
							min="1"
							ref={productCountRef}
						/>
						<button
							className="rounded-sm border-solid border-color-[#ccc] border-[1px] flex w-[32px] h-[38px] items-center text-center"
							type="button"
							onClick={incrementProductCount}
							aria-label="Add one"
							role="button"
							tabIndex={-1}>
							<IconPlus className="w-[14px] h-[14px] mx-auto fill-none" />
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col mt-4 mr-4">
				<div
					className="bg-black text-white font-bold py-2 mt-2 border-[1px] rounded-[100px] text-center"
					onClick={() => onAddToCart(product)}>
					Add to Cart
				</div>
				<div className="bg-white text-black font-bold py-2 mt-2 border-[1px] border-black rounded-[100px] hover:bg-black hover:text-white text-center">
					Add to Wishlist
				</div>
			</div>
		</div>
	);
};
export default ProductDetails;
