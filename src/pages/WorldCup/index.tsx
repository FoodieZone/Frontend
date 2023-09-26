import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { candidatesFromServer } from './index.consts';

import type { CandidatesFromServerType } from './index.types';

const WorldCupPage = () => {
	const navigate = useNavigate();
	const {
		state: { round },
	} = useLocation();

	const [candidates, setCandidates] = useState<CandidatesFromServerType[]>();
	const [currentMatch, setCurrentMatch] = useState<number>(1);
	const [match, setMatch] = useState<number>(0);

	const leftIndex = useRef<number>(0);
	const winners = useRef<CandidatesFromServerType[]>([]);

	useEffect(() => {
		setMatch(round / 2);

		// 서버 요청
		setCandidates(candidatesFromServer);
	}, []);

	const handleClickCandidate = (el: CandidatesFromServerType) => {
		winners.current.push(el);

		setCurrentMatch((prev) => ++prev);
		leftIndex.current = leftIndex.current += 2;

		if (winners.current.length === match) {
			setCandidates(winners.current);
			leftIndex.current = 0;

			if (winners.current.length === 1 && match === 1) {
				navigate('/world-cup/result', { state: { result: winners.current[0] } });

				return;
			}

			winners.current = [];
			setCurrentMatch(0);
			setMatch((prev) => prev / 2);
		}
	};

	return (
		<Container>
			<Title>Choice Food</Title>
			<SubTitle>
				{currentMatch} / {match}
			</SubTitle>
			<CandidatesWrapper>
				{candidates?.slice(leftIndex.current, leftIndex.current + 2).map((el, index) => (
					<Candidate key={`candidate-${el.name}`}>
						<CandidateImage onClick={() => handleClickCandidate(el)} index={index}>
							<img src={el.image} alt={el.name} width={138} />
						</CandidateImage>
						<CandidateName>{el.name}</CandidateName>
					</Candidate>
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
	margin-top: 155px;

	color: #222;
	font-size: 35px;
	font-weight: 800;
	line-height: 44px;
`;

const SubTitle = styled.span`
	font-size: 25px;
	font-weight: 800;
`;

const CandidatesWrapper = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-evenly;
	gap: 10px;

	margin-top: 100px;
`;

const Candidate = styled.div`
	font-size: 22px;
	color: #a4a4a4;
`;

const CandidateImage = styled.div<{ index: number }>`
	background-color: ${({ index }) => (index === 0 ? '#ff5e60' : '#EDEDF780')};

	border-radius: 50%;
`;

const CandidateName = styled.div`
	text-align: center;
	font-family: Lato;
	font-weight: 700;

	padding: 20px 0;
`;
