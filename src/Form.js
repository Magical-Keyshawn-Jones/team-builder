import { useState } from 'react';

function Form (props) {
    const [inputValue, setInputValue] = useState('')

    function typing (event) {
        setInputValue(event.target.value)
    }

    function submitting (event) {
        event.preventDefault()
        inputValue.replace(/\s+/g, ' ').trim()
        console.log(inputValue.replace(/\s+/g, ' ').trim())
        setInputValue('')
    }

    return (
        <form onSubmit={submitting} >
            <input
            type='text'
            name='test'
            placeHolder='Please type here'
            value={inputValue}
            onChange={typing}
            />
            <br/>
            <label>
                Submit Form
                <br/>
                <button>Submit Here Please</button>
                <br/>
                Definetly a Submit Form
            </label>
        </form>
    )
}

export default Form