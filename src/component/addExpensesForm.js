import React, { useState, useContext } from "react";
import { AppContext } from "../context/appContext";
import { v4 as uuidv4 } from "uuid";

function AddExpensesForm() {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState("");
	const [cost, setCost] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};
		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	};
	return (
		<form onSubmit={onSubmit}>
			<div className="row">
				<div className="col-sm">
					<label for="name">name</label>
					<input
						required="required"
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div className="col-sm">
					<label for="cost">Cost</label>
					<input
						type="text"
						required="required"
						className="form-control"
						id="cost"
						value={cost}
						onChange={(e) => {
							setCost(e.target.value);
						}}
					/>
				</div>
				<div className="col-sm">
					<button className="btn btn-primary" type="submit">
						Save
					</button>
				</div>
			</div>
		</form>
	);
}

export default AddExpensesForm;
