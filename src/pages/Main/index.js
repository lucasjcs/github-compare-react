import React from 'react'
import {Form, Container} from './styles'
import CompareList from '../../components/CompareList'

import logo from '../../assets/logo.png'


const Main = () => (
  <Container>
    <img src={logo} alt="GitHub Compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório"></input>
      <button type="submit">OK</button>
    </Form>
    <CompareList />
  </Container>
)

export default Main
