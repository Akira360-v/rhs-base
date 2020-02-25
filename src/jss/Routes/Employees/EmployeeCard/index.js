import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    card:{
        maxWidth: "48%",
        flex: "0 0 50%",
        width: "100%",
        margin: "1%",
    },
    avatar:{
        width: theme.spacing(8),
        height: theme.spacing(8),
    },

    cardContent:{
      padding: 0,
    },
    tabContainer:{
      justifyContent: "center",
      backgroundColor: "#263238",
    },
    tab:{
        maxWidth: 45,
        minWidth: 30,
    },
    tabView:{
        padding: 16,
    }
}));