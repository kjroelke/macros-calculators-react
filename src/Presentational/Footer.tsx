import React, { memo } from 'react';

function Footer() {
	const today = new Date();
	return (
		<footer id="copyright" style={{ textAlign: 'center' }}>
			&copy; {today.getFullYear()} K.J. Roelke
		</footer>
	);
}

export default memo(Footer);
