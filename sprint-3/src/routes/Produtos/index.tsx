import { listaDados } from "../../data/listaDados";

export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>EDITAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaDados.map((produto)=>(
                            <tr>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>
                                Total de Produtos: {listaDados.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    );
}