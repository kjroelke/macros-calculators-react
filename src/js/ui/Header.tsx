import React, { memo } from 'react';
import Logo from '../../../public/img/SaraRoelke_StackedLogo_FullColor.svg';

function Header({ title, subtitle }: { title: string; subtitle: string }) {
	return (
		<header className="header">
			<div className="header__container">
				<figure className="header__img">
					<Logo />
				</figure>
				<div className="header__title">
					<h1>{title}</h1>
					<span>{subtitle}</span>
				</div>
			</div>
		</header>
	);
}
export default memo(Header);
