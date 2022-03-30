import { useState } from 'react';

function Form () {
    
    // Creating an Object for initial Values for the inputs
    const initialValues = {
        name: '',
        email: '',
        role: ''
      }

    //   Storing initial Values inside of a useState
    const [formValues, setFormValues] = useState(initialValues)

    // Creating a function that will update the useState holding the initial Values
    function updateButtons (inputName, inputValue) {

        // Using spread operator, I can grab the object and change exactly which value from a key I want
        setFormValues({...formValues, [inputName]: inputValue})
    }

    // Creating an OnChange function
    function typing (event) {
        
        // This will grab the Name of the input and the value of that same Input
        const name = event.target.name;
        const value = event.target.value;

        // I'm invoking the function from above to change the exact input I want
        updateButtons(name,value)
    }

    // Creating an onSubmit function
    function submitting (event) {

        // preventDefault will prevent the whole page from loading
        event.preventDefault()

        // Testing the formValues to make sure they work
        console.log(formValues)

        // resetting the formValues back to normal
        setFormValues(initialValues)
    }

    return (
        <form onSubmit={submitting} >
            <input
            type='text'
            name='name'
            placeHolder='Please Type Name Here'
            value={formValues.name}
            onChange={typing}
            className='name'
            />
            <button>Submit</button>
            <br/>
            <input
            type='email'
            name='email'
            placeHolder='Please Type email Here'
            value={formValues.email}
            onChange={typing}
            className='name'
            />
            <button>Submit</button>
            <br/>
            <label>Role
                <select value={formValues.role} name="role" onChange={typing}>
                    <option value="">-- Select a Role --</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Alumni">Alumni</option>
                </select>
        </label>
        </form>
    )
}

export default Form