import type { ImgHTMLAttributes } from 'react';

import styled from '@emotion/styled';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	name: string;
}

function Icon({ className, name, alt, ...restProps }: Props) {
	const svgImagePath = `/assets/${name}.svg`;
	const pngImagePath = `/assets/${name}.png`;

	const svgImageExists = require
		.context('/public/assets', false, /\.svg$/)
		.keys()
		.includes(`./${name}.svg`);
	const pngImageExists = require
		.context('/public/assets', false, /\.png$/)
		.keys()
		.includes(`./${name}.png`);

	const imagePath = svgImageExists ? svgImagePath : pngImageExists ? pngImagePath : '';

	return <Image className={className} src={imagePath} alt={alt ?? name} {...restProps} />;
}

export default Icon;

const Image = styled.img``;
