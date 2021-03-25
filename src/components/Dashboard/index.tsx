import * as Styles from './styles';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export function Dashboard() {
    return (
        <Styles.Container>
            <Summary />
            <TransactionsTable />
        </Styles.Container>
    )
}