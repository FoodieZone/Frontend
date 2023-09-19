import { useEffect } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Icon } from '~/components/shared';
function Splash() {
	const navigate = useNavigate();

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate('/start', { replace: true });
		}, 1700);

		return () => {
			clearTimeout(timeout);
		};
	}, [navigate]);

	return (
		<Container>
			<Wrapper initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3 }}>
				<Truck name="icon-food_truck" />
				<Logo name="logo-big" />
			</Wrapper>
		</Container>
	);
}

export default Splash;

const Container = styled.div`
	height: 100%;
	max-width: 352px;
	margin: auto;
`;

const Wrapper = styled(motion.div)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 60% 12px;
`;

const Truck = styled(Icon)`
	width: 100%;
`;

const Logo = styled(Icon)`
	width: 80%;
`;
