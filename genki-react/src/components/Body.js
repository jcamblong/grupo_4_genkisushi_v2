import React from 'react';
import NavBar from './Navbar';
import CardProducts from './products/CardProducts';
import CardUsers from './users/CardUsers';
import CardOrders from './orders/CardOrders';
import Categorias from './products/Categorias';
import Last from './products/Last';
import TableUser from './users/TableUser';
import TableProduct from './products/TableProduct';
import TableOrder from './orders/TableOrder';


function Body (){
    return (
        <div id= "wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavBar />
            <div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Genki Dashboard</h1>
				</div>
                <div className="row">
                <CardUsers />
                <CardProducts />
                <CardOrders />
                </div>
                <Last />
                <Categorias />
                <div className="card-header py-3">
		        <h6 className="m-0 font-weight-bold text-primary">Ultimo producto agregado a la Base de Datos</h6>
		      </div>
                    <TableProduct />
                    <TableUser />
                    <TableOrder />		
            </div>
        </div>
        </div>
        </div>
    );
}

export default Body;