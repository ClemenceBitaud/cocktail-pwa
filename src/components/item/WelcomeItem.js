import {createStyles, Flex, Title, Text} from '@mantine/core';
import RetroButton from "../RetroButton";

const useStyles = createStyles((theme) => ({

    section: {
        flex: 2,
        marginRight: theme.spacing.xl,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginBottom: theme.spacing.xl,
            marginRight: 0
        },
    },

    title : {
        marginBottom: theme.spacing.md
    }
}));

const WelcomeItem = () => {

    const { classes} = useStyles();

    return(
        <Flex direction="column" align={{ base: 'center', md:'flex-start'}} className={classes.section}>
            <Title size="h1" className={classes.title}>Welcome in World of Cocktails</Title>
            <Text fz="lg">No idea for an aperitif or a party? A cocktail in mind but you don't know how to make it? No original drink for your SAM?
            </Text>
            <RetroButton label={"Find a cocktail"} linkTo={"/cocktail"}/>
        </Flex>
    )
}
export default WelcomeItem;
