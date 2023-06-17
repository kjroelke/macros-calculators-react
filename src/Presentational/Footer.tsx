import React, { memo } from 'react';

function Footer() {
	const today = new Date();
	return (
		<footer id="copyright">&copy; {today.getFullYear()} K.J. Roelke</footer>
	);
}

export default memo(Footer);
