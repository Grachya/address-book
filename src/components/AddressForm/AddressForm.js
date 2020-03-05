import React from 'react';

import Button from '../Button/Button';

function AddressForm (props) {
    return(
        <tr>
            <td className="table__data table__data--edit">
                <input 
                    type="text" 
                    placeholder="Имя отчество" 
                    name="name" 
                    id="name"
                    data-address-id={props.address.id} 
                    value={props.address.name} 
                    onChange={(e) => props.handleChange(e)} 
                    />
            </td>
            <td className="table__data table__data--edit">
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    id="email"
                    data-address-id={props.address.id} 
                    value={props.address.email} 
                    onChange={(e) => props.handleChange(e)} 
                    />
            </td>
            <td className="table__data table__data--edit">
                <input 
                    type="phone" 
                    placeholder="Номер телфона" 
                    name="phone" 
                    id="phone"
                    data-address-id={props.address.id}
                    value={props.address.phone} 
                    onChange={(e) => props.handleChange(e)}  
                    />
            </td>
            <td className="table__data table__data--actions">
                {
                    props.address.isEditing ? (
                        <div>
                            <Button 
                                icon='save'
                                onClickHandler={() => {props.toggleAddressEdit(props.address.id)}}>
                            </Button>
                            <Button 
                                icon='remove'
                                onClickHandler={() => props.removeAddressById(props.address.id)}>
                            </Button>
                        </div>
                    ) : (
                        <Button 
                            icon='add'
                            onClickHandler={() => props.addNewAddress()} >
                        </Button>
                    )  
                }
                
            </td>
        </tr>
    )
}

export default AddressForm;

