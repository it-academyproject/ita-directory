import styled from "styled-components";
import Colors from "theme/Colors";

export const InputStyled = styled.input.attrs((props) => ({
	className: `
	w-full 
	text-sm 
	py-1.5 
	px-2 
	mt-4 
	border 
	rounded-md 
	hover:opacity-90 
	${props.error ? "border-red-200" : props.success ? "border-green-200" : "border-gray-200"}`,
}))`
	&:focus {
		outline: 0 none;
		border: 1px solid
			${(props) => (props.error ? "red" : props.success ? "green" : Colors.darkBlue)};
	}

	& + label {
		display: inline;
	}
`;

export const ErrorStyled = styled.small.attrs({
	className: `text-red-600`,
})`
	display: block;
	height: 0.1rem;
	font-size: 0.7rem;
`;
