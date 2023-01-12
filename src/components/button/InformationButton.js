import {useNavigate} from 'react-router-dom';
import {createStyles, UnstyledButton, Text, Title} from '@mantine/core';

const useStyles = createStyles((theme) => ({

    button: {
        textAlign: "center",
        // boxShadow: "0px 5px 6px rgba(0, 101, 85, 0.1)",
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xs,
        marginBottom: theme.spacing.xs,
        marginTop: theme.spacing.xs
    },

}));

const InformationButton = ({title, text, linkTo, color}) => {

    const navigate = useNavigate();
    const { classes} = useStyles();

    return(
        <UnstyledButton
            className={classes.button}
            style={{backgroundColor: color}}
            onClick={(event) => {
                event.preventDefault();
                navigate(linkTo);
            }}
        >
            <Title size="h5">{title}</Title>
            <Text fz="xs">{text}</Text>
        </UnstyledButton>
    )
}
export default InformationButton;
