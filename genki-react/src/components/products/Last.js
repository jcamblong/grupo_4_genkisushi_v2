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
      const { error, data, meta } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
        <div className="card shadow mb-4">	    
        <div className="card-body">
			<div className="text-center">
				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3000/img/products/prueba.jpg"} alt="product image"/>
			</div>
                <p>{"prueba, prueba, prueba, prueba"}</p>
                <p>{"prueba, prueba, prueba, prueba"}</p>
				
		</div>
        </div>
	
    );
}
    }
}

export default Last;