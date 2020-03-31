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
      const { error, orders} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
            return (
              <div class="col-lg-4 mb-4">	
              <div className= "card shadow mb-4">
                <div className="card-header py-3">
				          <h6 className="m-0 font-weight-bold text-primary">Ordenes en la Base de Datos</h6>
			          </div>
             
              <div className="card-body">
											
								<div className= "table-responsive">		
                <table className="table table-hover" id="dataTable" width="100%" cellspacing="0">
                   
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
                      {orders.map ((o, i) => (
                        <tr>
                          <td key={o.id + i}>{o.id}</td>
                          <td key={o + i}>{o.user_id}</td>
                          <td key={o + i}>{o.purchase_date}</td>
                          <td key={o + i}>{o.payment_method_id}</td>
                          <td key={o + i}>{o.order_status_id}</td>
                          <td key={o + i}>{o.cupon_id}</td>
                          <td key={o + i}>{o.purchase_total}</td>
                        </tr>))}   
                    </tbody>
                </table>
                </div>
                </div>	
                </div>
                </div>
               
            )
}
    }   
}
export default TableOrder;