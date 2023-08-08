import Card from '../UI/Card';
import './Expences.css';
import { useState } from "react";
import ExpensesFilter from "../NewExpences/ExpenceFilter";
import ExpenceList from "./ExpenceList";

import ExpenceChart from './ExpenceChart';

function Expences(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredChangeHanlder = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpences = props.items.filter(expence => {
        return expence.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHanlder} />
            <ExpenceChart expences={filteredExpences}/>
            <ExpenceList items={filteredExpences} />
        </Card>
    );
};
export default Expences;