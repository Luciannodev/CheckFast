import React,{Component} from 'react';
import plus from '../../asserts/plus.png'
import './styles.css'


// import { Container } from './styles';

export default class Main extends Component {
  state = {
    inside : false,
    tarefas: []
  }

  CriarLista(){
    this.setState({inside:true})
  }
  render() {
    if(!this.state.inside){
      return<main>
      <img src={plus} onClick={this.CriarLista}/> 
    <h2 onClick={this.CriarLista}>Adicionar um nova lista</h2>
    </main>
    }else{
      return<main>
      Digite o nome da lista <input/>
      <button>Criar</button>
      </main>
    }
  
    ;
  }
}

