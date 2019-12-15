import React from 'react';
import {StyledSpan, StyledInput, StyledDiv, StyledLink} from './styles.js'
import {Link} from 'react-router-dom' 
export default function CriarLista({outList}) {
  let nomeLista = ''

  function editName(e){
     nomeLista = e.target.value
  }
  function makeList(){
    localStorage.setItem(nomeLista,nomeLista)
    nomeLista = ''
    outList()
  }
   
  return (
    
    <>
    <StyledDiv>
    <StyledSpan>Nome da lista:</StyledSpan><StyledInput placeholder="Ex: Tarefas de casa" type="text" onChange={editName}/><button onClick={makeList}>Criar</button>
    </StyledDiv>
    <StyledLink>
    <Link to= '/' onClick={outList}>Sair </Link>
    </StyledLink>
    </>
    
  );
}
