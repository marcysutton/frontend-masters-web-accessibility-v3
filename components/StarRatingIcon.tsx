import { Icon } from '@chakra-ui/react';

const StarRatingIcon = ({ rating = 1 }) => (
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

export default StarRatingIcon;
