import { Icon, Stack, HStack, Heading } from '@chakra-ui/react';

import StarRatingIcon from './StarRatingIcon';
import BuyBoxVariantSelector from './BuyBoxVariantSelector';

import type { Product } from '../types';

type ProductDetailsProps = {
	product: Product;
};
const ProductDetails = ({ product }: ProductDetailsProps) => {
	const hasReviews = product.reviews.length > 0;

	return (
		<div className="light">
			<h1>
				<div className="css-ryjapq">
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
					<a className="chakra-link css-g8cqra" href="#the-wall">
						{hasReviews && (
							<>
								<span className="sr-only">{product.overallRating}</span>
								<HStack>
									<div>
										<StarRatingIcon rating={1} />
										<StarRatingIcon rating={1} />
										<StarRatingIcon rating={0.5} />
										<StarRatingIcon rating={0} />
										<StarRatingIcon rating={0} />
									</div>
									<span className="chakra-text css-0">
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
					<span className="chakra-text" data-id="pricing">
						<span className="font-bold text-xl">$139.00</span>
					</span>
				</div>
				<button type="button" className="">
					<div className="flex flex-row">
						<svg viewBox="0 0 26 26" focusable="false" className="w-4 h-4 inline-block mr-2">
							<path
								d="M0.5 12.8105V2.84375C0.5 1.54932 1.54932 0.5 2.84375 0.5H12.8105C13.4321 0.500003 14.0282 0.746936 14.4677 1.18647L24.8135 11.5323C25.7288 12.4476 25.7288 13.9315 24.8135 14.8468L14.8468 24.8135C13.9315 25.7288 12.4476 25.7288 11.5323 24.8135L1.18647 14.4677C0.746936 14.0282 0.500003 13.4321 0.5 12.8105H0.5ZM5.96875 3.625C4.67432 3.625 3.625 4.67432 3.625 5.96875C3.625 7.26319 4.67432 8.3125 5.96875 8.3125C7.26319 8.3125 8.3125 7.26319 8.3125 5.96875C8.3125 4.67432 7.26319 3.625 5.96875 3.625Z"
								fill="#45a582"></path>
						</svg>
						<p>Lowest Price Guarantee</p>
					</div>
				</button>
			</div>
			<BuyBoxVariantSelector Product={product} />
			<div className="flex flex-row items-center">
				<div className="flex flex-col">
					<p className="font-bold">Quantity</p>
					<div className="flex flex-row items-start mt-2">
						<button
							className="rounded-sm border-[1px] border-color-[#ccc] border-solid flex w-[32px] h-[38px] bg-slate-300"
							disabled={false}
							type="button"
							aria-label="Remove one"
							role="button"
							tabIndex={-1}
							aria-disabled="true"
							data-id="decrease-quantity">
							<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="w-[9px] h-[9px]">
								<g fill="currentColor">
									<rect height="4" width="20" x="2" y="10"></rect>
								</g>
							</svg>
						</button>
						<input
							type="number"
							inputMode="decimal"
							pattern="[0-9]*(.[0-9]+)?"
							aria-label=""
							value="1"
							role="spinbutton"
							aria-valuemin={1}
							aria-valuemax={2}
							aria-valuenow={1}
							aria-valuetext="1"
							autoComplete="off"
							autoCorrect="off"
							min="1"
							data-id="quantity"
							data-di-id="di-id-bf1d4e34-12773b32"
						/>
						<button
							className="rounded-sm border-solid border-color-[#ccc] border-[1px] flex w-[32px] h-[38px]"
							type="button"
							aria-label="Add one"
							role="button"
							tabIndex={-1}
							data-id="increase-quantity">
							<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="w-[9px] h-[9px]">
								<path
									fill="currentColor"
									d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"></path>
							</svg>
						</button>
					</div>
				</div>
				<p className="">Only 2 In stock</p>
			</div>
		</div>
	);
};
export default ProductDetails;
