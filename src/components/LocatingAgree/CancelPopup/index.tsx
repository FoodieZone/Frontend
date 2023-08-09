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
						위치동의를 하지않으면
						<br />
						서비스 이용이 어려워요😭
					</Strong>

					<Subscription>
						서비스 정상작동을 위해
						<br />
						위치정보를 꼭 동의해주세요
					</Subscription>
				</Texts>

				<Buttons>
					<AgreeButton>동의하러가기</AgreeButton>
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
	gap: 10px;
	margin-bottom: 34px;
`;

const Strong = styled.div`
	font-weight: 600;
	font-size: 22px;
	line-height: 33px;
	color: #090f24;
`;

const Subscription = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 23.8px;
	color: #bec0c7;
`;

const Buttons = styled.div`
	width: 100%;
`;

const AgreeButton = styled.button`
	width: 100%;
	border: none;
	background-color: #5887f6;
	border-radius: 20px;
	padding: 19px 20px;
	color: #ffffff;
`;
