import React, { Component } from 'react';
import raio from '../../asserts/raio.png'
import './styles.js'
import { Title } from './styles.js';


export default class Header extends Component {
  render() {
    return <Title>Check <img src={raio} alt="imagem não encontrada"/>  Fast</Title>;
  }
}




