import React from 'react';
import AddressRow from '../AddressRow/AddressRow';
import AddressForm from '../AddressForm/AddressForm';
import './AddressTable.scss';

const initialNewAddressState = {
    id:"",
    name: "",
    email: "",
    phone: "",
    isEditing: false
}

class AddressTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            addressList: [
                {id:1, name: 'Галина Петровна', email: 'galina@ya.ru', phone:'89034567582', isEditing: false },
                {id:2, name: 'Алла Михайловна', email: 'alla@ya.ru', phone:'89167658734', isEditing: false },
                {id:3, name: 'Юлия Викторовна', email: 'yulia@ya.ru', phone:'89264567652', isEditing: false },
            ],
            newAddress: {
                id:"",
                name: "",
                email: "",
                phone: "",
                isEditing: false
            },
        }
        this.removeAddressById = this.removeAddressById.bind(this);
        this.addNewAddress = this.addNewAddress.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleAddressEdit = this.toggleAddressEdit.bind(this);
    }

    removeAddressById(addressId) {
        const addressList = [...this.state.addressList];
        const index = addressList.map(item => item.id).indexOf(addressId);
        addressList.splice(index, 1);
        this.setState({addressList: addressList});
    }

    _resetNewAddressState() {
        this.setState({
            newAddress: initialNewAddressState
        });
    }

    addNewAddress(existingAddressId) {
        if(!this.state.newAddress.name) {
            alert('Не введено имя адресата!');
            return;
        }
        if(existingAddressId) {
            const addressList = [...this.state.addressList];
            const editableAddress = addressList.find(item => item.id === existingAddressId);
            Object.assign(editableAddress, {...this.state.newAddress});
            this.setState({
                addressList: addressList 
            })
        } else {
            const newAddressRow = {...this.state.newAddress};
            newAddressRow.id = this._getNewAddressId(); 
            this.setState((prevState) => ({
                addressList: [...prevState.addressList, newAddressRow]
            }));
        }
        this._resetNewAddressState();
    }

    _getNewAddressId() {
        return this.state.addressList.length ? this.state.addressList[this.state.addressList.length - 1].id + 1 : 1;
    }

    handleInputChange(addressId, inputFieldName, inputFieldValue) {
        if(addressId) {
            this.setState(prevState => ({
                addressList: prevState.addressList.map(
                    address => {
                        return (address.id === addressId ? Object.assign(address, {[inputFieldName]:inputFieldValue}): address)
                    } 
                )
            }));
        } else {
            const newAddressField = Object.assign({...this.state.newAddress}, { [inputFieldName]: inputFieldValue });
            this.setState({
                newAddress: newAddressField
            });
        }
    }

    toggleAddressEdit(addressId) {
        const addressList = [...this.state.addressList];
        const address = addressList.find(item => item.id === addressId);
        address.isEditing = !address.isEditing;
        this.setState({
            addressList: addressList
        })
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.addressList.map((address, index) => {
                        return (
                            <AddressRow 
                                key={index} 
                                address={address} 
                                removeAddressById={this.removeAddressById}
                                toggleAddressEdit={this.toggleAddressEdit}
                                handleEditingChange={this.handleInputChange}
                                addNewAddress={this.addNewAddress}
                            ></AddressRow>
                        )
                    })}
                    <AddressForm 
                        address={this.state.newAddress} 
                        handleChange={this.handleInputChange}
                        addNewAddress={this.addNewAddress}>
                    </AddressForm>
                </tbody>    
            </table>
        )
    }
}

export default AddressTable;