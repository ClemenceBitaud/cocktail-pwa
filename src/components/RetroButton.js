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
        <div>
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
        </div>
    )
}
export default RetroButton;
