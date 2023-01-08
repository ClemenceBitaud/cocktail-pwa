import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
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

    link: {
        boxSizing: 'border-box',
        display: 'block',
        textDecoration: 'none',
        borderRadius: theme.radius.xl,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        height: 30,
        lineHeight: '30px',
        fontFamily: 'Limelight, cursive',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'filled', color: "orange" })
                .background,
            color: theme.colors.dark[9],
        },
    },

    searchInput : {
        backgroundColor: "#FFE6E9",
        borderColor: "#FFE6E9"
    },
}));

const linksMockdata = [
    {
        label:'Home',
        linkTo: '/'
    },
    {
        label:'Popular',
        linkTo: '/popular'
    },
    {
        label:'Cocktail',
        linkTo: '/cocktail'
    },
    {
        label:'Favorite',
        linkTo: '/favorite'
    }
];

const Header = () => {

    const navigate = useNavigate();
    const { classes, cx } = useStyles();
    const [activeLink, setActiveLink] = useState('Home');

    const links = linksMockdata.map((link) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: activeLink === link.label })}
            href="/"
            onClick={(event) => {
                event.preventDefault();
                navigate(link.linkTo)
                setActiveLink(link.label);
            }}
            key={link.label}
        >
            {link.label}
        </a>
    ));

    return(
        <Flex justify="space-between" align="center">
            <img src={image} className={classes.logo}/>
            <Navbar/>
            <TextInput placeholder="Search a cocktail" radius={20} aria-label="Search a cocktail" variant="filled" rightSection={<SearchIcon sx={{ color: '#FFB3BC' }}/>}/>
        </Flex>
    )
}
export default Header;