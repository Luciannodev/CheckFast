import React,{Component} from 'react';
import Header from '../Header/index.js'
import Home from './Home/index.js'
import Criarlista from './CriarLista/index.js'
export default class Standart extends Component {
  state ={ 
    pagina: "Home",
    listas: []
  }
  Criarlista = () =>{
    this.setState({pagina:"CriarLista"})
  }
  BackHome = () =>{
    this.setState({pagina:"Home"})
  }

  render() {
    if(this.state.pagina === "Home"){
      return<>
      <Header/>
      <Home onList={() =>this.Criarlista()} />     
    <ul></ul>
      </>
      }
      else if(this.state.pagina === "CriarLista"){
        return <>
        <Header/>
        <Criarlista outList={() =>this.BackHome() }  />
        </>
}
    ;
  }
}


