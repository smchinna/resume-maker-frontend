import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
  height: 46px;
  width: calc(100% - 40px);
  border: 1px solid #eaeaea;
  padding: 0 20px 0 20px;
  background-color: ${({ filled }) => filled && '#e7f5fa'};
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  :hover {
    outline: 1.2px solid #eaeaea;
  }
  :focus {
    outline: 1.2px solid #eaeaea;
  }
`;

const  InputCom = (props) => {
  return(
    <CustomInput {...props}/>
  )
}

export default InputCom;