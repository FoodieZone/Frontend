import { Children, useMemo } from 'react';

import Slider from 'react-slick';

import type { Restaurant } from '~/interfaces';

import SwiperCard from './SwiperCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
	items: Restaurant[];
	onFocusItem?: (index: number) => void;
}

function Swiper({ items, onFocusItem }: Props) {
	const sliderOptions = useMemo(
		() => ({
			slidesToShow: 1,
			centerMode: true,
			afterChange: (index: number) => onFocusItem?.(index),
		}),
		[onFocusItem]
	);

	return <Slider {...sliderOptions}>{Children.toArray(items.map((item) => <SwiperCard item={item} />))}</Slider>;
}

export default Swiper;
