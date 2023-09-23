import React from "react";
import SectionContainer from "../ui/SectionContainer";
import PersonInfo from "../ui/PersonInfo";
import Calories from "./Calories";
import Macros from "./Macros";
import Button from "./Buttons/Button";

export default function Output() {
	return (
		<SectionContainer className="answer" id="output">
			<div className="answer__container">
				<h2>Macros Breakdown</h2>
				<PersonInfo />
				<Calories />
				<Macros />
				<Button dispatchType="reset" id="reset">
					Reset
				</Button>
			</div>
		</SectionContainer>
	);
}
