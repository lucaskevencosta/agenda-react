import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Listagem from './componentes/listagem'
import Cadastro from './componentes/cadastro'
import Header from './componentes/header'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Listagem} />
                <Route exact path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;