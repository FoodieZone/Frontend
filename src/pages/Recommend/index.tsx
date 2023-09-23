import styled from '@emotion/styled';

function Recommend() {
	return (
		<Container>
			<Title>근처 햄버거 인기맛집을 추천드려요 !</Title>

			<FoodName>버거운 버거</FoodName>
		</Container>
	);
}

export default Recommend;

const Container = styled.main`
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

const FoodName = styled.span`
	margin-top: 46px;
	color: #1f2a37;
	font-size: 18px;
	font-weight: 700;
	line-height: 27px;
`;
