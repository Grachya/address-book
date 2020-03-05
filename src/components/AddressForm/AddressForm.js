import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

function AddressForm (props) {
    return(
        <tr>
            <td className="table__data table__data--edit">
                <Input 
                    type='text'
                    placeholder="Имя отчество"
                    name="name"
                    id="name"
                    value={props.address.name}
                    onChangeHandler={(e) => props.handleChange(props.address.id, "name", e.target.value)} 
                />
            </td>
            <td className="table__data table__data--edit">
                <Input 
                    type='email'
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={props.address.email}
                    onChangeHandler={(e) => props.handleChange(props.address.id, "email", e.target.value)} 
                />
            </td>
            <td className="table__data table__data--edit">
                <Input 
                    type='phone'
                    placeholder="Номер телфона"
                    name="phone"
                    id="phone"
                    value={props.address.phone}
                    onChangeHandler={(e) => props.handleChange(props.address.id, "phone", e.target.value)} 
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

