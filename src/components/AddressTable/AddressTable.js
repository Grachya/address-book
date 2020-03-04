import React from 'react';
import './AddressTable.scss';

class AddressTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            addressList: [
                {id:1, name: 'Галина Петровна', email: 'galina@ya.ru', phone:'89034567582'},
                {id:2, name: 'Алла Михайловна', email: 'alla@ya.ru', phone:'89167658734'},
                {id:3, name: 'Юлия Викторовна', email: 'yulia@ya.ru', phone:'89264567652'},
              ]
        }
        this.removeAdressById = this.removeAdressById.bind(this);
    }

    removeAdressById(addressId) {
        let addressList = [...this.state.addressList];
        let index = addressList.find(item => item.id === addressId);
        if (index) {
          addressList.splice(index, 1);
          this.setState({addressList: addressList});
        }
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
                                    <button onClick={() => this.removeAdressById(address.id)}>remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>    
            </table>
        )
    }
}

export default AddressTable;