import styled from '@emotion/styled';

import { Popup } from '~/components/shared';

interface Props {
	onClose: () => void;
}

function CancelPopup(props: Props) {
	return (
		<Popup {...props} closeOnDim>
			<Container>
				<Texts>
					<Strong>
						위치동의를 하면 우리집 근처
						<br />
						최고 맛집을 추천해드려요!
					</Strong>

					<Subscription>
						서비스 정상작동을 위해
						<br />
						위치정보를 꼭 동의해주세요 🙏🏻
					</Subscription>
				</Texts>

				<Buttons>
					<AgreeButton>동의하러가기</AgreeButton>
					<CancelButton>동의 안하고 추천받기</CancelButton>
				</Buttons>
			</Container>
		</Popup>
	);
}

export default CancelPopup;

const Container = styled.div`
	background-color: #ffffff;
`;

const Texts = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 36px;
	margin-bottom: 19.2px;
`;

const Strong = styled.div`
	font-weight: 600;
	font-size: 22px;
	line-height: 140.909%;
	color: #090f24;
`;

const Subscription = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 165%;
	color: #bec0c7;
`;

const Buttons = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 19px 20px;
	cursor: pointer;
	border-radius: 20px;
`;

const AgreeButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.red};
	color: #ffffff;
	font-weight: 500;
	font-size: 16px;
	line-height: 160%;
`;

const CancelButton = styled(Button)`
	background-color: #ffffff;
	color: #8e8e93;
	font-weight: 300;
	font-size: 15px;
	line-height: 140%;
	letter-spacing: -0.408px;
`;
