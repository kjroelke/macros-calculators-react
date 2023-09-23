import React from "react";
import Button from "./Buttons/Button";
import ClientInfo from "./ClientInfo";
import SectionContainer from "../ui/SectionContainer";
import { useMacros } from "../Context/MacroContext";

export default function BMRCalc() {
	const {
		bio: { gender },
	} = useMacros();
	return (
		<SectionContainer id="bmr-calculator" className="form">
			<div className="form__content">
				<div className="form__content--gender">
					<p>
						Current Gender:{" "}
						<span className="current-gender">{gender}</span>
					</p>
					<Button dispatchType="bio/gender">Toggle Gender</Button>
				</div>
			</div>
			<ClientInfo />
		</SectionContainer>
	);
}
