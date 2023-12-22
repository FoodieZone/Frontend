import { useEffect } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { URL } from '~/constants';

function WorldCupResult() {
	const {
		state: {
			result: { name, image },
		},
	} = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(URL.RECOMMEND, { state: { name } });
		}, 1000);
	}, []);

	return (
		<Container>
			<Title>Final food</Title>

			<>
				<Description>당신은 {name} 러버입니다!</Description>
				<FoodIcon src={image} alt={name} width={138} />
				<FoodName>{name}</FoodName>
			</>
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

const FoodIcon = styled.img`
	margin-top: 38px;
`;

const FoodName = styled.span`
	margin-top: 18px;
	color: #a4a4a4;
	font-size: 22px;
	font-weight: 800;
	line-height: 14px;
`;
