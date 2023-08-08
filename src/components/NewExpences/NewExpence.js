import './NewExpence.css';
import ExpenceForm  from './ExpenceForm';
function NewExpence(props) {

    const saveExpenceDataHandler= (enteredExpenceData)=>{
        const expenceData={
            ...enteredExpenceData,
            id:Math.random().toString()
        };
        props.onAddExpence(expenceData);
    };

    return (
        <div className='new-expense'>
            <ExpenceForm onSaveExpenceData={saveExpenceDataHandler}
                
            />
        </div>
    );
}

export default NewExpence;