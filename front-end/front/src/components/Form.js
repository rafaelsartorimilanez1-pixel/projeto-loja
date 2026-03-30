import React, {useRef} from 'react';
import InputArea from './InputsArea';
import styled from 'styled-components';

const FormContainer = styled.form`
    display:flex;
    align-items:flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`
const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #FFF;
    height: 42px;
`

const Form = ({ onEdit }) => {

    const ref = useRef();

    return(
     <FormContainer>
        <InputArea 
        label='Nome'
        type='text'
        name='name'
         />
                 <InputArea 
        label='Preço'
        type='text'
        name='Preço'
         />
                 <InputArea 
        label='Estoque'
        type='text'
        name='estoque'
         />
                 <InputArea 
        label='Fone'
        type='text'
        name='fone'
         />

         <Button type="submit">Enviar</Button>
     </FormContainer>
    )
}

export default Form

