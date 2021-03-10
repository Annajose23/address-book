import React from 'react';
import { BrowserRouter } from "react-router-dom";

import AddressBook from './containers/AddressBook';
import "./App.css";
 
function app() {
  return (
    <div className="app">
      <BrowserRouter>
        <AddressBook />
      </BrowserRouter>
    </div>
  );
}

export default app;
