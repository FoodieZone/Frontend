import { Children } from 'react';

import styled from '@emotion/styled';

import { ROUND } from './index.consts';

function Home() {
	return (
		<Container>
			<Contents>
				<Title>{`Welcome\nFoodie Zone`}&nbsp;&nbsp;🍣</Title>

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
	margin: 155px 0 0 40px;
	white-space: pre-line;
	color: #222;
	font-size: 36px;
	font-weight: 800;
	line-height: 44px;
`;

const SelectRoundButtonWrapper = styled.div`
	height: 52px;
	margin: 58px 28px 0;
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
`;

const Divider = styled.div`
	width: 1px;
	height: 100%;
	background-color: #e6e7eb;
`;

const StartButton = styled.button`
	height: 50px;
	margin: 0 28px 32px;
	border-radius: 12px;
	outline: none;
	background-color: ${({ theme }) => theme.colors.red};
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;
