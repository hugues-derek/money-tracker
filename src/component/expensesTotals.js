import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const ExpensesTotals = () => {
	const { expenses } = useContext(AppContext);
	const spent = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return <div className="alert alert-primary">Spent so far: {spent}</div>;
};

export default ExpensesTotals;
