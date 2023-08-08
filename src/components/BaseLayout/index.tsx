import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

const BaseLayout = ({ children }: PropsWithChildren) => <Container>{children}</Container>;

const Container = styled.main`
	width: 100%;
	height: 100vh;
	min-width: 375px;
	max-width: 768px;
	margin: 0 auto;
`;

export default BaseLayout;
