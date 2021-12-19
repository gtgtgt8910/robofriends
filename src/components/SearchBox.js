import React from 'react';


const SearchBox = ({searchChange, characterType}) => {
    return (
        <div className="pa2">
            <input 
                className="pa ba b--green bg-lightest-blue br4 pa2 tc"
                type='search' 
                placeholder={`Search ${characterType==='Robo'?'Robot':characterType}`}
                onChange={searchChange}    
            >
            </input>
        </div>
    );
}

export default SearchBox;