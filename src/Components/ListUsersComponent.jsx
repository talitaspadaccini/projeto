import React, { useState } from 'react';
import Axios from 'axios';
import './Style/App.css'

export default function CarregaUsers() {

  const[users, setUsers] = useState([]);
  
  // Axios.get no mocky para receber o objeto com uma lista de usuários. 
  Axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').then(answer => {
    const user = answer.data;
    setUsers(user);
  });

return (
  users.map((item, key) => 
  <div className='usersStyle'>
    <div className='itensLeft'>
    <div className='userPic'>
      <img id="imgPic" src={item.img} alt=''/>
    </div>
    <div className='userName'>
      <div>
        Nome do Usuario: {item.name}
      </div>
      <div>
        ID: {item.id} - Username: {item.username}
      </div>
      </div>
    </div>
    <div className='buttonPay'>
      <button id='button'>Pagar</button>
    </div>
  </div>
  )
  )
}