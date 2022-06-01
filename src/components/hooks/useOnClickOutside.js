// import { useEffect } from 'react';

// // https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/ 

// export const useOnClickOutside = (ref, handler) => {
// 	useEffect(() => {
// 		const listener = event => {
// 			if (!ref.current || ref.current.contains(event.target)) {
// 				return;
// 			}
// 			handler(event);
// 		};
// 		if (typeof document !== 'undefined'){
// 			document.addEventListener('mousedown', listener);
// 		}
// 		return () => {
// 			if (typeof document !== 'undefined'){
// 				document.removeEventListener('mousedown', listener);
// 			}
// 		};
// 	}, 
// 	[ref, handler],
// 	);
// };