import HomeSection from "../components/HomeSection";
import RandomSection from "../components/RandomSection";
import {createStyles, Flex} from "@mantine/core";
import TitleSeeMore from "../components/TitleSeeMore";
import CocktailCard from "../components/CocktailCard";
import Header from "../components/Header";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,
    },

    section : {
        marginTop: theme.spacing.xl
    },
}));

const Home = () => {

    const { classes} = useStyles();

    return(
        <div className={classes.main}>
            <Header/>
            <Flex direction={{ base: 'column', md:'row'}} className={classes.section}>
                <HomeSection/>
                <RandomSection/>
            </Flex>
            <TitleSeeMore/>
            <CocktailCard/>
        </div>

    )
}
export default Home;