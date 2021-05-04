import React, { useContext, useState } from "react";
import { AppContext } from "../context/appContext";

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [display, setdisplay] = useState(true);
	const [bud, setbud] = useState("");

	const onClick = (e) => {
		e.preventDefault();
		const money = parseInt(bud);
		dispatch({
			type: "CHANGE_BUDGET",
			payload: money,
		});
		setdisplay(!display);
	};
	return (
		<div className="alert alert-secondary d-flex justify-content-between align-items-center">
			{display ? (
				<input
					type="number"
					placeholder={`budget : £${budget}`}
					required="required"
					id="bud"
					value={bud}
					className="form-control"
					onChange={(e) => {
						setbud(e.target.value);
					}}
					onBlur={() => {
						setdisplay(false);
					}}
				></input>
			) : (
				<span>{`£ ${budget}`}</span>
			)}
			<button className="btn btn-primary ml-2" onClick={onClick}>
				{display ? "Save" : "Edit"}
			</button>
		</div>
	);
};

export default Budget;
