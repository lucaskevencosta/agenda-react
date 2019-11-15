import React, {Component} from 'react'
import { FaBook } from 'react-icons/fa'
import { HeaderStyle } from './style'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <HeaderStyle className="teste">
                <FaBook />
                <a href="#">Agenda</a>
            </HeaderStyle>
        )
    }
}

export default Header