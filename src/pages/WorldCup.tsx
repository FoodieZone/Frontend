import { useState } from 'react';

import Burger from '@assets/png/Burger.png';
import Pizza from '@assets/png/Pizza.png';
import styled from '@emotion/styled';

const WorldCupPage = () => {
	const [selected, setSelected] = useState<number | undefined>(undefined);

	const handleClickCandidate = (index: number) => {
		setSelected(index);
	};

	return (
		<Container>
			<Title>Choice Food</Title>
			<CandidatesWrapper>
				<CandidateLeft onClick={() => handleClickCandidate(0)} selected={selected}>
					{selected !== 1 && <img src={Burger} alt="Burger" height={200} />}
				</CandidateLeft>
				<CandidateRight onClick={() => handleClickCandidate(1)} selected={selected}>
					{selected !== 0 && <img src={Pizza} alt="Pizza" height={200} />}
				</CandidateRight>
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

	margin-top: 100px;
`;

const Candidate = styled.div`
	width: 100%;

	text-align: center;

	transition: 1s;
`;

const CandidateLeft = styled(Candidate)<{ selected: number | undefined }>`
	width: ${({ selected }) => (selected === 1 ? '0%' : '100%')};
`;

const CandidateRight = styled(Candidate)<{ selected: number | undefined }>`
	width: ${({ selected }) => (selected === 0 ? '0%' : '100%')};
`;
