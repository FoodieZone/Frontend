import styled from '@emotion/styled';

import { BUTTON_TEXT, TITLE } from './index.consts';

const HomePage = () => (
	<Container>
		<Title>{TITLE}</Title>

		<StartButton>{BUTTON_TEXT}</StartButton>
	</Container>
);

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Title = styled.span`
	margin-top: 155px;
	white-space: pre-line;
	color: #222;
	font-size: 36px;
	font-weight: 800;
	line-height: 44px;
`;

const StartButton = styled.button`
	width: 295px;
	height: 50px;
	border-radius: 12px;
	box-shadow: 0px 10px 20px 0px rgba(6, 0, 101, 0.2);
	position: fixed;
	bottom: 47px;
	outline: none;
	background-color: #5887f6;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;

export default HomePage;
