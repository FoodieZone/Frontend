import styled from '@emotion/styled';

import { Icon } from '~/components/shared';

function Recommend() {
	return (
		<Container>
			<Contents>
				<Title>근처 햄버거 인기맛집을 추천드려요 !</Title>

				<FoodInfoWrapper>
					<FoodName>버거운 버거</FoodName>
					<FoodImage name="image-burger" height={327} />
					<FoodLocationWrapper>
						<Icon name="icon-map-pin" width={18} height={18} />
						<StoreName>버거운 버거</StoreName>
						<StoreAddress>서울특별시 특별구 특별로 123길 45</StoreAddress>
					</FoodLocationWrapper>
					<Divider />
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
	margin-top: 51px;
	color: #757682;
	font-size: 22px;
	font-weight: 400;
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

const FoodName = styled.span`
	color: #1f2a37;
	font-size: 18px;
	font-weight: 700;
	line-height: 27px;
`;

const FoodImage = styled(Icon)`
	margin-top: 12px;
	border-radius: 16px;
`;

const FoodLocationWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 318px;
	margin-top: 12px;
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

const Divider = styled.div`
	width: 100%;
	height: 1px;
	margin-top: 24px;
	background-color: #e5e7eb;
`;

const ShowMoreButton = styled.button`
	height: 50px;
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
