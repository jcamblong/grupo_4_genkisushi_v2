import React, {Component} from 'react';


class Last extends Component {
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
        .then ((result) => {this.setState (
          {
          data: result.data,
          meta: result.meta
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
          <div class="col-lg-6 mb-4">
            <div className="card shadow mb-4">	 
              <div className="card-header py-3">
		            <h6 className="m-0 font-weight-bold text-primary">Ultimo producto agregado a la Base de Datos</h6>
		          </div>   
              <div className="card-body">
			          <div className="text-center">
				          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3000/img/products/prueba.jpg"} alt="product"/>
                    <div className="card-footer text-muted">
                      <h5 className="card-title">{"prueba"}</h5>
                      <p className="card-text">{"Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</p>
                      <p className="card-text">{"Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</p>
                    </div> 
                </div>
		          </div>
            </div>
          </div>
        );
      }
    }
  }

export default Last;