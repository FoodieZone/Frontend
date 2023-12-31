import { useEffect, type ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
	children: ReactNode;
	onClose: () => void;
	closeOnDim?: boolean;
	backgroundOpacity?: number;
}

function Popup({ children, onClose, closeOnDim = false, backgroundOpacity = 70 }: Props) {
	const handleClosePopup = () => {
		if (closeOnDim) onClose();
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);

	return (
		<Container>
			<Dim onClick={handleClosePopup} backgroundOpacity={backgroundOpacity} />
			<Contents>{children}</Contents>
		</Container>
	);
}

export default Popup;

const Container = styled.div`
	position: fixed;
	overflow: hidden;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

const Dim = styled.div<{ backgroundOpacity: number }>`
	width: 100%;
	height: 100%;
	background-color: #000000;
	opacity: ${({ backgroundOpacity }) => backgroundOpacity / 100};
`;

const Contents = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: calc(100% - 48px);
	border-radius: 20px;
	padding: 30px 16px 21px 16px;
	background-color: #ffffff;
	overflow: hidden;
`;
