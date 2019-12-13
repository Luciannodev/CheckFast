import React, { Component } from 'react';
import raio from '../../asserts/raio.png'
import './styles.css'
// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return <h1>Check <img src={raio}/>  Fast</h1>;
  }
}




