import styled from '@emotion/styled';

import { Icon } from '~/components';
import type { Restaurant } from '~/interfaces';

const defaultImage = 'https://students.senecacollege.ca/assets/Themes/default/images/album-default.png';

interface Props {
	item: Restaurant;
}
function SwiperCard({ item }: Props) {
	const { image, name, address } = item;

	const handleClickItem = () => {
		console.log('click');
	};

	return (
		<Container onClick={handleClickItem}>
			<Image src={image ?? defaultImage} />

			<ContentsWrapper>
				<Title>{name}</Title>

				<Address>
					<Icon name="icon-map-pin" width={16} height={16} />
					<AddressText>{address}</AddressText>
				</Address>
			</ContentsWrapper>
		</Container>
	);
}

export default SwiperCard;

const Container = styled.div`
	border-radius: 10px;
	display: flex;
	overflow: hidden;
	background-color: white;
	height: 69px;
`;

const Image = styled.img`
	width: 102px;
	height: 100%;
`;

const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 14px 12px;
	gap: 3px;
`;

const Title = styled.div`
	font-size: 14px;
	font-weight: 700;
	line-height: 150%;
`;

const Address = styled.div`
	display: flex;
	align-items: center;
	gap: 2px;
`;

const AddressText = styled.div`
	font-size: 10px;
	font-weight: 500;
	line-height: 150%;
	color: ${({ theme }) => theme.colors.gray[2]};
`;
