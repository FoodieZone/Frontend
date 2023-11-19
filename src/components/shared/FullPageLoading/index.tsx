import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import Indicator from '../Indicator';

interface FullPageLoadingProps extends PropsWithChildren {
	loaderSize?: number;
}

function FullPageLoading({ children, loaderSize = 200 }: FullPageLoadingProps) {
	return (
		<Container>
			<Wrapper>
				<Indicator size={loaderSize} />
				<Text>{children}</Text>
			</Wrapper>
		</Container>
	);
}

export default FullPageLoading;

const Container = styled.div`
	height: 100%;
`;

const Wrapper = styled.div`
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50% 0;
`;

const Text = styled.div`
	color: #757682;
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	line-height: 105.556%;
	letter-spacing: -1.5px;
	margin-top: 59px;
`;
