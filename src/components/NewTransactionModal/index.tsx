import Modal from 'react-modal';
import * as Styles from './styles';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/up.svg';
import outcomeImg from '../../assets/down.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault();
        createTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }

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
            <Styles.Container onSubmit={(e) => handleCreateNewTransaction(e)}>
                <h2>Cadastrar Transação</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => { setAmount(Number(e.target.value)) }}
                />
                <Styles.TransactionTypeContainer>
                    <Styles.RadioBox
                        isActive={type === 'deposit'}
                        type="button"
                        onClick={() => { setType('deposit') }}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </Styles.RadioBox>
                    <Styles.RadioBox
                        isActive={type === 'withdraw'}
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </Styles.RadioBox>
                </Styles.TransactionTypeContainer>
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => { setCategory(e.target.value) }}
                />
                <button type="submit">Cadastrar</button>
            </Styles.Container>
        </Modal>
    )
}