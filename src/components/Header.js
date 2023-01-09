import {createStyles, Flex, TextInput} from '@mantine/core';
import image from '../assets/cocktail.svg';
import SearchIcon from '@mui/icons-material/Search';
import './TextInput.css'
import Navbar from "./Navbar";
import useWindowDimensions from "../utils/windowDimensionHook";

const useStyles = createStyles((theme) => ({

    logo: {
        height:40,
        width: 40
    },

    searchInput : {
        backgroundColor: "#FFE6E9",
        borderColor: "#FFE6E9",
    },
}));

const HeaderWithLogoNavbarTextInput = ({activeLink}) => {
    const { classes} = useStyles();

    return (
        <Flex justify="space-between" align="center">
            <img src={image} className={classes.logo} alt="logo"/>
            <Navbar activeLink={activeLink}/>
            <TextInput placeholder="Search a cocktail" radius={20} aria-label="Search a cocktail" variant="filled" rightSection={<SearchIcon sx={{ color: '#FFB3BC' }}/>}/>
        </Flex>
    )
}

const ChooseHeader = ({width, activeLink}) => {
    if (width <= 600){
        return <TextInput placeholder="Search a cocktail" radius={20} aria-label="Search a cocktail" variant="filled" rightSection={<SearchIcon sx={{ color: '#FFB3BC' }}/>}/>
    }
    return <HeaderWithLogoNavbarTextInput activeLink={activeLink}/>
}

const Header = ({activeLink}) => {
    const { width } = useWindowDimensions();

    return(
        <ChooseHeader width={width} activeLink={activeLink}/>
    )
}
export default Header;