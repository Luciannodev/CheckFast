import React from 'react';
import plus from '../../../asserts/plus.png'
import {ImgStyled,H2Styled, MainStyles} from './styles.js'


export default function Home({ onList }) {
  return (
      <>
        <MainStyles>
        <ImgStyled src={plus} onClick={onList}  /><H2Styled onClick={onList}>Adicionar uma nova lista</H2Styled>
        </MainStyles>
        </>
  );
}
