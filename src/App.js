import React from "react";
import Budget from "./component/budget";
import Remaining from "./component/remaining";
import ExpensesTotals from "./component/expensesTotals";
import ExpensesList from "./component/expensesList";
import AddExpensesForm from "./component/addExpensesForm";
import { AppProvider } from "./context/appContext";
const App = () => {
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">My Budget Planner</h1>
				<div className="row mt-3">
					<div className="col-sm">
						<Budget />
					</div>
					<div className="col-sm">
						<Remaining />
					</div>
					<div className="col-sm">
						<ExpensesTotals />
					</div>
				</div>
				<h3 className="mt-3">Expenses</h3>
				<div className="row mt-3">
					<div className="col-sm">
						<ExpensesList />
					</div>
				</div>
				<h3 className="mt-3">Add Expense </h3>
				<div className="mt-3">
					<div className="col-sm">
						<AddExpensesForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};
export default App;
