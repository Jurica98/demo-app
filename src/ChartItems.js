import * as React from 'react';
import { observer, inject } from 'mobx-react';
@inject('store')
@observer
export class ChartItems  extends React.Component {
    
    render() {
        console.log("ChartItems rendered"); // Add this line
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Pricee</th>        
                </tr>
            </thead>
            <tbody>
                {this.props.store.items.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{this.props.store.totalPrice}</td>
                </tr>
            </tfoot>
        </table>
    }
}
