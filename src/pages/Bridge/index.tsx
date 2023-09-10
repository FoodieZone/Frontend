import styled from '@emotion/styled';

import { Indicator } from '~/components/shared';

function Bridge() {
	const userName = '회원 닉네임';

	return (
		<Container>
			<Wrapper>
				<Indicator size={200} />

				<Text>
					{userName}님의 푸디존에서
					<br />
					맞춤형 맛집을 찾고있습니다! 조금만 기다려주세요🙏🏻
				</Text>
			</Wrapper>
		</Container>
	);
}

export default Bridge;

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
`;
