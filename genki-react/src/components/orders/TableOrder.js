import React, {Component} from 'react';

class TableOrder extends Component {
    constructor (props) {
      super (props);
      this.state = {
        error: null,
        meta: "",
        orders: []
    };
    }
  
    componentDidMount () {
      fetch ("http://localhost:3000/api/orders")
        .then (res => res.json())
        .then ((result) => { this.setState (
          {
          meta: result.meta,
          orders: result.orders
          }
          )})
        .catch ( error => console.log (error))
    }
    
    render () {
      const { error, orders, meta} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
            return (
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                          <th>Id</th>
                          <th>Usuario</th>
                          <th>Fecha de Compra</th>
                          <th>Método de Pago</th>
                          <th>Estado de la Orden</th>
                          <th>Cupón</th>
                          <th>Total de la compra</th>
                        </tr>
                    </thead>

                    <tbody>
                      {orders.map (o => (
                        <tr>
                          <td key={o.id}>{o.id}</td>
                          <td key={o.id}>{o.user_id}</td>
                          <td key={o.id}>{o.purchase_date}</td>
                          <td key={o.id}>{o.payment_method_id}</td>
                          <td key={o.id}>{o.order_status_id}</td>
                          <td key={o.id}>{o.cupon_id}</td>
                          <td key={o.id}>{o.purchase_total}</td>
                        </tr>))}   
                    </tbody>
                </table>
            )
}
    }   
}
export default TableOrder;