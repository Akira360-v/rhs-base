import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    employees:{
        padding: 15,
        display: "flex",
        flexWrap: "wrap",

    },
    loaderContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        //TODO fix mobile-browser view
        height: "100%",
        justifyContent: "center"
    }
}));