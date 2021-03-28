import { useTransactions } from '../../hooks/useTransactions';
import { CurrencyFormatter } from '../Utils/Formatter';
import * as Styles from './styles';

export function TransactionsTable() {
    const { transactions } = useTransactions();

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
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {CurrencyFormatter(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Styles.Container>
    )
}