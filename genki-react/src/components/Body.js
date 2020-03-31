import React from 'react';
import './Body.css';
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
                <div className="container-fluid py-4">
                <div className="row">
                    <CardUsers />
                    <CardProducts />
                    <CardOrders />
                    <Last />
                    <Categorias />
                    <TableProduct />
                    <TableUser />
                    <TableOrder />		
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Body;