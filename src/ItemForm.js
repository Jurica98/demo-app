import * as React from 'react';
import { inject } from 'mobx-react';

@inject('store')
export class ItemForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            itemPrice: '',
        };

        
    }

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.type === 'number'
                ? Number(e.target.value)
                : e.target.value
        });
    };

    addItem = () => {
        this.props.store.add({
            name: this.state.itemName,
            price: this.state.itemPrice,
        });

        this.setState({
            itemName: '',
            itemPrice: '',
        });
    };

    render() {
        return <form>
            <div>
                <label htmlFor='item-name-input'>Item Name:</label>
                <input type="text" id="item-name-input" name="itemName"
                    value={this.state.itemName} onChange={this.onChange}></input>
            </div>
            <div>
                <label htmlFor='item-price-input'>Item Price:</label>
                <input type="number" id="item-price-input" name="itemPrice"
                    value={this.state.itemPrice} onChange={this.onChange}></input>
            </div>

            <button type="button" onClick={this.addItem}>Add Item</button>
        </form>
    }
}