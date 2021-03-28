import * as Styles from './styles';
import incomeImg from '../../assets/up.svg';
import outcomeImg from '../../assets/down.svg';
import totalImg from '../../assets/Total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { CurrencyFormatter } from '../Utils/Formatter';

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    return (
        <Styles.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>{CurrencyFormatter(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>- {CurrencyFormatter(summary.withdraws)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>{CurrencyFormatter(summary.total)}</strong>
            </div>
        </Styles.Container>
    )
}