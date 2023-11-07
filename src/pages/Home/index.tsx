import type { ChangeEvent } from 'react';
import { Children, useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { isNotNull } from '~/utils';

import { ROUND } from './index.consts';

function Home() {
	const [selectedRound, setSelectedRound] = useState<number | null>(null);

	const handleChangeRound = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSelectedRound(Number(value));
	};

	return (
		<Container>
			<Contents>
				<Title>{`푸디존에서\n당신의 최적맛집을 찾아보세요`}&nbsp;&nbsp;😆</Title>

				<SelectRoundButtonWrapper>
					{Children.toArray(
						ROUND.map((round, index) => (
							<>
								<SelectRoundButton htmlFor={round.title} isSelected={round.value === selectedRound}>
									<input
										id={round.title}
										style={{ display: 'none' }}
										type="radio"
										value={round.value}
										name="round"
										onChange={handleChangeRound}
										checked={round.value === selectedRound}
									/>
									{round.title}
								</SelectRoundButton>
								{ROUND.length - 1 !== index && <Divider isSelected={isNotNull(selectedRound)} />}
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
	display: flex;
	justify-content: space-evenly;
`;

const SelectRoundButton = styled.label<{ isSelected: boolean }>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: #111928;
	font-size: 14px;
	line-height: 21px;
	border-style: solid;

	&:first-child {
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
		border-width: 1px 0 1px 1px;
	}

	&:last-child {
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		border-width: 1px 1px 1px 0;
	}

	${({ isSelected }) =>
		isSelected
			? css`
					font-weight: 700;
					background-color: rgba(255, 94, 96, 0.12);
					border-color: #ff5e60;
			  `
			: css`
					font-weight: 500;
					background-color: #fff;
					border-color: #e6e7eb;
			  `}
`;

const Divider = styled.div<{ isSelected: boolean }>`
	width: 1px;
	height: 100%;
	background-color: ${({ isSelected }) => (isSelected ? '#ff5e60' : '#e6e7eb')};
`;

const StartButton = styled.button`
	height: 56px;
	margin: 0 27px 32px;
	border-radius: 12px;
	outline: none;
	background-color: ${({ theme }) => theme.colors.red[1]};
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;
