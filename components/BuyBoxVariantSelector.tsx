import { useState } from 'react';
const BuyBoxVariantSelector = ({ Product }) => {
	const [selectedImageNum, selectImageNum] = useState<number>(1);
	return (
		<div id="buybox-variant-selector" className="my-6">
			<div className="text-sm">
				<span className="font-bold inline-block mr-1">Color:</span>
				<span className="inline-block">Red</span>
			</div>
			<div data-id="colorTile" role="radiogroup" className="flex gap-4">
				{Product.colors.map((color, index) => (
					<label key={`Product-${index}`}>
						<input
							type="radio"
							name="buybox-color-selector"
							value={`${Product.assetPath}${Product.colorwayImages[index]}`}
							checked={true}
							className="sr-only"
							id="radio-29"
						/>
						<span className="sr-only">{color}</span>
						<div
							aria-hidden="true"
							data-id="color-available"
							className={`border-[1px] border-${
								selectedImageNum === index ? 'gray-800' : 'transparent'
							} hover:border-gray-800 border-solid cursor-pointer`}>
							<img
								width="1"
								height="1"
								alt={color}
								src={`${Product.assetPath}${Product.colorwayImages[index]}`}
								loading="lazy"
								className="w-[70px] h-[70px]"
							/>
						</div>
					</label>
				))}

				{/* <label>
					<input
						type="radio"
						name="buybox-color-selector"
						value="/images/items/tiny/FOP/FOP0008/RED.jpg"
						className="sr-only"
						id="radio-30"
					/>
					<span className="sr-only">Red</span>
					<div aria-hidden="true" data-id="color-available">
						<img
							width="1"
							height="1"
							alt="Red"
							src={`${Product.assetPath}/RED.jpg`}
							className="w-[70px] h-[70px]"
							loading="lazy"
						/>
					</div>
				</label> */}
			</div>
			<div className="flex flex-col">
				<div className="mt-6 mb-2">
					<div className="flex">
						<p className="font-bold mb-0 text-sm">Size:</p>
					</div>
				</div>
				<div data-id="sizeTile" role="radiogroup">
					<label>
						<input
							type="radio"
							name="buybox-size-selector"
							value="One Size"
							checked={false}
							className="sr-only"
							id="radio-32"
						/>
						<span className="sr-only">One Size</span>
						<div
							data-checked=""
							aria-hidden="true"
							data-id="size-available"
							className="bg-black py-4 px-6 font-bold text-white inline-block">
							<span>One Size</span>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default BuyBoxVariantSelector;
