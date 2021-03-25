import * as Styles from './styles';
import incomeImg from '../../assets/up.svg';
import outcomeImg from '../../assets/down.svg';
import totalImg from '../../assets/Total.svg';

export function Summary() {
    return (
        <Styles.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Styles.Container>
    )
}