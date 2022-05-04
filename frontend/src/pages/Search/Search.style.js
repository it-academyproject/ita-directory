import styled from "styled-components";
import Colors from "../../theme/Colors";
import {Device} from "../../theme/mediaQueries";

export const SearchStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1.5rem;
	width: 100%;
	position: relative;

	@media only ${Device.Tablet} {
		grid-template-columns: 0.6fr 0.4fr;
	}
	.search-body {
		width: 100%;
	}
	.spinner {
		width: 2.5rem;
		height: 2.5rem;
		color: ${Colors.frenchBlue};

		animation-name: fullRotation;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		@keyframes fullRotation {
			from {
				transform: rotate(0deg);
				width: 0.5rem;
			}
			to {
				width: 1;
				transform: rotate(360deg);
			}
		}
		@media only ${Device.Tablet} {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
	.search-map {
		width: 100%;
		height: 75vh;
		border-radius: 0.5rem;
		position: -webkit-sticky;
		position: sticky;
		top: 1.5rem;
	}
`;
