import React from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true);
	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		// Set the true initial value, now that we're on the client:
		setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

		const listener = (event) => {
			setPrefersReducedMotion(!event.matches);
		};
		mediaQueryList.addEventListener('change', listener);
		return () => {
			mediaQueryList.removeEventListener('change', listener);
		};
	}, []);
	return prefersReducedMotion;
}
export default usePrefersReducedMotion;
