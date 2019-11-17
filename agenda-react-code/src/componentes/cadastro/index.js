import React, { Component } from 'react'
import { FormControl, InputLabel, Input, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { MdSave as SaveIcon } from 'react-icons/md'

import { FormCadastroStyle, DivCadastroStyle } from './style'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    

    render() {
        return (
            <DivCadastroStyle>
                <FormCadastroStyle>
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
                </FormCadastroStyle>

                <Button
                    variant="contained"
                    size="small"
                    className={useStyles.button}
                    startIcon={<SaveIcon />}
                >Salvar</Button>
            </DivCadastroStyle>
        )
    }
}

export default Cadastro