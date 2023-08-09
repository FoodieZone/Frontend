import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BUTTON_TEXT, ROUND_16, ROUND_4, ROUND_8, TITLE } from './index.consts';

const HomePage = () => (
	<Container>
		{/* TODO: 디자인 수정 후 다시 */}
		<Title>{TITLE}</Title>

		<SelectRoundButtonWrapper>
			<SelectRoundButton>{ROUND_16}</SelectRoundButton>
			<SelectRoundButton isCenter>{ROUND_8}</SelectRoundButton>
			<SelectRoundButton>{ROUND_4}</SelectRoundButton>
		</SelectRoundButtonWrapper>

		<StartButton>{BUTTON_TEXT}</StartButton>
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.span`
	margin-top: 155px;
	white-space: pre-line;
	color: #222;
	font-size: 36px;
	font-weight: 800;
	line-height: 44px;
`;
const SelectRoundButtonWrapper = styled.div`
	width: 306px;
	height: 52px;
	margin-top: 58px;
	border: 1px solid #e5e7eb;
	border-radius: 6px;
	display: flex;
	justify-content: space-evenly;
`;
const SelectRoundButton = styled.label<{ isCenter?: boolean }>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	${({ isCenter }) =>
		isCenter &&
		css`
			border-left: 1px solid #e5e7eb;
			border-right: 1px solid #e5e7eb;
		`};
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
