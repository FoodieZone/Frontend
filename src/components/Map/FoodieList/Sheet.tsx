import { Children } from 'react';

import styled from '@emotion/styled';

import SheetCard from './SheetCard';

import type { Restaurant } from '../index.types';

interface Props {
	items: Restaurant[];
	onClose?: () => void;
}

function Sheet({ items, onClose }: Props) {
	const handleClickDim = () => {
		onClose?.();
	};

	return (
		<Container>
			<Contents>
				<Title>푸디존이 추천하는 맛집 List</Title>
				<List>{Children.toArray(items.map((item) => <SheetCard item={item} />))}</List>
			</Contents>

			<Dim onClick={handleClickDim} />
		</Container>
	);
}

export default Sheet;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

const Dim = styled.div`
	display: fixed;
	top: 0;
	left: 0%;
	width: 100%;
	height: 100%;
	z-index: 0;
	background-color: rgba(0, 0, 0, 0.29);
`;

const Contents = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: white;
	border-radius: 26px 26px 0 0;
	padding: 14px 16px 30px;
	z-index: 1;
	height: 70%;
	width: 100%;
	box-sizing: border-box;
`;

const Title = styled.div`
	font-size: 19px;
	font-weight: 700;
	line-height: 170%;
	letter-spacing: -1px;
	color: black;
	padding: 10px 0;
	margin-bottom: 10px;
`;

const List = styled.div`
	height: calc(100% - 50px);
	padding-bottom: 30px;
	overflow: auto;
`;
