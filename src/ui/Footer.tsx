import React, { memo } from 'react';

function Footer() {
	const today = new Date();
	return (
		<footer
			id="copyright"
			className="flex flex-column justify-center items-stretch text-white bg-primary bg-gradient-to-b from-primary to-amber-950/25 text-center py-8"
		>
			&copy; {today.getFullYear()} K.J. Roelke
		</footer>
	);
}

export default memo(Footer);
