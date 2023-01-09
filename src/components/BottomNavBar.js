// import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {createStyles, Flex, UnstyledButton, Text} from '@mantine/core';
import './TextInput.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = createStyles((theme) => ({

    main : {
        backgroundColor: "#FFE9D7",
        borderRadius: theme.radius.xl,
        padding: '5px'
    },

    link: {
        borderRadius: theme.radius.xl,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        padding: `0 ${theme.spacing.xs}px`,
        backgroundColor: "transparent",
        height: 30,
        lineHeight: '30px',
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'filled', color: "orange" })
                .background,
            color: theme.colors.dark[9],
        },
    },

    text: {
        display: "none"
    },

    textActive: {
        display: "block"
    },

}));

const linksMockdata = [
    {
        label:'Home',
        icon: HomeIcon,
        linkTo: '/'
    },
    {
        label:'Popular',
        icon: StarRateIcon,
        linkTo: '/popular'
    },
    {
        label:'Cocktail',
        icon: LocalBarIcon,
        linkTo: '/cocktail'
    },
    {
        label:'Favorite',
        icon: FavoriteIcon,
        linkTo: '/favorite'
    }
];

const BottomNavBar = ({activeLink}) => {

    const navigate = useNavigate();
    const { classes, cx } = useStyles();
    // const [activeLink, setActiveLink] = useState('Home');

    const links = linksMockdata.map((link) => (
        <UnstyledButton
            className={cx(classes.link, { [classes.linkActive]: activeLink === link.label })}
            onClick={(event) => {
                event.preventDefault();
                navigate(link.linkTo)
                // setActiveLink(link.label);
            }}
        >
            <Flex align="center">
                <link.icon fontSize="small"/>
                <Text className={cx(classes.text, { [classes.textActive]: activeLink === link.label })} size="xs">{link.label}</Text>
            </Flex>

        </UnstyledButton>
    ));

    return(
        <Flex justify="space-between" className={classes.main}>
            {links}
        </Flex>
    )
}
export default BottomNavBar;