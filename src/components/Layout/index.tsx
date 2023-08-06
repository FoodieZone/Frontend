import type { PropsWithChildren } from 'react';

import { S } from './index.styles';

const Layout = ({ children }: PropsWithChildren) => <S.Container>{children}</S.Container>;

export default Layout;
