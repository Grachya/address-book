import React from 'react';
import Button from '../Button/Button';

function AddressView (props) {
    return (
        <tr className="table__row">
            <td className="table__data table__data--name">{props.address.name}</td>
            <td className="table__data table__data--mail"><a href={"mailto:"+props.address.email}>{props.address.email}</a></td>
            <td className="table__data table__data--phone">{props.address.phone}</td>
            <td className="table__data table__data--actions">
                <Button 
                    icon='edit'
                    onClickHandler={() => props.toggleAddressEdit(props.address.id)}>
                </Button>
                <Button 
                    icon='remove'
                    onClickHandler={() => props.removeAddressById(props.address.id)}>
                </Button>
            </td>
        </tr>
    )
}

export default AddressView;