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
        boxShadow: '0px 6px 5px rgba(255, 179, 188, 0.1)',
        textDecoration: 'none',
        borderRadius: 10,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        backgroundColor: "pink",
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        height: 30,
        lineHeight: '30px',
        fontFamily: 'Limelight, cursive',
    },
}));

const RetroButton = ({label, linkTo}) => {

    const navigate = useNavigate();
    const { classes} = useStyles();

    return(
        <Flex>
            <a
                className={classes.link}
                href="/"
                onClick={(event) => {
                    event.preventDefault();
                    navigate(linkTo)
                }}
                key={label}
            >
                {label}
            </a>
        </Flex>
    )
}
export default RetroButton;
