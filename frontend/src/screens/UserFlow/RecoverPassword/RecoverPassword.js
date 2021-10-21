import {useEffect, useState} from "react";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/Button/Button";
// import Notification from "components/units/Notifications/Notification";

// Styles
import {Container, Form, LabelStyled} from "../UserFlow.styles";

// Utilities
import * as Utils from "utils/userFlow";
import {msgs} from "utils/userFlow";

console.log(Utils.validatePassword());

const users = [
	{
		email: "juan@mail.com",
		password: "Juan1992",
	},
];

const updateUser = (email, password) => {
	const newUsers = [];
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.email === email) {
			newUsers.push(email, password);
			localStorage.setItem("itacademy", "HE ENTRADO!!!!");
			console.log("The user is correct. You will receive an email to change your password.");
		} else {
			console.error("the user is incorrect. Please try again.");
		}
	}
};

const RecoverPassword = ({retrieveUser}) => {
	// const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [isEmailError, setIsEmailError] = useState(false);
	const [password, setPassword] = useState("");

	// provisional
	useEffect(() => {
		setPassword("");
	}, []);

	useEffect(() => {
		setIsEmailError(email !== "" ? !Utils.validateEmail(email) : false);
	}, [email]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 2000);

		try {
			updateUser(email, password, (error, token) => {
				// if (error) return setError(error.message);
				retrieveUser(token);
			});
		} catch ({message}) {
			// setError(message);
			console.error(message);
		}
	};

	return (
		<Body title="Cambiar contraseña" justifyTitle="center">
			<Container>
				<Form onSubmit={handleSubmit}>
					<LabelStyled>
						<strong>¿Has olvidado tu contraseña?</strong> Para recuperarla introduce tu
						email y te enviaremos una nueva por correo.
					</LabelStyled>
					<Input
						type="email"
						placeholder={msgs.placeholderEmail}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="emailName"
						name="emailName"
						error={isEmailError}
						errorText={msgs.emailError}
						disabled={disabled}
					/>
					<AsyncButton
						text="Enviar"
						loadingText="Enviando"
						iconPosition="left"
						type="submit"
						className="w-full orangeGradient mt-6"
						isLoading={isLoading}
						animated={animatedState}
						disabled={disabled}
					/>
				</Form>
			</Container>
		</Body>
	);
};

export default RecoverPassword;
