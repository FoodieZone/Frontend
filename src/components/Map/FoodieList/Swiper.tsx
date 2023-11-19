import { Children } from 'react';

import Slider from 'react-slick';

import SwiperCard from './SwiperCard';

import type { Restaurant } from '../index.types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderOptions = {
	slidesToShow: 1,
	centerMode: true,
};

interface Props {
	items: Restaurant[];
}

function Swiper({ items }: Props) {
	return <Slider {...sliderOptions}>{Children.toArray(items.map((item) => <SwiperCard item={item} />))}</Slider>;
}

export default Swiper;
