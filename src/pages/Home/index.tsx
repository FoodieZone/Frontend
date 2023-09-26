import { Children, useState } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUND } from './index.consts';

function Home() {
	const navigate = useNavigate();

	const [roundIndex, setRoundIndex] = useState<number | undefined>(undefined);

	const onClickStart = () => {
		if (roundIndex === undefined) {
			alert('Please set round');

			return;
		}

		navigate('/world-cup', { state: { round: ROUND[roundIndex].value } });
	};

	const onClickRoundButton = (index: number) => {
		setRoundIndex(index);
	};

	return (
		<Container>
			<Contents>
				<Title>{`Welcome\nFoodie Zone`}&nbsp;&nbsp;🍣</Title>

				<SelectRoundButtonWrapper>
					{Children.toArray(
						ROUND.map((round, index) => (
							<>
								<SelectRoundButton selected={index === roundIndex} onClick={() => onClickRoundButton(index)}>
									{round.title}
								</SelectRoundButton>
								{ROUND.length - 1 !== index && <Divider />}
							</>
						))
					)}
				</SelectRoundButtonWrapper>
			</Contents>

			<StartButton onClick={onClickStart}>시작하기</StartButton>
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
	border-radius: 6px;
	display: flex;
	justify-content: space-evenly;
	overflow: hidden;
`;

const SelectRoundButton = styled.label<{ selected: boolean }>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: ${({ selected }) => (selected ? 'white' : 'black')};
	background-color: ${({ selected }) => (selected ? '#ff5e60' : '#EDEDF780')};
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
	background-color: #ff5e60;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;
