import ExpenceItem from "./ExpenceItem";
import Card from '../UI/Card';
import './Expences.css';
import { useState } from "react";
import ExpensesFilter from "../NewExpences/ExpenceFilter";
function Expences(props) {
    const[filteredYear,setFilteredYear]=useState('2020');

    const filteredChangeHanlder=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHanlder}/>
            <ExpenceItem 
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenceItem>

            <ExpenceItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}>
            </ExpenceItem>

            <ExpenceItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}>
            </ExpenceItem>

            <ExpenceItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}>
            </ExpenceItem>
        </Card>
    );
}
export default Expences;