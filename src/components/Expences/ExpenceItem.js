import React, {useState} from 'react';
import ExpenceDate from './ExpenceDate';
import Card from '../UI/Card';
import './ExpenceItem.css';

function ExpenceItem(props) {
    const[title,setTitle]=useState(props.title);

    // let title = props.title;

    function clickhandler() {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price ">${props.amount}</div>
            </div>
            <button onClick={clickhandler}>Change Title</button>
        </Card>
    );
}

export default ExpenceItem;