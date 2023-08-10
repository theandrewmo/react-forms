import { useState } from 'react';

/** NewBoxForm - 
 * 
 * Props: addBox 
 * 
 * State: {backgroundColor, width, height}
 * 
 */

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { 
                            backgroundColor: '',
                            width: '',
                            height: ''
                          };
    const [boxProps, setBoxProps] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBoxProps(prevProps => ({...boxProps, [name]: value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(boxProps.backgroundColor, boxProps.width, boxProps.height);
        setBoxProps(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='backgroundColor'>Background Color: </label>
            <input 
                id='backgroundColor' 
                name='backgroundColor' 
                placeholder='backgroundColor' 
                value={boxProps.backgroundColor} 
                onChange={handleChange}
                data-testid="backgroundColor" 
            >
            </input>
            <label htmlFor='width'>Width: </label>
            <input 
                id='width' 
                name='width' 
                placeholder='width' 
                value={boxProps.width} 
                onChange={handleChange}
                data-testid='width'
            >
            </input>
            <label htmlFor='height'>Height: </label>
            <input 
                id='height' 
                name='height' 
                placeholder='height' 
                value={boxProps.height} 
                onChange={handleChange} 
                data-testid='height'
            >
            </input>
            <button data-testid='submitButton'>Submit</button>
        </form>
    )
}

export default NewBoxForm;