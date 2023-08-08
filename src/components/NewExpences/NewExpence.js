import React, { useState } from 'react';
import './NewExpence.css';
import ExpenceForm from './ExpenceForm';
function NewExpence(props) {
    const [form, setForm] = useState(false);

    const saveExpenceDataHandler = (enteredExpenceData) => {
        const expenceData = {
            ...enteredExpenceData,
            id: Math.random().toString()
        };
        props.onAddExpence(expenceData);
        setForm(false);
    };

    const addNewExpence = () => {
        setForm(true);
    };

    const cancelEditing=()=>{
        setForm(false);
    };

    return (
        <div className='new-expense'>
            {!form && <button onClick={addNewExpence}>Add New Expence</button>}
            {form && <ExpenceForm onSaveExpenceData={saveExpenceDataHandler} onCancel={cancelEditing} />}
        </div>
    );
}

export default NewExpence;