import React, {Component} from 'react';

import Routes from './router'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <>
                <Routes />
            </>
        );
    }
}

export default App;
