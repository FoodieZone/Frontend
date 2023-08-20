import styled from '@emotion/styled';
import Dumplings from 'assets/images/13 Dumplings.jpg';

function WorldCupResult() {
	return (
		<Container>
			<Title>Final food</Title>
			<Description>당신은 만두 러버입니다!</Description>
			<FoodImage src={Dumplings} alt="food-image" />
			<FoodName>만두</FoodName>
		</Container>
	);
}

export default WorldCupResult;

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.span`
	margin-top: 124px;
	color: #222;
	font-size: 35px;
	font-weight: 800;
	line-height: 28px;
`;

const Description = styled.span`
	margin-top: 24px;
	color: #757682;
	font-size: 15px;
	font-weight: 400;
	line-height: 19px;
`;

const FoodImage = styled.img`
	width: 200px;
	margin-top: 38px;
`;

const FoodName = styled.span`
	margin-top: 18px;
	color: #a4a4a4;
	font-size: 22px;
	font-weight: 800;
	line-height: 14px;
`;
