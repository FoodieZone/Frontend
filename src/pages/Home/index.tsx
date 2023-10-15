import { Children } from 'react';

import styled from '@emotion/styled';

import { ROUND } from './index.consts';

function Home() {
	return (
		<Container>
			<Contents>
				<Title>{`푸디존에서\n당신의 최적맛집을 찾아보세요`}&nbsp;&nbsp;😆</Title>

				<SelectRoundButtonWrapper>
					{Children.toArray(
						ROUND.map((round, index) => (
							<>
								<SelectRoundButton>{round.title}</SelectRoundButton>
								{ROUND.length - 1 !== index && <Divider />}
							</>
						))
					)}
				</SelectRoundButtonWrapper>
			</Contents>

			<StartButton>시작하기</StartButton>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.span`
	margin: 195px 0 0 26px;
	white-space: pre-line;
	color: #000;
	font-size: 25px;
	font-weight: 700;
`;

const SelectRoundButtonWrapper = styled.div`
	height: 52px;
	margin: 47px 26px 0;
	border: 1px solid #e5e7eb;
	border-radius: 6px;
	display: flex;
	justify-content: space-evenly;
`;

const SelectRoundButton = styled.label`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: #111928;
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
`;

const Divider = styled.div`
	width: 1px;
	height: 100%;
	background-color: #e6e7eb;
`;

const StartButton = styled.button`
	height: 56px;
	margin: 0 27px 32px;
	border-radius: 12px;
	outline: none;
	background-color: #ff5e60;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;
