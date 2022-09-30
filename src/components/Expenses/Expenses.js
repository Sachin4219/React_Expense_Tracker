import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    const classes = "expenses";
    const expenses = props.items;
    

    return ( 
        <div className={classes}>
            <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </div>
    );
}

export default Expenses;