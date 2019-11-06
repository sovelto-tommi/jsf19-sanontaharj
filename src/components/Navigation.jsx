import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="mynavbar">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/quotes'>QuoteList</NavLink>
                <NavLink to='/form'>QuoteForm</NavLink>
            </div>
        )
    }
}
