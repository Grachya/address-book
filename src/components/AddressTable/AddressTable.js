import React from 'react';
import './AddressTable.scss';

const initialNewAddressState = {
    id:"",
    name: "",
    email: "",
    phone: ""
}

class AddressTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            addressList: [
                {id:1, name: 'Галина Петровна', email: 'galina@ya.ru', phone:'89034567582'},
                {id:2, name: 'Алла Михайловна', email: 'alla@ya.ru', phone:'89167658734'},
                {id:3, name: 'Юлия Викторовна', email: 'yulia@ya.ru', phone:'89264567652'},
            ],
            newAddress: {
                id:"",
                name: "",
                email: "",
                phone: ""
            }
        }
        this.removeAdressById = this.removeAdressById.bind(this);
        this.addNewAddress = this.addNewAddress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    removeAdressById(addressId) {
        let addressList = [...this.state.addressList];
        let index = addressList.map(item => item.id).indexOf(addressId);
        addressList.splice(index, 1);
        this.setState({addressList: addressList});
    }

    _resetNewAddressState() {
        this.setState({
            newAddress: initialNewAddressState
        });
    }

    addNewAddress() {
        if(!this.state.newAddress.name) {
            alert('Не введено имя адресата!');
            return;
        }

        const newAddressRow = {...this.state.newAddress};
        this.setState((prevState) => ({
            addressList: [...prevState.addressList, newAddressRow]
        })); 
        
        this._resetNewAddressState();
    }

    _getNewAddressId() {
        return this.state.addressList.length ? this.state.addressList[this.state.addressList.length - 1].id + 1 : 1;
    }

    handleChange(e) {
        const inputFieldName = e.target.name;
        const inputFieldValue = e.target.value;
        const newAddressId = this._getNewAddressId();  
        const newAddressField = Object.assign({...this.state.newAddress}, {id: newAddressId}, { [inputFieldName]: inputFieldValue })
        this.setState({
            newAddress: newAddressField
        });
        console.log(this.state.newAddress);
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.addressList.map((address, index) => {
                        return (
                            <tr key={index} className="table__row">
                                <td className="table__data table__data--name">{address.name}</td>
                                <td className="table__data table__data--mail"><a href={"mailto:"+address.email}>{address.email}</a></td>
                                <td className="table__data table__data--phone">{address.phone}</td>
                                <td className="table__data table__data--actions">
                                    <button>edit</button>
                                    <button onClick={() => this.removeAdressById(address.id)}>remove {address.id}</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td className="table__data table__data--edit">
                            <input 
                                type="text" 
                                placeholder="Имя отчество" 
                                name="name" 
                                id="name" 
                                value={this.state.newAddress.name} 
                                onChange={this.handleChange} />
                        </td>
                        <td className="table__data table__data--edit">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                name="email" 
                                id="email" 
                                value={this.state.newAddress.email} 
                                onChange={this.handleChange} />
                        </td>
                        <td className="table__data table__data--edit">
                            <input 
                                type="phone" 
                                placeholder="Номер телфона" 
                                name="phone" 
                                id="phone"
                                value={this.state.newAddress.phone} 
                                onChange={this.handleChange}  
                                />
                        </td>
                        <td className="table__data table__data--actions">
                            <button onClick={() => {this.addNewAddress()}}>add</button>
                        </td>
                    </tr>
                </tbody>    
            </table>
        )
    }
}

export default AddressTable;