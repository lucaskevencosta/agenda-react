import React, {Component} from 'react'
import { ContatoStyle } from './style'

class Contato extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <>
                <ContatoStyle>
                    <td class="id">{this.props.id}</td>
                    <td class="nome">{this.props.nome}</td>
                    <td class="telefone">{this.props.telefone}</td>
                    <td class="email">{this.props.email}</td>
                    <td class="acoes">botao</td>
                </ContatoStyle>
            </>
        );
    }
}

export default Contato;