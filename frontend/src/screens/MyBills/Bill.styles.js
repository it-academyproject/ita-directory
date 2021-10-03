import styled from "styled-components";
import Colors from "theme/Colors";

export const Error = styled.div`
	border: 1px solid;
	margin: auto;
	text-align: center;
	padding: 15px 10px 15px 15px;
	background-position: 10px center;
	max-width: 460px;
	color: #d8000c;
	background-color: #ffbaba;
	font-size: 24px;
`;

export const BillComponentStyled = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-content: center;
	align-items: center;
	background-color: #eeeeee;
	padding-bottom: 3rem;

	.logo {
		display: flex;
		align-items: center;
		color: ${(props) => (props.color_logo ? props.color_logo : Colors.darkRed)};
		font: normal normal normal 15px/15px Korb-Bold;
		letter-spacing: 0px;
		text-transform: uppercase;
		opacity: 1;
		margin-top: 1.5rem;
	}

	.blueGradient {
		width: 7.6rem;
		margin-bottom: 1.5rem;
	}
`;

export const BillStyled = styled.div`
	width: 100%;
	transform: scale(0.8);
	padding: 0;
	background-color: ${Colors.lightGrey1};
	display: flex;
	flex-direction: column;
	font-family: "Inter", sans-serif;
	@media (min-width: 768px) {
		transform: scale(1);
		//padding-right: 0;
		//padding-left: 1rem;
		background-color: orange;
		//justify-content: center;
		//padding: 0 20% 0 60%;
	}
	.bold {
		font-weight: bold;
	}

	h3,
	h4,
	h5 {
		font-weight: bold;
	}

	h5 {
		font-size: small;
	}
	@media (min-width: 768px) {
		padding: 1.5rem 2rem 0 2rem;
		width: 75%;
	}

	header {
		display: flex;
		flex-direction: row;
		padding: 0 2rem;
		//flex-wrap: nowrap;
		justify-content: space-between;

		@media (min-width: 768px) {
			padding: 0;
		}
		@media (min-width: 893px) {
			padding: 0 2rem;
		}
		@media (min-width: 1230px) {
			padding: 0 4rem;
		}
	}
	.address-name-wrapper {
		justify-content: space-between;
		margin-top: -12rem;

		@media (min-width: 768px) {
			display: flex;
			flex-direction: row;
			margin-top: 0rem;
		}
	}

	.rdt_TableHead {
		padding-right: 11px;
	}
`;

export const InvoiceRecipientStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	padding: 2rem 2rem 0rem 2rem;
	background-color: yellow;

	div {
		width: 100%;
		padding: 0;
	}
	p {
		font-size: small;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		padding: 5rem 0rem 0rem 0rem;

		div {
			background-color: red;
			display: flex;
			flex-direction: column;
			width: auto;
			padding: 0;
		}
	}

	@media (min-width: 893px) {
		padding: 5rem 2rem 0rem 2rem;
	}

	@media (min-width: 1230px) {
		padding: 5rem 8rem 0rem 4rem;
	}
`;

export const InvoiceSenderStyled = styled(InvoiceRecipientStyled)`
	@media (min-width: 768px) {
		justify-content: flex-end;
	}
`;

export const TableWrapperStyled = styled.div`
	margin-top: 3rem;
	border-top: 2px solid ${(props) => props.borderColor};
	width: 100%;

	table {
		width: 100%;
		block-size: fit-content;
		display: flex;
		flex-direction: column;

		th {
			justify-content: center;
			font-weight: bold;
			font-size: 13px;
			align-items: center;
			padding-top: 12px;
			min-height: 47px;
		}
		tr {
			display: grid;
			grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
			height: 47px;
			width: 100%;

			//padding-top: 12px;
			.white {
				background-color: ${Colors.white};
			}
			.grey {
				background-color: ${Colors.lightGrey0};
			}

			td {
				display: flex;
				flex-grow: 1;
				font-size: 13px;
				min-width: 50px;
				justify-content: center;
			}
		}
	}
`;

export const CalcTableStyled = styled.table`
	padding: 5px 0 0 auto;
	background-color: pink;
	width: 50%;
	margin-left: auto;
	@media (min-width: 768px) {
		width: 100%;
		margin-left: 0;
	}
	table {
		border-collapse: collapse;
	}
	td,
	th {
		text-align: left;
		font-weight: normal;
		padding-left: 27px;
		justify-content: center;
		font-size: 13px;
		align-items: center;
		padding-top: 12px;
		min-height: 47px;
	}
	.bg-grey {
		background-color: ${Colors.lightGrey0};
	}
	.bold {
		font-weight: bold;
	}
	tr {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: yellow;
		td {
			background-color: red;
			padding: 0 20% 0 20%;
			//padding: 0 64px 0 186px;
			//display: grid;
			//grid-template-columns: 2fr 1fr;
			//flex-grow: 1;
			font-size: 13px;
			min-width: 50px;
			//padding-right: 5rem;
			display: flex;
			justify-content: flex-end;
			@media (min-width: 768px) {
				//transform: scale(0.8);
				//padding-right: 0;
				//padding-left: 1rem;
				background-color: orange;
				//justify-content: flex-end;
				padding: 0 40% 0 auto;
			}
		}
	}
`;
export const TermsAndCalcStyled = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column-reverse;
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 50% 50%;
		background-color: green;
	}
	.terms {
		margin-top: 2.5rem;
		padding: 0 2rem;
		//padding: 0 3.5rem;
		max-width: 400px;
		background-color: purple;
		height: 88px;

		@media (min-width: 768px) {
			margin-top: 4rem;
			padding: 0rem;
			max-width: 400px;
		}
		@media (min-width: 893px) {
			padding: 0 2rem;
		}
		@media (min-width: 1229px) {
			padding-left: 4rem;
		}
	}
`;

export const PaySignStyled = styled.section`
	margin: 2.5rem 0 4rem 0;
	padding: 0 0rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		margin: 2.5rem 0 4rem 0;
		padding: 0;
	}

	h3 {
		margin: 0.5rem 0;
		padding-bottom: 1rem;
	}

	.pay {
		display: flex;
		flex-direction: column;
		padding-bottom: 2rem;

		h4 {
			margin: 0.5rem 0;
		}

		small {
			line-height: 1.5;
		}
	}
`;

export const PaymentMethodStyled = styled.div`
	padding-left: 2rem;

	@media (min-width: 768px) {
		padding-left: 0rem;
	}
	@media (min-width: 893px) {
		padding-left: 2rem;
	}

	@media (min-width: 1230px) {
		padding-left: 4rem;
	}
`;

export const SignatureStyled = styled.div`
	margin-top: 1.8rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
	padding-left: 2rem;

	@media (min-width: 768px) {
		justify-content: flex-end;
		text-align: center;
		width: 30%;
	}

	p {
		margin: 0;
		font-weight: bold;
	}

	h4 {
		font-size: small;
		font-weight: lighter !important;
	}

	.signature-image {
		height: 80%;
		margin-bottom: 3rem;

		@media (min-width: 768px) {
			margin-bottom: 3rem;
		}
	}
`;

export const RowStyled = styled.div`
	min-height: "47px";
	align-items: center;
`;

export const FooterStyled = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	margin-top: -3rem;
	margin-bottom: 20px;

	h4 {
		margin: 0;
		font-weight: bold;
	}

	p {
		font-size: small;
	}
`;

/*
	@media (min-width: 768px) {
		padding-left: 2rem;
	}
	@media (min-width: 893px) {
		padding-left: 2rem;
	}
	*/
