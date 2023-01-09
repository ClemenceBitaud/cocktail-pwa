import Header from "../components/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import {createStyles} from "@mantine/core";
import BottomNavBar from "../components/BottomNavBar";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,

        // Media query with value from theme
        [`@media (max-width: 600px)`]: {
            marginRight: `${1}em`,
            marginLeft: `${1}em`,
            marginTop: `${0.5}em`,
        },
    },

    section : {
        marginTop: theme.spacing.xl
    },
}));

const Favorite = () => {

    const { classes} = useStyles();
    const {width} = useWindowDimensions();
    const activeLink = "Favorite";

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Favorite;