import React from 'react';

function AddressView (props) {
    return (
        <tr className="table__row">
            <td className="table__data table__data--name">{props.address.name}</td>
            <td className="table__data table__data--mail"><a href={"mailto:"+props.address.email}>{props.address.email}</a></td>
            <td className="table__data table__data--phone">{props.address.phone}</td>
            <td className="table__data table__data--actions">
                <button onClick={() => props.toggleAddressEdit(props.address.id)}>edit</button>
                <button onClick={() => props.removeAddressById(props.address.id)}>remove {props.address.id}</button>
            </td>
        </tr>
    )
}

export default AddressView;