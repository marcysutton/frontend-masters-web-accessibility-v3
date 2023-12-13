import { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';

import { IconLeftArrow, IconRightArrow, IconHamburgerMenu, IconShoppingCart } from './Icons';

type BannerProps = {
	shouldAnimate?: boolean;
};
const Banner = ({ shouldAnimate = false }: BannerProps) => {
	const slideCount = 3;
	const [currentSlideNum, changeSlideNum] = useState<number>(1);
	const [slidePercentage, updateSlidePercentage] = useState<number>(0);
	const decrementSlide = () => {
		if (currentSlideNum > 1) {
			changeSlideNum(currentSlideNum - 1);
		} else {
			changeSlideNum(slideCount);
		}
	};
	const incrementSlide = () => {
		if (currentSlideNum < slideCount) {
			changeSlideNum(currentSlideNum + 1);
		} else {
			changeSlideNum(1);
		}
	};
	useEffect(() => {
		updateSlidePercentage(((currentSlideNum - 1) / 3) * 100);
	}, [currentSlideNum]);

	async function animate() {
		incrementSlide();
	}

	useEffect(() => {
		if (shouldAnimate) animate();
	}, []);

	if (shouldAnimate) {
		setTimeout(() => {
			animate();
		}, 3000);
	}

	return (
		<div className="bg-black max-w-full w-full flex" id="banner" role="banner" aria-labelledby="carouselheading">
			<div className="flex max-w-[1400px] mx-auto">
				<div className="mx-auto md:max-w-[65%] lg:max-w-[70%] flex">
					<p id="carouselheading" className="hidden">
						Announcements
					</p>
					<IconButton colorScheme="black" onClick={decrementSlide} type="button" aria-label="" aria-hidden="true">
						<IconLeftArrow />
					</IconButton>
					<div className="overflow-hidden w-full">
						<ul
							className={`grid list-none grid-cols-3 h-full items-center w-[300%] text-white 
                transition-transform duration-500 ease-out`}
							style={{ transform: `translateX(-${slidePercentage}%)` }}>
							<li aria-hidden={currentSlideNum === 1 ? 'true' : 'false'} className="flex items-center">
								<div className="text-center mx-auto">
									<a tabIndex={currentSlideNum === 1 ? 0 : -1}>
										<div className="text-white">
											<p className="text-white">
												Get It By 12/24 W/ Free Standard Shipping &nbsp;
												<span>See Cutoff Dates</span>
											</p>
										</div>
									</a>
								</div>
							</li>
							<li
								aria-hidden={currentSlideNum === 2 ? 'true' : 'false'}
								className="flex items-center text-white text-center">
								<div className="text-center mx-auto">
									<a
										className="text-white"
										href="/service/holiday-gift-guide"
										tabIndex={currentSlideNum === 2 ? 0 : -1}>
										<div className="text-white">
											<p className="text-white">
												Gear Gifts For Everyone On Your List &nbsp;
												<span>Shop Our Gift Guide</span>
											</p>
										</div>
									</a>
								</div>
							</li>
							<li
								aria-hidden={currentSlideNum === 3 ? 'true' : 'false'}
								className="flex items-center text-white text-center">
								<div className="text-center mx-auto">
									<a
										className="text-white"
										href="/rc/winter-footwear-accessories"
										tabIndex={currentSlideNum === 3 ? 0 : -1}>
										<div className="text-white">
											<p>
												Winter’s Warmest Boots, Beanies, Mittens &amp; More &nbsp;
												<span>Shop Now</span>
											</p>
										</div>
									</a>
								</div>
							</li>
						</ul>
					</div>
					<IconButton
						colorScheme="black"
						onClick={incrementSlide}
						type="button"
						aria-label="Next Slide"
						aria-hidden="true">
						<IconRightArrow />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

const Logo = () => <div className="mx-auto font-bold text-black font-serif text-xl">Background</div>;

type ProductHeaderProps = {
	shoppingCartItems: any[];
	shouldAnimate?: boolean;
};

const ProductHeader = ({ shoppingCartItems, shouldAnimate }: ProductHeaderProps) => {
	return (
		<>
			<Banner shouldAnimate={shouldAnimate} />
			<header className="flex flex-row items-center py-2 max-w-[1400px] mx-auto md:min-w-[65%] lg:min-w-[70%]">
				<IconButton aria-label="" type="button" colorScheme="white">
					<IconHamburgerMenu />
				</IconButton>
				<Logo />
				<a href="#" className="block min-w-[40px] h-auto mt-4" aria-label="">
					<IconShoppingCart />
					<span className="sr-only">
						<p>Cart, contains {shoppingCartItems?.length === 1 ? 'item' : 'items'}</p>
					</span>
				</a>
			</header>
		</>
	);
};

export default ProductHeader;
