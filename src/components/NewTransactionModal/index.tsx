import Modal from 'react-modal';
import * as Styles from './styles';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/up.svg';
import outcomeImg from '../../assets/down.svg';

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Styles.Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <Styles.TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </Styles.TransactionTypeContainer>
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Styles.Container>
        </Modal>
    )
}