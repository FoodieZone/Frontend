import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

function BaseLayout({ children }: PropsWithChildren) {
	return <Container>{children}</Container>;
}

export default BaseLayout;

const Container = styled.main`
	width: 100%;
	height: 100vh;
	min-width: 375px;
	max-width: 768px;
	margin: 0 auto;
`;
