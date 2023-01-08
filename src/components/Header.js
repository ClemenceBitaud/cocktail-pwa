import {createStyles, Flex, TextInput} from '@mantine/core';
import image from '../assets/cocktail.svg';
import SearchIcon from '@mui/icons-material/Search';
import './TextInput.css'
import Navbar from "./Navbar";

const useStyles = createStyles((theme) => ({

    logo: {
        height:40,
        width: 40
    },

    searchInput : {
        backgroundColor: "#FFE6E9",
        borderColor: "#FFE6E9"
    },
}));

const Header = () => {

    const { classes} = useStyles();

    return(
        <Flex justify="space-between" align="center">
            <img src={image} className={classes.logo} alt="logo"/>
            <Navbar/>
            <TextInput placeholder="Search a cocktail" radius={20} aria-label="Search a cocktail" variant="filled" rightSection={<SearchIcon sx={{ color: '#FFB3BC' }}/>}/>
        </Flex>
    )
}
export default Header;