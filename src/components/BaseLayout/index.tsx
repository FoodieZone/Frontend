import type { PropsWithChildren } from 'react';

import { S } from './index.styles';

const BaseLayout = ({ children }: PropsWithChildren) => <S.Container>{children}</S.Container>;

export default BaseLayout;
