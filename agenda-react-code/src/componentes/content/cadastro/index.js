import React, {Component} from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'

import { CadastroStyle } from './style'

class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <CadastroStyle>
                <h1>Cadastro</h1>
                <FormControl>
                    <InputLabel htmlFor="nome-form">Nome</InputLabel>
                    <Input id="nome-form" />
                </FormControl>
                
                <FormControl>
                    <InputLabel htmlFor="telefone-form">Telefone</InputLabel>
                    <Input id="telefone-form" />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="email-form">E-mail</InputLabel>
                    <Input id="email-form" />
                </FormControl>
            </CadastroStyle>
        )
    }
}

export default Cadastro