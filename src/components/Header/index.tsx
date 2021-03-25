import logo from '../../assets/dt_money.svg'
import * as Styles from './styles'

export function Header() {
    return (
        <Styles.Container>
            <Styles.Content>
                <img src={logo} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Styles.Content>
        </Styles.Container>
    )
}