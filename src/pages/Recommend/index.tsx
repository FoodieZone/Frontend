import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Icon } from '~/components';
import type { Restaurant } from '~/interfaces';

import { fetchRestaurant, RestaurantsKey } from '~/queries/restaurant';
import { locationState } from '~/stores/location';

function Recommend() {
	const {
		state: { name },
	} = useLocation();

	const { latitude, longitude } = useRecoilValue(locationState);

	const { data: restaurants, isSuccess } = useQuery({
		queryKey: RestaurantsKey.location(),
		queryFn: () => fetchRestaurant(longitude, latitude, name),
		enabled: !!name,
	});

	const [recommended, setRecommended] = useState<Restaurant>();

	useEffect(() => {
		if (!isSuccess) return;

		setRecommended(restaurants[0]);
	}, [isSuccess]);

	return (
		<Container>
			<Contents>
				<Title>근처 {recommended?.foodName} 인기맛집을 추천드려요 !</Title>

				<FoodInfoWrapper>
					<FoodImage name="image-burger" height={327} />
					<FoodName>{recommended?.foodName}</FoodName>
					<FoodLocationWrapper>
						<Icon name="icon-map-pin" width={18} height={18} />
						<StoreName>{recommended?.name}</StoreName>
						<StoreAddress>{recommended?.address}</StoreAddress>
					</FoodLocationWrapper>
				</FoodInfoWrapper>
			</Contents>

			<ShowMoreButton>다른 맛집 더보기</ShowMoreButton>
		</Container>
	);
}

export default Recommend;

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.span`
	margin-top: 67px;
	color: #000;
	font-size: 22px;
	font-weight: 700;
	line-height: 19px;
`;

const FoodInfoWrapper = styled.div`
	padding: 46px 4.5px 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
`;

const FoodImage = styled(Icon)`
	margin-top: 93px;
	border-radius: 16px;
`;

const FoodName = styled.span`
	margin-top: 24px;
	color: #1f2a37;
	font-size: 18px;
	font-weight: 600;
	line-height: 27px;
`;

const FoodLocationWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 318px;
	margin-top: 7px;
	padding: 8px 10px;
	border: 1px solid #e5e7eb;
	border-radius: 8px;
	box-sizing: border-box;
`;

const StoreName = styled.span`
	color: #6b7280;
	font-size: 12px;
	font-weight: 700;
`;

const StoreAddress = styled.span`
	color: #6b7280;
	font-size: 12px;
	font-weight: 500;
`;

const ShowMoreButton = styled.button`
	height: 56px;
	margin: 0 28px 32px;
	border-radius: 12px;
	outline: none;
	background-color: #ff5e60;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;
