import {createStyles, Flex, Text} from '@mantine/core';
import RetroButton from "../RetroButton";

const useStyles = createStyles((theme) => ({

    section : {
        flex: 1,
        border: '2px solid #B8D1CD',
        borderRadius: 20,
        paddingTop: theme.spacing.lg,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        paddingLeft: theme.spacing.md
    },
}));

const RandomItem = () => {

    const { classes} = useStyles();

    return(
        <Flex direction="column" align="center" justify="center" className={classes.section}>
            <Text align="center" fz="lg">Want to spice things up? Let us choose for you!
            </Text>
            <RetroButton label={"Start the random search !"} linkTo={"/cocktail"}/>
        </Flex>
    )
}
export default RandomItem;
