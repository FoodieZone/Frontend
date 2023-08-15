import styled from '@emotion/styled';

function Home() {
	return (
		<Container>
			<Title>{`Welcome\nFoodie Zone`}</Title>

			<SelectRoundButtonWrapper>
				<SelectRoundButton>16강</SelectRoundButton>
				<Divider />
				<SelectRoundButton>8강</SelectRoundButton>
			</SelectRoundButtonWrapper>

			<StartButton>시작하기</StartButton>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.span`
	margin: 155px 0 0 40px;
	white-space: pre-line;
	color: #222;
	font-size: 36px;
	font-weight: 800;
	line-height: 44px;
`;

const SelectRoundButtonWrapper = styled.div`
	height: 52px;
	margin: 58px 28px 0;
	border: 1px solid #e5e7eb;
	border-radius: 6px;
	display: flex;
	justify-content: space-evenly;
`;

const SelectRoundButton = styled.label`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

const Divider = styled.div`
	width: 1px;
	height: 100%;
	background-color: #e6e7eb;
`;

const StartButton = styled.button`
	height: 50px;
	border-radius: 12px;
	position: fixed;
	right: 28px;
	left: 28px;
	bottom: 32px;
	outline: none;
	background-color: #ff5e60;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	cursor: pointer;
`;
