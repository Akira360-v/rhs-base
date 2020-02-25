import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import SwipeableViews from 'react-swipeable-views';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';

import {useStyles} from "../../../jss/Routes/Employees/EmployeeCard";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";


const EmployeeCard = props => {
    const classes = useStyles();
    let {slug, name, image, tag_ids, short_description} = props;
    //TODO rename variables
    const [value, setValue] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
    function handleChangeTabView(index) {
        setValue(index);
    };

    function a11yProps(index) {
        return {
            id: `scrollable-prevent-tab-${index}`,
            'aria-controls': `scrollable-prevent-tabpanel-${index}`,
        };
    }

    return (
       <Card className={classes.card}>
           <CardHeader
               avatar={
                   <Avatar className={classes.avatar} src={image} aria-label="recipe"/>
               }
               action={
                   <IconButton aria-label="settings">
                       <MoreVertIcon />
                   </IconButton>
               }
               title={name}
               subheader={slug + ".rhs@gmail.com"}
           />

           <CardContent className={classes.cardContent}>
               <AppBar position="static">
                   <Tabs
                       value={value}
                       onChange={handleChangeTab}
                       variant="scrollable"
                       scrollButtons="off"
                       className={classes.tabContainer}
                   >
                       <Tab className={classes.tab} icon={<PersonPinIcon />} aria-label="info" {...a11yProps(0)} />
                       <Tab className={classes.tab} icon={<PhoneIcon />} aria-label="contact" {...a11yProps(1)} />
                       <Tab className={classes.tab} icon={<HelpIcon />} aria-label="help" {...a11yProps(2)} />
                   </Tabs>
               </AppBar>
               <SwipeableViews
                   index={value}
                   onChangeIndex={handleChangeTabView}
               >
                   <div className={classes.tabView}><Typography>Short description about this user: {short_description}<br/> This candidate has {tag_ids.length} categories</Typography></div>
                   <div className={classes.tabView}><Typography>{slug + ".rhs@gmail.com"} <br/> +38071-XXX-XX-XX</Typography></div>
                   <div className={classes.tabView}><Typography>additional info will be here</Typography></div>
               </SwipeableViews>
           </CardContent>
       </Card>
    );
};

export default EmployeeCard;
