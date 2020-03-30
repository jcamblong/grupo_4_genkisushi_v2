import React, {Component} from 'react';

class ApiOrders extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null,
      orders: []
    };
  }

  componentDidMount () {
    fetch ("http://localhost:3000/api/orders")
      .then (res => res.json())
      .then (
        (result) => { 
          this.setState (
            {
            orders: result.orders
            })
        })
      .catch ( error => console.log (error))
  }
  
  render () {
    const { error, orders } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
    return (
      <div className="App">
        <ul>
          {orders.map(o => (<li key={o.id}> {o.id} {o.user_id} {o.purchase_date} {o.payment_method_id} {o.order_status_id} {o.cupon_id}</li>))}
        </ul>
      </div>
    )
  }
}
}

export default ApiOrders;
