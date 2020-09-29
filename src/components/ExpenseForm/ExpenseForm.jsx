import React, {useState} from 'react'

const ExpenseForm = () => {
    const [amountInput, setAmountInput] = useState('');
    const [amount, setAmount] = useState(0);
    const [descriptionInput, setDescriptionInput] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = () => {
        setAmountInput(amountInput);
        setDescription(descriptionInput);
    }

    return (
        <div className='expense__form__container'>
            <form onSubmit={handleSubmit}>
                {/* Input Amount */}
                <input 
                    type="text"
                    onChange={(e) => setAmountInput(e.target.value)}/>

                <input 
                    type="text"
                    onChange={(e) => setDescriptionInput(e.target.value)}/>
                {/* Input - Description of expense  */}
                {/* Dropdown of the expense category */}
                {/* Date */}
            </form>
        </div>
    )
}

export default ExpenseForm
