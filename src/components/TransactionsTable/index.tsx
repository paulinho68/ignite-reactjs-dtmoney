import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as Styles from './styles';

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    type: 'deposit' | 'withdraw';
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions').then(res => {
            console.log(res.data);

            setTransactions(res.data.transactions);
        });
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
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
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