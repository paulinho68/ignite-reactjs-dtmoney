import { useEffect } from 'react';
import { api } from '../../services/api';
import * as Styles from './styles';

export function TransactionsTable() {
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then(response => console.log(response.data));
    }, []);

    return (
        <Styles.Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>R$ 12.000</td>
                        <td>Venda</td>
                        <td>25/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw"> - R$ 59,00</td>
                        <td>Desenvolvimento</td>
                        <td>25/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">- R$ 1.200</td>
                        <td>Desenvolvimento</td>
                        <td>25/03/2021</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 5.000</td>
                        <td>Venda</td>
                        <td>25/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Styles.Container>
    )
}