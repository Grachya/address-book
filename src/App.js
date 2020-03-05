import React from 'react';
import AddressTable from './components/AddressTable/AddressTable';

import './App.scss';

function App() {
    return (
        <div className="app">
            <h1>Адресная книга</h1>
            <AddressTable />
        </div>
    );
}

export default App;
