import logo from '../../assets/dt_money.svg';
import * as Styles from './styles';

interface Props {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: Props) {

    return (
        <Styles.Container>
            <Styles.Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Styles.Content>
        </Styles.Container>
    )
}