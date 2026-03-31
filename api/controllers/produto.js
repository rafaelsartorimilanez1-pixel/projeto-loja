import {db} from '../db.js';

export const getProdutos = (_, res) => {
    const q = 'SELECT * FROM produtos';

    db.query(q, (err, data) => {

        if(err){
            return res.json(err)
        }

        return res.status(200).json(data);
    })
}

export const addProdutos = (request, response) => {

    const q = "INSERT INTO produtos (`nome`, `preco`, `estoque`, `fone`) VALUES (?)"

    const values = [
        request.body.nome,
        request.body.preco,
        request.body.estoque,
        request.body.fone
    ]

    db.query(q, [values], (error) => {
        if(error) return response.json(error)

        return response.status(200).json("Produto cadastrado com sucesso")
    })
}

export const updateProdutos = (request, response) => {
    const q = "UPDATE produtos SET `nome` = ?, `preco` = ?, `estoque` = ?, `fone` = ? WHERE `idprodutos` = ?"

    const values = [
        request.body.nome,
        request.body.preco,
        request.body.estoque,
        request.body.fone
    ]
    
    db.query(q, [...values, request.params.idprodutos], (error) => {

        if(error) return response.json(error)

        return response.status(200).json("Produto atualizado com sucesso")
    })
}

export const deleteProdutos = (request, response) => {
    const q = "DELETE FROM produtos WHERE `idprodutos` = ?"

    db.query(q, [request.params.idprodutos], (error) => {

        if(error) return response.json(error)

        return response.status(200).json("Produto deletado com sucesso")
    })


};