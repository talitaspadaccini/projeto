import React, { useState } from 'react'
import ModalComponent from './ModalComponent'

const ModalPay = ({ id = 'containerModalPay', onClose = () => { }, children }) => {

    const [negOperation, setNegOperation] = useState({})

    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose();
    };

    function resultPay() {
        if (ModalComponent.cards.card_number === "1111111111111111"){
            setNegOperation("");
        } else{
            setNegOperation("não");
        }
    }

    return (
        <div id={id} className="modalPay" onClick={handleOutsideClick} >
            <div className="containerModalPay">
            <div className="containerHeaderModalPay">
                <div className="headerModalPay">Recibo de pagamento</div>
                <div className="containerBodyModalPay">
                    <div className="bodyModalPay">O Pagamento <strong>{negOperation}</strong> foi concluido com sucesso</div>
                    <div className='content'>{children}</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalPay;