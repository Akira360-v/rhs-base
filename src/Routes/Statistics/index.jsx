import React from 'react';
import CategoriesChart from './CategoriesChart';
import  EmployeesOnProject from './EmployeesOnProject';
import Card from '@material-ui/core/Card';
import {useStyles} from "../../jss/Routes/Statistics/";
import Typography from "@material-ui/core/Typography";

const Statistics = props => {
    const classes = useStyles();

    return (
        <div className={classes.statistics}>
            <Card className={classes.totalEmployees}>
                <Typography className={classes.title} variant="h6">
                    Remote User's categories chart
                </Typography>
                <CategoriesChart /*className={classes.card}*//>
            </Card>
            <Card className={classes.card}>
                <Typography className={classes.title} variant="h6">
                    Remote User's on project chart
                </Typography>
                <EmployeesOnProject /*className={classes.card}*//>
            </Card>
        </div>

    );
};

export default Statistics;