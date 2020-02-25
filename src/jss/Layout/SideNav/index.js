import {fade, makeStyles} from "@material-ui/core/styles";
import { deepOrange } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
    avatarContainer:{
        padding: "16px 7px",
    },
    avatar:{
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: deepOrange[500],
        margin: "0 auto 10px",
    },
    avatarTitle:{
        textAlign: "center"
    },

    menuList: {
        padding: "8px 35px 8px 8px"
    },
    linkText:{
        fontSize: "14px"
    }
}));