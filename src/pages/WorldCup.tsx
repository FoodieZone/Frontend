import { useEffect, useRef, useState } from 'react';

import Burger from '@assets/png/Burger.png';
import CoffeCup from '@assets/png/CoffeCup.png';
import Pizza from '@assets/png/Pizza.png';
import Sandwich from '@assets/png/Sandwich.png';
import styled from '@emotion/styled';

type candidatesFromServerType = { name: string; image: string };

const candidatesFromServer = [
	{
		name: '햄버거',
		image: Burger,
	},
	{
		name: '피자',
		image: Pizza,
	},
	{
		name: '카페',
		image: CoffeCup,
	},
	{
		name: '샌드위치',
		image: Sandwich,
	},
];

const WorldCupPage = () => {
	const [selected, setSelected] = useState<number | undefined>(undefined);
	const [candidates, setCandidates] = useState<candidatesFromServerType[]>();
	const [currentRound, setCurrentRound] = useState<number>(1);
	const [leftIndex, setLeftIndex] = useState<number>(0);
	const [round, setRound] = useState<number>(0);

	const winners = useRef<candidatesFromServerType[]>([]);

	useEffect(() => {
		// 서버 요청
		setCandidates(candidatesFromServer);
		setRound(candidatesFromServer.length / 2);
	}, []);

	const handleClickCandidate = (el: candidatesFromServerType, index: number) => {
		setCurrentRound((prev) => ++prev);
		setLeftIndex((prev) => prev + 2);

		winners.current.push(el);

		if (winners.current.length === round) {
			setCandidates(winners.current);
			setLeftIndex(0);
			setCurrentRound(0);
			setRound((prev) => prev / 2);
		}
	};

	return (
		<Container>
			<Title>
				Choice Food {currentRound}/{round}
			</Title>
			<CandidatesWrapper>
				{candidates?.slice(leftIndex, leftIndex + 2).map((el, index) => (
					<CandidateLeft
						key={`candidate-${el.name}`}
						onClick={() => handleClickCandidate(el, index)}
						selected={selected}
					>
						<img src={el.image} alt={el.name} width="100%" style={{ objectFit: 'cover' }} />
					</CandidateLeft>
				))}
			</CandidatesWrapper>
		</Container>
	);
};
export default WorldCupPage;

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

const CandidatesWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	gap: 10px;

	margin-top: 100px;
`;

const Candidate = styled.div`
	text-align: center;

	transition: 600ms;
`;

const CandidateLeft = styled(Candidate)<{ selected: number | undefined }>`
	width: ${({ selected }) => (selected === 1 ? '0%' : '100%')};
`;

const CandidateRight = styled(Candidate)<{ selected: number | undefined }>`
	width: ${({ selected }) => (selected === 0 ? '0%' : '100%')};
`;
