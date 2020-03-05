import React from 'react';
import './AddressRow.scss';
import AddressView from '../AddressView/AddressView';
import AddressForm from '../AddressForm/AddressForm';
function AddressRow (props) {
    if(props.address.isEditing) {
        return (
            <AddressForm 
                address={props.address} 
                handleChange={props.handleEditingChange}
                addNewAddress={props.addNewAddress}
                toggleAddressEdit={props.toggleAddressEdit}
                removeAddressById={props.removeAddressById}
            ></AddressForm>
        )
    }
    return (
        <AddressView 
            address={props.address} 
            removeAddressById={props.removeAddressById}
            toggleAddressEdit={props.toggleAddressEdit}
        ></AddressView>
    )
}

export default AddressRow;