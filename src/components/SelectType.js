import React from 'react';


const SelectType = ({typeChange}) => {
    return (
        <select 
            name="characterTypes" 
            onChange={typeChange}
            className="gray pa2 ba b--green bg-lightest-blue br4 pa1 tc"
        >
            <option className="moon-gray" value="" defaultValue='true'>Choose a type of character</option>
            <option value="1">Robot</option>
            <option value="2">Monster</option>
            <option value="3">Robohead</option>
            <option value="4">Kitten</option>
        </select>
    );
}

export default SelectType;