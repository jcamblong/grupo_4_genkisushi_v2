import React from 'react';
import './Body.css';
import NavBar from './Navbar';
import ApiCallProducts from './ApiCallProducts';
import ApiCallUsers from './ApiCallUsers';
import ApiCallOrders from './ApiCallOrders';
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
                <div className="row ">
                    <ApiCallProducts />
                    <ApiCallUsers />
                    <ApiCallOrders />
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