import styled from '@emotion/styled';

import { Icon } from '~/components';
import type { Restaurant } from '~/interfaces';

const defaultImage = 'https://students.senecacollege.ca/assets/Themes/default/images/album-default.png';

interface Props {
	item: Restaurant;
}

function SheetCard({ item }: Props) {
	const { image, address, name, foodName, distance, kakaoMapsId } = item;
	const transDistance = `${distance / 1000}km`;

	const handleClickCard = () => {
		window.open(`https://map.kakao.com/link/map/${kakaoMapsId}`, '_blank');
	};

	return (
		<Container onClick={handleClickCard}>
			<Image src={image ?? defaultImage} />

			<Contents>
				<Title>{name}</Title>
				<Address>
					<Icon name="icon-location" width={13} height={12} />
					<AddressTitle>{address}</AddressTitle>
				</Address>
				<Info>{`${foodName} ${transDistance}`}</Info>
			</Contents>
		</Container>
	);
}

export default SheetCard;

const Container = styled.div`
	display: flex;
	gap: 17px;
	padding-right: 10px;
`;

const Image = styled.img`
	border-radius: 20px;
	background-color: #d9d9d9;
	width: 120px;
	height: 110px;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	padding: 13px 3px 24px 0;
`;

const Title = styled.div`
	font-size: 16px;
	font-weight: 700;
	line-height: 170%;
	color: black;
`;

const Address = styled.div`
	display: flex;
	gap: 2px;
	align-items: center;
`;

const AddressTitle = styled.div`
	font-size: 10px;
	font-weight: 500;
	line-height: 150%;
	color: ${({ theme }) => theme.colors.gray[2]};
	margin: 11.5px 0 4.5px;
`;

const Info = styled.div`
	font-size: 10px;
	font-weight: 400;
	line-height: 150%;
	padding-left: 2px;
	color: ${({ theme }) => theme.colors.gray[2]};
`;
