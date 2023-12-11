import { twMerge } from 'tailwind-merge';
import { Icon } from '@chakra-ui/react';

export const IconMinus = ({ className = '' }) => (
	<svg
		viewBox="0 0 24 24"
		focusable="false"
		aria-hidden="true"
		className={twMerge(className, 'w-[9px] h-[9px] mx-auto')}>
		<g fill="currentColor">
			<rect height="4" width="20" x="2" y="10"></rect>
		</g>
	</svg>
);
export const IconPlus = ({ className = '' }) => (
	<svg
		viewBox="0 0 24 24"
		focusable="false"
		aria-hidden="true"
		className={twMerge(className, 'w-[9px] h-[9px] mx-auto')}>
		<path
			fill="currentColor"
			d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"></path>
	</svg>
);
export const IconTag = () => (
	<svg viewBox="0 0 26 26" focusable="false" className="w-4 h-4 inline-block mr-2">
		<path
			d="M0.5 12.8105V2.84375C0.5 1.54932 1.54932 0.5 2.84375 0.5H12.8105C13.4321 0.500003 14.0282 0.746936 14.4677 1.18647L24.8135 11.5323C25.7288 12.4476 25.7288 13.9315 24.8135 14.8468L14.8468 24.8135C13.9315 25.7288 12.4476 25.7288 11.5323 24.8135L1.18647 14.4677C0.746936 14.0282 0.500003 13.4321 0.5 12.8105H0.5ZM5.96875 3.625C4.67432 3.625 3.625 4.67432 3.625 5.96875C3.625 7.26319 4.67432 8.3125 5.96875 8.3125C7.26319 8.3125 8.3125 7.26319 8.3125 5.96875C8.3125 4.67432 7.26319 3.625 5.96875 3.625Z"
			fill="#45a582"></path>
	</svg>
);

export const IconStarRating = ({ rating = 1 }) => (
	<Icon viewBox="0 0 16 16" focusable="false">
		<g stroke="none" stroke-width="1" fill-rule="evenodd">
			{rating === 1 && (
				<g transform="translate(-391.000000, -206.000000)">
					<g transform="translate(355.000000, 206.000000)">
						<polygon points="44.4958974 12.216 49.4319744 15.2 48.1220769 9.576 52.4830769 5.792 46.7402949 5.304 44.4958974 3.41060513e-13 42.2515 5.304 36.5087179 5.792 40.8697179 9.576 39.5598205 15.2"></polygon>
					</g>
				</g>
			)}
			{rating === 0.5 && (
				<g transform="translate(-428.000000, -206.000000)">
					<g transform="translate(355.000000, 206.000000)">
						<g transform="translate(73.017436, 0.000000)">
							<polygon
								fill="#949494"
								points="7.98717949 12.216 12.9232564 15.2 11.613359 9.576 15.974359 5.792 10.2315769 5.304 7.98717949 2.30926389e-14 5.74278205 5.304 -4.35207426e-14 5.792 4.361 9.576 3.05110256 15.2"></polygon>
							<polygon
								fill="#000000"
								points="7.98717949 12.216 7.98717949 10.601451 7.98717949 5.792 7.98717949 2.30926389e-14 5.74278205 5.304 -2.17603713e-14 5.792 4.361 9.576 3.05110256 15.2"></polygon>
						</g>
					</g>
				</g>
			)}
			{rating === 0 && (
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g transform="translate(-449.000000, -206.000000)" fill="#949494">
						<g transform="translate(355.000000, 206.000000)">
							<polygon points="102.750256 12.216 107.686333 15.2 106.376436 9.576 110.737436 5.792 104.994654 5.304 102.750256 3.64153152e-13 100.505859 5.304 94.7630769 5.792 99.1240769 9.576 97.8141795 15.2"></polygon>
						</g>
					</g>
				</g>
			)}
		</g>
	</Icon>
);

export const IconPlusFilled = ({ className = '' }) => (
	<svg className={twMerge(className, `icon-plus-circle increment-count`)} viewBox="0 0 512 512">
		<path d="m384 274l0-36c0-5-2-10-5-13c-4-4-8-6-13-6l-73 0l0-73c0-5-2-9-6-13c-3-3-8-5-13-5l-36 0c-5 0-10 2-13 5c-4 4-6 8-6 13l0 73l-73 0c-5 0-9 2-13 6c-3 3-5 8-5 13l0 36c0 5 2 10 5 13c4 4 8 6 13 6l73 0l0 73c0 5 2 9 6 13c3 3 8 5 13 5l36 0c5 0 10-2 13-5c4-4 6-8 6-13l0-73l73 0c5 0 9-2 13-6c3-3 5-8 5-13z m91-18c0 40-9 77-29 110c-20 34-46 60-80 80c-33 20-70 29-110 29c-40 0-77-9-110-29c-34-20-60-46-80-80c-20-33-29-70-29-110c0-40 9-77 29-110c20-34 46-60 80-80c33-20 70-29 110-29c40 0 77 9 110 29c34 20 60 46 80 80c20 33 29 70 29 110z"></path>
	</svg>
);
export const IconMinusFilled = ({ className = '' }) => (
	<svg
		id="childrenMinus"
		className={twMerge(className, `icon-minus-circle decrement-count`)}
		style={{ fill: 'rgb(122, 126, 118)' }}
		viewBox="0 0 512 512">
		<path d="m384 274l0-36c0-5-2-10-5-13c-4-4-8-6-13-6l-220 0c-5 0-9 2-13 6c-3 3-5 8-5 13l0 36c0 5 2 10 5 13c4 4 8 6 13 6l220 0c5 0 9-2 13-6c3-3 5-8 5-13z m91-18c0 40-9 77-29 110c-20 34-46 60-80 80c-33 20-70 29-110 29c-40 0-77-9-110-29c-34-20-60-46-80-80c-20-33-29-70-29-110c0-40 9-77 29-110c20-34 46-60 80-80c33-20 70-29 110-29c40 0 77 9 110 29c34 20 60 46 80 80c20 33 29 70 29 110z"></path>
	</svg>
);
