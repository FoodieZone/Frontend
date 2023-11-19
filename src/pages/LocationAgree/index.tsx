import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { URL } from '~/constants';
import { useGeoLocation } from '~/hooks';

import { MOCK_CATEGORIES } from './index.consts';

import { CancelPopup } from '~/components/LocatingAgree';
import { FullPageLoading, Icon } from '~/components/shared';
import { candidateState } from '~/stores/candidate';

function LocationAgree() {
	const navigate = useNavigate();
	const { geoLocating, isLocating, isLocated, location } = useGeoLocation({ pending: true });

	const setCategories = useSetRecoilState(candidateState);

	const [isOpenCancelPopup, setIsOpenCancelPopup] = useState(false);

	useEffect(() => {
		if (isLocated) {
			// const data = await foodios.get(`/restaurants/rounds/?lng=${location.longitude}&lat=${location.latitude}`);
			console.log(location);

			setCategories(MOCK_CATEGORIES.foods);

			if (MOCK_CATEGORIES.round === 16) {
				navigate(URL.HOME);
			} else {
				navigate(URL.WORLD_CUP.ROUND);
			}
		}
	}, [isLocated]);

	const handleClickAgree = () => {
		geoLocating();
	};

	const handleClickCancel = () => {
		setIsOpenCancelPopup(true);
	};

	const handleClosePopup = () => {
		setIsOpenCancelPopup(false);
	};

	if (isLocating) {
		return <FullPageLoading />;
	}

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

			{isOpenCancelPopup && <CancelPopup onClose={handleClosePopup} />}
		</Container>
	);
}

export default LocationAgree;

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Wrapper = styled.div`
	position: absolute;
	top: 25%;
	box-sizing: border-box;
	width: 100%;
	padding: 0 28px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`;

const Strong = styled.span`
	font-weight: 700;
	font-size: 21px;

	line-height: 133.333%;
	letter-spacing: 0.87px;

	margin-top: 32px;
	color: #000000;
`;

const Notice = styled.span`
	text-align: center;
	font-weight: 400;
	font-size: 14px;

	line-height: 142.857%;
	letter-spacing: -0.24px;

	margin-top: 16px;
	color: #8e8e93;
`;

const Buttons = styled.div`
	margin-top: 44px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
`;

const Button = styled.button`
	border-radius: 16px;
	border: none;
	padding: 14px 16px;
	font-size: 15px;

	line-height: 140%;
	letter-spacing: -0.408px;
	text-align: center;
	cursor: pointer;
`;

const Agree = styled(Button)`
	// TODO: 색상 팔레트를 만들어서 관리하도록 수정해야한다.
	color: #ffffff;
	background-color: ${({ theme }) => theme.colors.red[1]};
	font-weight: 600;
`;

const Cancel = styled(Button)`
	color: #8e8e93;
	background-color: #ffffff;
	font-weight: 300;
`;
