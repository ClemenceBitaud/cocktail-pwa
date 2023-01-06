import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {createStyles, Flex, TextInput} from '@mantine/core';
import image from '../assets/cocktail.svg';
import SearchIcon from '@mui/icons-material/Search';

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

const Navbar = () => {

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
        <Flex justify="space-between">
            <img src={image} className={classes.logo}/>
            <Flex>
                {links}
            </Flex>
            <TextInput placeholder="Search a cocktail" aria-label="Search a cocktail" rightSection={<SearchIcon/>}/>
        </Flex>
    )
}
export default Navbar;

// export const NavBarLink = styled(NavLink)
// `
//   color: black;
//   text-decoration: none;
//   &:hover,
//   &:focus{
//     background: #FFE9D7;
//   }
// `