import React from 'react'
import InputField from '../Components/InputField'

const EmployementType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>

    <div>
        <label className='sidebar-label-container'>
            <input 
                type="radio" 
                name="test" 
                id="test" 
                value="" 
                onChange={handleChange}
            />
            <span className='checkmark'></span>Any Experience
        </label>
        <InputField
            handleChange = {handleChange} 
            value="full-time" 
            title="Full-time" 
            name="test"
        />
        <InputField
            hand leChange = {handleChange} 
            value="temporary" 
            title="Temporary" 
            name="test" 
        />
        <InputField
            handleChange = {handleChange} 
            value="part-time" 
            title="Part-time" 
            name="test"
        />
    </div>
</div>
  )
}

export default EmployementType