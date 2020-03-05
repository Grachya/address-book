import React from 'react';

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
                            <button onClick={() => props.toggleAddressEdit(props.address.id)}>save</button>
                            <button onClick={() => props.removeAddressById(props.address.id)}>remove</button>
                        </div>
                    ) : (
                        <button onClick={() => {props.addNewAddress()}}>add</button>
                    )  
                }
                
            </td>
        </tr>
    )
}

export default AddressForm;

