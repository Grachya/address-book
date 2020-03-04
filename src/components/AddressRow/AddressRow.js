import React from 'react';
import './AddressRow.scss';
import AddressView from '../AddressView/AddressView';

function AddressRow (props) {
    return (
        <AddressView address={props.address} removeAdressById={props.removeAdressById}></AddressView>
    )
}

export default AddressRow;