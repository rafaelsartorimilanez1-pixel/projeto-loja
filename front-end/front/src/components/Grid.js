import React from 'react';
import styled from 'styled-components';

const Thead = styled.thead``
const Tbody = styled.tbody``

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-sizing: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-widht: 800px;
    margin: 20px auto;
    word-break: break-all;
`

const Tr = styled.tr``

const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom:5px; 
`
const Td = styled.td``

const Grid = () => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Preço</Th>
                    <Th>Estoque</Th>
                </Tr>
            </Thead>

            <Tbody>
                <Tr>
                    <Td></Td>                    
                </Tr>

                <Tr>
                    <Td></Td>
                </Tr>

                <Tr>
                    <Td></Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default Grid;