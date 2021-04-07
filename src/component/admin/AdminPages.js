import Dashboard from './dashboard/Dashboard';
import React from 'react';
import { Switch } from 'react-router-dom';
import AdminHeader from './Header/AdminHeader';

import Sidebar from './sidebar/Sidebar';
import './adminPages.css';
import AdminProduct from './sidebar/AdminProduct';
import CreateEditProduct from './product/CreateEditProduct';
import PrivateRoute from '../privateRoute/PrivateRoute';






export default function AdminPages() {
    return (
        <div className="main">
            <div className="sidebar width-15">
                <Sidebar />
            </div>


            <Switch>
            <div className="body">

                <div className="header-wrapper">
                    <AdminHeader />
                </div>
                <div className="body-inner  width-85">
                    
                    <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/admin/Product" component={AdminProduct} />
                    <PrivateRoute exact path="/admin/Product/Create" component={CreateEditProduct} />
                    <PrivateRoute exact path="/admin/Product/Edit/:id" component={CreateEditProduct}/>

                </div>
              </div>




                {/* <Redirect to="/error" /> */}
            </Switch>

           

        </div>

    )
}