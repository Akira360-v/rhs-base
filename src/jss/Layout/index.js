import {fade, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    layout: {
        display: 'grid',
        gridTemplateAreas: '"header header" "nav content"',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: 'auto 1fr',
        minWidth: "100vw",
        //TODO: fix view in mobile browsers
        minHeight: '100vh'
    },
    header: {
        gridArea: 'header',
    },
    sidenav: {
        gridArea: 'nav',
    },
    content: {
        gridArea: 'content',
        backgroundColor: "#f4f7fc",
    }
}));