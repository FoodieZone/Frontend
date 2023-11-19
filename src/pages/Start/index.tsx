import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { URL } from '~/constants';

import { Icon } from '~/components/shared';

function Start() {
	const navigate = useNavigate();

	const handleClickStart = () => {
		navigate(URL.LOCATION_INFORMATION_AGREE);
	};

	return (
		<Container>
			<Wrapper>
				<Icon name="logo-small" width={157} />

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

				<StartButton onClick={handleClickStart}>시작하기</StartButton>
			</Wrapper>
		</Container>
	);
}

export default Start;

const Container = styled.div`
	height: 100%;
	padding: 15px 27px 23px;
	box-sizing: border-box;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: #000000;
	margin-bottom: 35%;
`;

const Strong = styled.div`
	font-size: 25px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -3px;
	margin: 41px 0 28px;
`;

const Subscription = styled.div`
	font-size: 19px;
	font-weight: 300;
	line-height: 121.053%;
	letter-spacing: -1.52px;
`;

const StartButton = styled.button`
	border-radius: 16px;
	border: none;
	cursor: pointer;
	padding: 14px 16px;
	height: 58px;
	background-color: ${({ theme }) => theme.colors.red[1]};
	color: #ffffff;
	font-size: 15px;
	font-weight: 600;
	line-height: 140%;
	letter-spacing: -0.408px;
`;
