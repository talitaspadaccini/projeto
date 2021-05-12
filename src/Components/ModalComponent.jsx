import React, { useState } from 'react';
import CurrencyInput from 'react-currency-masked-input';
import './Style/App.css';
import ModalPay from './ModalPayComponent'

const Modal = ({ id = 'containerModal', onClose = () => { }, children }) => {

    const [cardsProfile, setCardsProfile] = useState([]);
    const [modalPayDisplay, setModalPayDisplay] = useState(true);

    let cards = [
        // valid card
        {
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
        },
        // invalid card
        {
            card_number: '4111111111111234',
            cvv: 123,
            expiry_date: '01/20',
        },
    ];

    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose();
    };

    // ‘Form’ is the state of the form itself and ‘setForm’ is the method built into useState that allows us to update the state of the form
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    // The handleChange will serve to capture the values ​​of the inputs
    // With the ‘… form’, take the general state and transform the target.name by the target.value, which is taken from the input.
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // If the input is empty, it will signal. So this function is called inside the setErrors method on the handleSubmit
    function validate() {
        let errors = {};
        if (!form.name) {
            errors.name = '*Preencha com um valor válido.'
        }
        return errors;
    }

    // handleSubmit will serve as an error validator
    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validate(form));
    }

    function validClick() {
        if (form.name) {
            setModalPayDisplay(false)
        }
    }

    return (
        <div id={id} className='boxModal' onClick={handleOutsideClick}>
            <div className='containerModal'>
                <div className='containerHeaderModal'>
                    <div className='headerPay'>Pagamento para <b>{window.name}</b></div>
                </div>
                <div className='containerBodyModal'>
                    <form onSubmit={e => handleSubmit(e)}>
                        <CurrencyInput name='name' className='inputValue' placeholder='R$ 0,00' onChange={e => handleChange(e)} />
                        {errors.name && <p className='errorInput'>{errors.name}</p>}
                        <select value={cardsProfile} onChange={e => setCardsProfile(e.target.value)} className='selectCard'>
                            <option value='selection' disabled selected>Selecione o cartão</option>
                            {cards.map((item, index) => (
                                <option value={item.key}>Cartão com final {item.card_number.substring(12, 16)}</option>
                            ))}
                        </select>
                        <button id='buttonPayModal' onClick={() => { validClick() }}>Pagar</button>
                        <div className='content'>{children}</div>
                        {modalPayDisplay ? (
                            <ModalPay onClose={() => setModalPayDisplay(false)} />) : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;