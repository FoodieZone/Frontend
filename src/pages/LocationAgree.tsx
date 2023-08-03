import styled from '@emotion/styled';

import { Icon } from '~/components/shared';

function LocationAgree() {
	const handleClickAgree = () => {
		console.log('agree');
	};

	const handleClickCancel = () => {
		console.log('cancel');
	};

	return (
		<Container>
			<Wrapper>
				<Icon name="icon-location" />
				<Strong>회원님의 위치정보가 필요해요!</Strong>
				<Notice>
					최상의 푸드존을 추천해드리기 위해
					<br />
					당신의 푸드존을 파악이 필요해요
				</Notice>

				<Buttons>
					<Agree onClick={handleClickAgree}>위치 정보 수락하기</Agree>
					<Cancel onClick={handleClickCancel}>나중에 하기</Cancel>
				</Buttons>
			</Wrapper>
		</Container>
	);
}

export default LocationAgree;

const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Strong = styled.span`
	font-weight: 700;
	font-size: 21px;

	// line-height, letter-spacing은 %로 받아서 수정해야한다.
	line-height: 28px;
	letter-spacing: 0.87px;

	// margin 정보도 피그마에 노출시켜달라고 요청해야한다.
	margin-top: 30px;
	color: #000000;
`;

const Notice = styled.span`
	text-align: center;
	font-weight: 400;
	font-size: 14px;

	// line-height, letter-spacing은 %로 받아서 수정해야한다.
	line-height: 20px;
	letter-spacing: -0.24px;

	// margin 정보도 피그마에 노출시켜달라고 요청해야한다.
	margin-top: 30px;
	color: #8e8e93;
`;

const Buttons = styled.div`
	// margin 정보도 피그마에 노출시켜달라고 요청해야한다.
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
`;

const Button = styled.button`
	border-radius: 16px;
	border: none;
	padding: 14px 16px;
	font-weight: 600;
	font-size: 15px;

	// line-height, letter-spacing은 %로 받아서 수정해야한다.
	line-height: 21px;
	letter-spacing: -0.41px;
	text-align: center;
	cursor: pointer;
`;

const Agree = styled(Button)`
	// 색상 팔레트를 만들어서 관리하도록 수정해야한다.
	color: #ffffff;
	background-color: #5887f6;
`;

const Cancel = styled(Button)`
	color: #8e8e93;
	background-color: #ffffff;
`;
