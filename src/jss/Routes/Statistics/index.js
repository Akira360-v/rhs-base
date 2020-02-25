import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    statistics:{
        padding: 15,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    card: {
        height: "200px",
        margin: "1%",
        width: "48%",
    },
    totalEmployees: {
        width: "48%",
        margin: "1%",
        height: "400px",
    },
    title:{
      padding: "15px"
    }

}));