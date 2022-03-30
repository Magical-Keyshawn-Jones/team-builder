import { useState } from 'react';

function Form (props) {
    
    const initialValues = {
        name: '',
        email: '',
        role: ''
      }

    const [formValues, setFormValues] = useState(initialValues)

    function updateButtons (inputName, inputValue) {

        setFormValues({...formValues, [inputName]: inputValue})
    }

    
    function typing (event) {
        const name = event.target.name;
        const value = event.target.value;

        updateButtons(name,value)
    }

    function submitting (event) {
        event.preventDefault()
        console.log(formValues)
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
          {/* 🔥 STEP 5 - Make dropdown for role. */}
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