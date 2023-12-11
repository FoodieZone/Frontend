import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { wait } from '~/utils';

import { Candidate, candidateState } from '~/stores/candidate';

const WorldCupPage = () => {
	const navigate = useNavigate();
	const {
		state: { round },
	} = useLocation();

	const initialCandidates = useRecoilValue(candidateState);

	const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
	const [roundCount, setRoundCount] = useState<number>(0);
	const [currentRound, setCurrentRound] = useState<number>(1);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const leftIndex = useRef<number>(0);
	const winners = useRef<Candidate[]>([]);

	useEffect(() => {
		setRoundCount(round / 2);
	}, []);

	const handleClickCandidate = async (el: Candidate, index: number) => {
		winners.current.push(el);

		setSelectedIndex(index);

		await wait(500);
		setSelectedIndex(null);
		setCurrentRound((prev) => ++prev);
		leftIndex.current = leftIndex.current += 2;

		if (winners.current.length === roundCount) {
			if (roundCount === 1) {
				navigate('/world-cup/result', { state: { result: winners.current[0] } });
				return;
			}

			setCandidates(winners.current);
			leftIndex.current = 0;
			winners.current = [];
			setCurrentRound(1);
			setRoundCount((prev) => prev / 2);
		}
	};

	return (
		<Container>
			<RoundMatchInfo>
				<div>{roundCount * 2}강</div>
				<div>{currentRound}라운드</div>
			</RoundMatchInfo>
			<Title>Choice Food</Title>
			<CandidatesWrapper>
				{candidates?.slice(leftIndex.current, leftIndex.current + 2).map((slicedCandidate, index) => (
					<CandidateWrapper key={`candidate-${slicedCandidate.name}`}>
						<CandidateImage
							onClick={() => handleClickCandidate(slicedCandidate, index)}
							selected={selectedIndex === index}
						>
							<img src={slicedCandidate.image} alt={slicedCandidate.name} width={138} />
						</CandidateImage>
						<CandidateName>{slicedCandidate.name}</CandidateName>
					</CandidateWrapper>
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

const Title = styled.div`
	margin-top: 10vh;

	color: #222;
	font-size: 35px;
	font-weight: 800;
	line-height: 44px;
`;

const RoundMatchInfo = styled.div`
	width: 90vw;

	display: flex;
	justify-content: space-between;

	color: rgba(148, 0, 0, 0.5);
	font-size: 19px;
	font-weight: 500;

	margin-top: 17px;
`;

const CandidatesWrapper = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-evenly;
	gap: 10px;

	margin-top: 100px;
`;

const CandidateWrapper = styled.div`
	font-size: 22px;
	color: #a4a4a4;
`;

const CandidateImage = styled.div<{ selected: boolean }>`
	width: 138px;
	height: 138px;

	background-color: ${({ selected }) => (selected ? '#ff5e60' : 'rgba(237, 237, 247, 0.50)')};

	border-radius: 50%;
	transition: background-color 0.5s ease;
`;

const CandidateName = styled.div`
	text-align: center;
	font-family: Lato;
	font-weight: 700;

	padding: 20px 0;
`;
