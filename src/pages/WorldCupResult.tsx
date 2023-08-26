import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Dumplings from 'assets/images/13 Dumplings.jpg';

import type { ResultType } from '~/interfaces/result';

function WorldCupResult() {
	// FIXME: 임시 로딩 처리
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [result, setResult] = useState<ResultType | null>(null);

	// FIXME: 서버에서 넘어온 값이 들어갈 예정
	useEffect(() => {
		setTimeout(() => {
			setResult(() => ({ id: 1, title: '만두', src: Dumplings }));
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<Container>
			<Title>Final food</Title>

			{isLoading ? (
				<Spinner />
			) : (
				<>
					<Description>당신은 {result?.title ?? ''} 러버입니다!</Description>
					<FoodImage src={result?.src ?? ''} alt="food-image" />
					<FoodName>{result?.title ?? ''}</FoodName>
				</>
			)}
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

const Spinner = styled.div`
	font-size: 10px;
	margin: 50px auto;
	text-indent: -9999em;
	width: 11em;
	height: 11em;
	border-radius: 50%;
	background: #000000;
	background: -moz-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
	background: -webkit-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
	background: -o-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
	background: -ms-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
	background: linear-gradient(to right, #000000 10%, rgba(0, 0, 0, 0) 42%);
	position: relative;
	-webkit-animation: load3 1.4s infinite linear;
	animation: load3 1.4s infinite linear;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);

	&::before {
		width: 50%;
		height: 50%;
		background: #000000;
		border-radius: 100% 0 0 0;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
	}
	&::after {
		background: #ffffff;
		width: 75%;
		height: 75%;
		border-radius: 50%;
		content: '';
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	@-webkit-keyframes load3 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes load3 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
