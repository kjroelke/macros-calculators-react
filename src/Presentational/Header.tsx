// import Logo from 'jsx:/public/img/SaraRoelke_StackedLogo_FullColor.svg';
import React, { memo } from 'react';
function Header({ title, subtitle }: { title: string; subtitle: string }) {
	return (
		<header className="header">
			<figure className="header__img"></figure>
			<div className="header__title">
				<h1>{title}</h1>
				<span>{subtitle}</span>
			</div>
		</header>
	);
}
export default memo(Header);
