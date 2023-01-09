import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import {createStyles} from "@mantine/core";
import useWindowDimensions from "../utils/windowDimensionHook";
import {useParams} from "react-router-dom";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,

        // SMARTPHONE
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

const Cocktail = () => {

    const { classes} = useStyles();
    const {width} = useWindowDimensions();
    const activeLink = "Cocktail";
    const {search} = useParams();
    console.log(search);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Cocktail;