import type { ImgHTMLAttributes } from 'react';

import styled from '@emotion/styled';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	name: string;
}

function Icon({ className, name, alt, ...restProps }: Props) {
	const imagePath = `assets/${name}.svg`;

	return <Image className={className} src={imagePath} alt={alt ?? name} {...restProps} />;
}

export default Icon;

const Image = styled.img``;
