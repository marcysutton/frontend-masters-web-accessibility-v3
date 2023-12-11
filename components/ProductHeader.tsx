import { useState } from 'react';
import { IconButton, HStack, Text } from '@chakra-ui/react';

const Banner = () => {
	const slideCount = 3;
	const [currentSlideNum, changeSlideNum] = useState<number>(1);
	const decrementSlide = () => {
		if (currentSlideNum > 0) {
			changeSlideNum(currentSlideNum - 1);
		}
	};
	const incrementSlide = () => {
		if (currentSlideNum < slideCount) {
			changeSlideNum(currentSlideNum + 1);
		}
	};
	return (
		<div className="bg-black max-w-full w-full flex" id="banner" role="banner" aria-labelledby="carouselheading">
			<div className="flex max-w-[1400px] mx-auto">
				<div className="mx-auto md:max-w-[65%] lg:max-w-[70%] flex">
					<p id="carouselheading" className="sr-only">
						Announcements
					</p>
					<IconButton
						colorScheme="black"
						onClick={decrementSlide}
						type="button"
						aria-label="Previous Slide"
						aria-hidden="true">
						<svg viewBox="0 0 24 24" focusable="false" className="chakra-icon" aria-hidden="true">
							<path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
						</svg>
					</IconButton>
					<div className="overflow-hidden w-full">
						<ul
							role="list"
							className={`grid list-none grid-cols-3 h-full items-center w-[300%] text-white 
                transition-transform -translate-x-${currentSlideNum - 1}/3 duration-500 ease-out`}>
							<li aria-hidden={currentSlideNum === 1 ? 'true' : 'false'} className="flex items-center">
								<div className="text-center mx-auto">
									<a className="chakra-link popup-link" tabIndex={currentSlideNum === 1 ? 0 : -1}>
										<div className="text-white">
											<p className="chakra-text css-0 text-white">
												Get It By 12/24 W/ Free Standard Shipping &nbsp;
												<span className="chakra-text css-7eummh">See Cutoff Dates</span>
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
											<p className="chakra-text css-0 text-white">
												Gear Gifts For Everyone On Your List &nbsp;
												<span className="chakra-text css-7eummh">Shop Our Gift Guide</span>
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
											<p className="chakra-text css-0">
												Winter’s Warmest Boots, Beanies, Mittens &amp; More &nbsp;
												<span className="chakra-text css-7eummh">Shop Now</span>
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
						<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
							<path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
						</svg>
					</IconButton>
				</div>
			</div>
		</div>
	);
};

const Logo = () => <div className="mx-auto font-bold text-black font-serif text-xl">Background</div>;

const ProductHeader = () => {
	return (
		<>
			<Banner />
			<header className="flex flex-row items-center py-2 max-w-[1400px] mx-auto md:min-w-[65%] lg:min-w-[70%]">
				<IconButton aria-label="" type="button" colorScheme="white">
					<svg className="text-black" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
						<path
							fill="currentColor"
							d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
					</svg>
				</IconButton>
				<Logo />
				<a href="#" className="block min-w-[40px] h-auto" aria-label="">
					<svg viewBox="0 0 26 32" focusable="false" className="text-black w-[26px] h-[32px]">
						<path d="M18.1202 9.40542L19.9789 3.43961C20.0974 2.9263 19.7011 2.4375 19.1663 2.4375H5.52806L5.20979 0.905908C5.13049 0.524155 4.78924 0.25 4.39337 0.25H0.833334C0.37309 0.25 0 0.617261 0 1.07031V1.61719C0 2.07024 0.37309 2.4375 0.833334 2.4375H3.25983L5.69899 14.176C5.11545 14.5063 4.72222 15.1258 4.72222 15.8359C4.72222 16.893 5.59278 17.75 6.66667 17.75C7.74056 17.75 8.61111 16.893 8.61111 15.8359C8.61111 15.3002 8.38726 14.8162 8.02695 14.4688H15.3064C14.9461 14.8162 14.7222 15.3002 14.7222 15.8359C14.7222 16.893 15.5928 17.75 16.6667 17.75C17.7406 17.75 18.6111 16.893 18.6111 15.8359C18.6111 15.0781 18.1636 14.4232 17.5146 14.1131L17.7062 13.2834C17.8247 12.7701 17.4283 12.2812 16.8936 12.2812H7.57351L7.12899 10.0439H17.3076C17.6967 10.0439 18.034 9.7789 18.1202 9.40542Z"></path>
					</svg>
					<span className="sr-only">
						<p className="chakra-text css-0">Cart, contains 0 items</p>
					</span>
				</a>
			</header>
		</>
	);
};

export default ProductHeader;
