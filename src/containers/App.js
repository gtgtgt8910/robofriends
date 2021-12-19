import React, {Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import SelectType from '../components/SelectType';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            setNum: 1,
            searchfield: '',
            characterTypes: {1: 'Robo', 2: 'Monster', 3: 'Robohead ', 4: 'Kitten'}
        };
    };

    componentDidMount() {
        try{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => { 
                this.setState({ robots: users });
                // console.log(users);
            })  
        } catch (e) {
            this.setState({ robots: robots})
        }
              
    }

    // If a function does not come built into react, it should be defined with an arrow functions
    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value })
    }

    onTypeChange = (event) => {
        console.log(event.target.value)
        this.setState({ setNum: event.target.value });
    }

    render() {
        const {robots, setNum, searchfield, characterTypes} = this.state;
        const characterType = characterTypes[setNum];

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return !robots.length ?
            <h1>Loading...</h1>:     
            (<div className="tc">
                <h1 className="f2">
                    { characterType + 'Friends'}
                </h1>
                <SelectType typeChange={this.onTypeChange}/>
                <SearchBox 
                    searchChange={this.onSearchChange} characterType={characterType} 
                />
                <Scroll>
                    <ErrorBoundary>
                        <CardList 
                            robots={filteredRobots} 
                            setNum={setNum} 
                        />
                    </ErrorBoundary>                    
                </Scroll>                
            </div>)
    }
}


export default App;