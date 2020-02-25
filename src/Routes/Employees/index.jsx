import React, {useEffect} from 'react';
import EmployeeCard from './EmployeeCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetch} from '../../Redux/actions/employees';
import {routes} from "../index";
import CircularProgress from '@material-ui/core/CircularProgress';

import {useStyles} from "../../jss/Routes/Employees/";

const Employees = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch());
    }, []);
    const {data: users, error, loader} = useSelector(state => {
        return {...state.employees}
    });

    console.log(users, error, loader);

    if(loader){
        return <div className={classes.loaderContainer}><CircularProgress/></div>
    }
    return (
        <div className={classes.employees}>
            {!loader && users && users.map(renderCards)}
        </div>
    );

    function renderCards(item, index) {
        return <EmployeeCard key={index} {...item}/>

    }
};

export default Employees;
