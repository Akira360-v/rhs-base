import React from 'react';
import Routes from '../Routes/index';
import Header from './Header';
import SideNav from './SideNav';
import {useStyles} from "../jss/Layout";


const Layout = props => {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <div className={classes.header}>
                <Header/>
            </div>
            <div className={classes.sidenav}>
                <SideNav/>
            </div>
            <div className={classes.content}>
                <Routes/>
            </div>
        </div>

    );
};

export default Layout;
