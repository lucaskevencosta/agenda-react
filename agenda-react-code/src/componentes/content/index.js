import React, {Component} from 'react'

import Listagem from './listagem'
import Cadastro from './cadastro'
import { AbaListagemStyle, AbaCadastroStyle, Content } from './style'

class Conteudo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <>
                <Content>
                    <AbaListagemStyle>
                        <Listagem />
                    </AbaListagemStyle>
            
                    <AbaCadastroStyle>
                        <Cadastro/>
                    </AbaCadastroStyle>
                </Content>
            </>
        );
    }
}

export default Conteudo;