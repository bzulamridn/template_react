import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Master from './Master';
import Dashboard from './component/Dashboard';
import Barang from './component/Barang';
import Kurir from './component/Kurir';
import Paket from './component/Paket';
import Konsumen from './component/Konsumen';
import Transaksi from './component/Transaksi';

function Routemain(){
    return(
        <Router history={browserHistory}>
            <Route component={Master}>
                <Route path='/' component={Dashboard} />
                <Route path='/barang' component={Barang} />
                <Route path='/kurir' component={Kurir} />
                <Route path='/paket' component={Paket} />
                <Route path='/konsumen' component={Konsumen} />
                <Route path='/transaksi' component={Transaksi} />
            </Route>
        </Router>
    );
}

export default Routemain