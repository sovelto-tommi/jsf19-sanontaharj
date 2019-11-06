import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends Component {
  render () {
    return (
      <Navbar fixed="top" bg='dark' variant="dark">
        <Nav className='justify-content-center'>
          <Nav.Item>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item eventKey={1}>
            <Nav.Link as={Link} to='/quotes'>
              QuoteList
            </Nav.Link>
          </Nav.Item>
          <Nav.Item eventKey={2}>
            <Nav.Link as={Link} to='/form'>
              QuoteForm
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  }
}
