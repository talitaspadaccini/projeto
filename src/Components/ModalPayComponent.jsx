import React, { useState } from 'react'
import ModalComponent from './ModalComponent'

const ModalPay = ({ id = 'containerModalPay', onClose = () => { }, children }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose();
    };

    return (
        <div id={id} className="modalPay" onClick={handleOutsideClick} >
            <div className="containerModalPay">
            <div className="containerHeaderModalPay">
                <div className="headerModalPay">Recibo de pagamento</div>
                <div className="containerBodyModalPay">
                    <div className="bodyModalPay">O Pagamento <strong>{window.card}</strong> foi concluido com sucesso.</div>
                    <div className='content'>{children}</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalPay;