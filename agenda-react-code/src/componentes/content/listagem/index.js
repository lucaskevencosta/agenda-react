import React, { Component } from 'react'

import firebase from 'firebase'

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
        })
    }

    render() {
        return (
            <>
                <h1>Contatos</h1>
                {this.state.contatos.map((item) => {
                    return(
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.nome}</p>
                            <p>{item.telefone}</p>
                            <p>{item.email}</p>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default Listagem