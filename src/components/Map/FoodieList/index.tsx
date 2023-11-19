import { useState } from 'react';

import styled from '@emotion/styled';

import type { Restaurant } from '~/interfaces';

import Sheet from './Sheet';
import Swiper from './Swiper';

import { Icon } from '~/components/shared';

const swiperMock: Restaurant[] = [
	{
		lng: 127.0358379250339,
		lat: 37.499633048878934,
		address: '서울 강남구 역삼동 736-55',
		name: '바스버거 역삼점',
		foodName: '햄버거',
		distance: 84.0,
		kakaoMapsId: '218274780',
	},
	{
		lng: 127.02568305264,
		lat: 37.5011674033572,
		address: '서울 서초구 서초동 1305-5',
		name: '파이브가이즈 강남',
		foodName: '햄버거',
		distance: 943.0,
		kakaoMapsId: '1725176424',
	},
	{
		lng: 127.03241956181776,
		lat: 37.49775543833608,
		address: '서울 강남구 역삼동 823-16',
		name: '데일리픽스',
		foodName: '햄버거',
		distance: 444.0,
		kakaoMapsId: '717158192',
	},
	{
		lng: 127.029332806632,
		lat: 37.4932485081661,
		address: '서울 서초구 서초동 1329-8',
		name: '파파이스 강남점',
		foodName: '햄버거',
		distance: 996.0,
		kakaoMapsId: '772414643',
	},
];

function FoodieList() {
	const [openSheet, setOpenSheet] = useState(false);

	const handleClickOpenSheet = () => {
		setOpenSheet(true);
	};

	const handleCloseSheet = () => {
		setOpenSheet(false);
	};

	return (
		<Container>
			<ListButton onClick={handleClickOpenSheet}>
				<Icon name="icon-chevron-up" width={24} height={24} />
			</ListButton>

			{openSheet ? <Sheet items={swiperMock} onClose={handleCloseSheet} /> : <Swiper items={swiperMock} />}
		</Container>
	);
}

export default FoodieList;

const Container = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1;

	.slick-slide > div {
		margin: 0 4.5px;
	}
	.slick-list {
		margin: 0 -4.5px;
	}
`;

const ListButton = styled.div`
	width: 37px;
	height: 37px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	margin-bottom: 15px;
	background-color: white;
	border-radius: 99px;
`;
