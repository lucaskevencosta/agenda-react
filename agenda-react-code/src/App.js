import React, {Component} from 'react';

import Header from './componentes/header';
import Conteudo from './componentes/content'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <>
                <Header />
                <Conteudo />
            </>
        );
    }
}

export default App;
