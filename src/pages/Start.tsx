import styled from '@emotion/styled';

import { Icon } from '~/components/shared';

function Start() {
	return (
		<Container>
			<Wrapper>
				<Icon name="logo-small" width={135} />
				<Contents>
					<Icon name="icon-food_truck" />
					<Strong>당신이 땡기는 음식은?</Strong>

					<Subscription>
						지금당장 먹고싶은 음식과
						<br />내 주변에 어떤 맛집이 있는지까지
						<br />
						당신의 주변의 모든 맛집을 찾아드려요!
					</Subscription>
				</Contents>

				<StartButton>시작하기</StartButton>
			</Wrapper>
		</Container>
	);
}

export default Start;

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 15px 27px 23px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Contents = styled.div`
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const Strong = styled.div`
	font-size: 25px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -3px;
	margin: 41px 0 28px;
`;

const Subscription = styled.div``;

const StartButton = styled.button`
	position: absolute;
	bottom: 23px;
	left: 50%;
	transform: translateX(-50%);
	width: calc(100% - 54px);
	border-radius: 16px;
	border: none;
	cursor: pointer;
	padding: 14px 16px;
	background-color: #ff5e60;
	color: #ffffff;
	font-size: 15px;
	font-weight: 600;
	line-height: 140%;
	letter-spacing: -0.408px;
`;
