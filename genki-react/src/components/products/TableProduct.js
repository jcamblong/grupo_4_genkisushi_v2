import React, {Component} from 'react';

class TableProduct extends Component {
  constructor (props) {
    super (props);
    this.state = {
      meta: "",
      data: []
    };
  }
  
    componentDidMount () {
      fetch ("http://localhost:3000/api/products")
        .then (res => res.json())
        .then ((result) => { this.setState (
          {
            meta: result.meta,
            data: result.data
          }
          )})
        .catch ( error => console.log (error))
    }
    
    render () {
      const { error, data} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
            return (
              <div class="col-lg-4 mb-4">	
              <div className= "card shadow mb-4">
                <div className="card-header py-3">
				          <h6 className="m-0 font-weight-bold text-primary">Productos en la Base de Datos</h6>
			          </div>
             
              <div className="card-body">		
								<div className= "table-responsive">	
                <table className="table table-hover" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Categoría</th>
                          <th>Tipo de Producto</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                        </tr>
                    </thead>

                    <tbody>
                      {data.map (p => (
                        <tr>
                          <td key={p.id}>{p.id}</td>
                          <td key={p.name}>{p.name}</td>
                          <td key={p.categories.name}>{p.categories.name}</td>
                          <td key={p.product_types.name}>{p.product_types.name}</td>
                          <td key={p.product_types.quantity}>{p.product_types.quantity}</td>
                          <td key={p.product_types.price}>{p.product_types.price}</td>
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
export default TableProduct;
