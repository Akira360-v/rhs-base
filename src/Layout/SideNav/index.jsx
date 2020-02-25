import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {routes} from '../../routes';
import {Link} from 'react-router-dom';
import {useStyles} from "../../jss/Layout/SideNav/";

const SideNav = props => {
    const classes = useStyles();
    return (
        <div id="SideNav">
            <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar}>RHS</Avatar>
                <Typography className={classes.avatarTitle} variant="subtitle2">
                    Remote User
                </Typography>
            </div>
            <Divider />
            <List className={classes.menuList}>
                {routes.map(renderItem)}
            </List>
        </div>
    );

    function renderItem(item, index) {
        const Icon = item.link.icon;
        return <ListItem button key={index} component={Link} to={item.route.path}>
            {Icon && <ListItemIcon><Icon/></ListItemIcon>}
            <ListItemText className={classes.linkText} primary={item.link.title}/>
        </ListItem>

    }
};

export default SideNav;