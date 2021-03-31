import Dashboard from './dashboard/Dashboard';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from './Header/AdminHeader';

import Sidebar from './sidebar/Sidebar';
import './adminPages.css';
import AdminProduct from './sidebar/AdminProduct';
import CreateEditProduct from './product/CreateEditProduct';





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
                    
                    <Route exact path="/admin/dashboard" component={Dashboard} />
                    <Route exact path="/admin/Product" component={AdminProduct} />
                    <Route exact path="/admin/Product/Create" component={CreateEditProduct} />
                    <Route exact path="/admin/Product/Edit/:id" component={CreateEditProduct}/>

                </div>
              </div>




                {/* <Redirect to="/error" /> */}
            </Switch>

           

        </div>

    )
}