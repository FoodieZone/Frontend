import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Dumplings from 'assets/images/13 Dumplings.jpg';

import type { ResultType } from '~/interfaces/result';

function WorldCupResult() {
	const [result, setResult] = useState<ResultType | null>(null);

	// FIXME: 서버에서 넘어온 값이 들어갈 예정
	useEffect(() => {
		setResult(() => ({ id: 1, title: '만두', src: Dumplings }));
	}, []);

	return (
		<Container>
			<Title>Final food</Title>
			{/* TODO: 로딩이 들어갈 예정 */}
			<Description>당신은 {result?.title ?? ''} 러버입니다!</Description>
			<FoodImage src={result?.src ?? ''} alt="food-image" />
			<FoodName>{result?.title ?? ''}</FoodName>
		</Container>
	);
}

export default WorldCupResult;

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.span`
	margin-top: 124px;
	color: #222;
	font-size: 35px;
	font-weight: 800;
	line-height: 28px;
`;

const Description = styled.span`
	margin-top: 24px;
	color: #757682;
	font-size: 15px;
	font-weight: 400;
	line-height: 19px;
`;

const FoodImage = styled.img`
	width: 200px;
	margin-top: 38px;
`;

const FoodName = styled.span`
	margin-top: 18px;
	color: #a4a4a4;
	font-size: 22px;
	font-weight: 800;
	line-height: 14px;
`;
