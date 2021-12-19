import React from 'react';
import Card from './Card';

const CardList = ({ robots, setNum }) => {    
    // if (true) {
    //     throw new Error('Testing Error Boundary');
    // }
    return (
        <div>
            { robots.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        setNum={setNum}
                    />
                );
            })}
        </div>
    )
}

export default CardList;