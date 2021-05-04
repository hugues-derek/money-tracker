import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./expenseItem";
import { AppContext } from "../context/appContext";

const ExpensesList = () => {
	const { expenses } = useContext(AppContext);
	const [filterExpenses, setFilterExpenses] = useState(expenses || []);

	const handleChange = (event) => {
		const searchResults = expenses.filter((item) => {
			return item.name.toLowerCase().includes(event.target.value);
		});
		setFilterExpenses(searchResults);
	};

	useEffect(() => {
		setFilterExpenses(expenses);
	}, [expenses]);

	return (
		<>
			<input
				type="text"
				required="required"
				className="form-control mb-2 mr-sm-2"
				placeholder="Type your search..."
				id="search"
				onChange={handleChange}
			/>
			<ul className="list-group">
				{filterExpenses.map((item) => {
					return <ExpenseItem id={item.id} name={item.name} cost={item.cost} />;
				})}
			</ul>
		</>
	);
};

export default ExpensesList;
