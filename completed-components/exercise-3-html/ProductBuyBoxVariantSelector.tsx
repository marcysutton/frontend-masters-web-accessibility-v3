import { useState } from 'react';
const ProductBuyBoxVariantSelector = ({ Product }) => {
	const [selectedColor, selectColor] = useState<string | null>(null);
	const [selectedSize, selectSize] = useState<string | null>(null);
	return (
		<div id="buybox-variant-selector" className="my-6">
			<div className="text-sm mb-2 flex flex-row">
				<h2 className="font-bold inline-block mr-1">Color:</h2>
				<span className="inline-block">{selectedColor}</span>
			</div>
			<div data-id="colorTile" role="radiogroup" className="flex gap-4">
				{Product.colors.map((color, index) => (
					<label key={`Product-${index}`}>
						<input
							type="radio"
							name="buybox-color-selector"
							value={`${Product.assetPath}${Product.colorwayImages[index]}`}
							checked={selectedColor === color ? true : false}
							onChange={(event) => selectColor(color)}
							className="sr-only"
						/>
						<span className="sr-only">{color}</span>
						<div
							aria-hidden="true"
							data-id="color-available"
							className={`border-[1px] border-${
								selectedColor === color ? 'black' : 'transparent'
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
			</div>
			<div className="flex flex-col">
				<div className="mt-6 mb-2">
					<div className="flex">
						<h2 className="font-bold mb-0 text-sm">Size:</h2>
					</div>
				</div>
				<div data-id="sizeTile" role="radiogroup" className="flex flex-wrap">
					{Product && Product.sizes.length === 1 && (
						<label>
							<input
								type="radio"
								name="buybox-size-selector"
								value="One Size"
								checked={true}
								onChange={(event) => console.log(event.target.value)}
								className="sr-only"
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
					)}
					{Product &&
						Product.sizes.length > 1 &&
						Product.sizes.map((size, index) => (
							<label key={`ProductSize-${size}`}>
								<input
									type="radio"
									name="buybox-size-selector"
									value={size}
									className="sr-only"
									onChange={(event) => selectSize(event.target.value)}
									checked={selectedSize === size ? true : false}
								/>
								<span className="sr-only">{size}</span>
								<div
									aria-hidden="true"
									className={`w-[124px] border-[1px] py-3 mb-3 border-solid text-center mr-4 cursor-pointer ${
										selectedSize === size ? 'bg-black text-white' : ''
									}`}>
									<span>{size}</span>
								</div>
							</label>
						))}
				</div>
			</div>
		</div>
	);
};

export default ProductBuyBoxVariantSelector;
