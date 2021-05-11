import React from 'react';
import ReactDom from 'react-dom';
import ListUsers from './Components/ListUsersComponent'

const elementUser = document.getElementById('root');

ReactDom.render(
  <div>
    <React.StrictMode>
     <ListUsers/>
    </React.StrictMode>
  </div>
  , elementUser
  )