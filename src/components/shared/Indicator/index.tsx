import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Lottie from 'lottie-react';

import indicatorJson from './lottie-indicator.json';

interface Props {
	size?: number;
}

function Indicator({ size }: Props) {
	return (
		<Container size={size}>
			<Lottie animationData={indicatorJson} loop={true} />
		</Container>
	);
}

export default Indicator;

const Container = styled.div<{ size?: number }>`
	${({ size }) =>
		size &&
		css`
			width: ${size}px;
		`}
`;
