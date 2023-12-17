import { useState } from 'react';

import styled from '@emotion/styled';

import { Icon } from '~/components';
import type { Restaurant } from '~/interfaces';

import Sheet from './Sheet';
import Swiper from './Swiper';

interface FoodieListProps {
	restaurants: Restaurant[];
	handleChangeFocusedItemIndex: (index: number) => void;
	handleClickCurrentLocationButton: VoidFunction;
}

function FoodieList({ restaurants, handleChangeFocusedItemIndex, handleClickCurrentLocationButton }: FoodieListProps) {
	const [openSheet, setOpenSheet] = useState(false);
	const [selectedRestaurant] = useState(restaurants[0]);

	const handleClickOpenSheet = () => {
		setOpenSheet(true);
	};

	const handleCloseSheet = () => {
		setOpenSheet(false);
	};

	const handleClickHomeButton = () => {
		window.location.href = '/';
	};

	return (
		<Container>
			<Header>
				<Title>{selectedRestaurant.address}</Title>

				<CurrentLocationButton onClick={handleClickCurrentLocationButton}>
					<Icon name="icon-maps-my-location" />
				</CurrentLocationButton>
			</Header>

			<ListButton onClick={handleClickOpenSheet}>
				<Icon name="icon-chevron-up" width={24} height={24} />
			</ListButton>

			{openSheet && <Sheet items={restaurants} onClose={handleCloseSheet} />}
			<Swiper items={restaurants} onFocusItem={handleChangeFocusedItemIndex} />

			<RestartButton onClick={handleClickHomeButton}>홈으로가기</RestartButton>
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

const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`;

const Title = styled.div`
	width: 100%;
	background-color: white;
	border-radius: 0 0 20px 20px;
	font-size: 18px;
	font-weight: 500;
	line-height: 140%;
	letter-spacing: 0.2px;
	color: black;
	text-align: center;
	padding: 20px 0;
`;

const CurrentLocationButton = styled.div`
	position: absolute;
	right: 11px;
	bottom: -49px;
	width: 40px;
	height: 40px;
	border-radius: 99px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	fill: #fff;
	filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.07));
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

const RestartButton = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.red[1]};
	border-radius: 16px;
	padding: 14px 16px;
	text-align: center;
	color: white;
	font-size: 15px;
	font-weight: 700;
	line-height: 140%;
	letter-spacing: -0.408px;
	margin: 23px 27px 32px 27px;
	z-index: 2;
`;
