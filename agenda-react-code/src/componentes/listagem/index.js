import React, { Component } from 'react'
import firebase from 'firebase'

import Contato from './contato'
import { TabelasContatosStyle, CabecalhoContatosStyle } from './style'

class Listagem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            contatos: []
        }

        let firebaseConfig = {
            apiKey: "AIzaSyDfLFw06h8B2GwX4PYdcfVW_NqJRCWymVs",
            authDomain: "agenda-react-349d4.firebaseapp.com",
            databaseURL: "https://agenda-react-349d4.firebaseio.com",
            projectId: "agenda-react-349d4",
            storageBucket: "agenda-react-349d4.appspot.com",
            messagingSenderId: "769783919303",
            appId: "1:769783919303:web:e416af95c08b46e05944e2",
            measurementId: "G-58P5P49TEV"
        }

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
        firebase.analytics()

        this.populaLista = this.populaLista.bind(this)
        this.populaLista()
    }

    populaLista() {
        firebase.database().ref('contatos').on('value', (snapshot) => {
            let state = this.state
            state.contatos = []
            
            snapshot.val().forEach((childItem) => {
                state.contatos.push({
                    id: childItem.id,
                    nome: childItem.nome,
                    telefone: childItem.telefone,
                    email: childItem.email
                });
            })

            this.setState({contatos: state.contatos})
            console.log(this.state.contatos)
        })
    }

    render() {
        return (
            <>
                <TabelasContatosStyle>

                    <thead>
                        <CabecalhoContatosStyle>
                            <th class="id">id</th>
                            <th class="nome">Nome</th>
                            <th class="telefone">Telefone</th>
                            <th class="email">E-mail</th>
                            <th class="acoes">Ações</th>
                        </CabecalhoContatosStyle>
                    </thead>

                    <tbody>
                        {this.state.contatos.map((contato) => {
                            return(
                                <Contato key={contato.id} id={contato.id} nome={contato.nome} telefone={contato.telefone} email={contato.email} />
                            )
                        })}
                    </tbody>
                </TabelasContatosStyle>
            </>
        );
    }
}

export default Listagem