import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import * as React from "react";
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

interface GAppBarProps {
    classes: any;
    title?: string;
}

function AppBarComponent(props: GAppBarProps) {
    const {classes, title} = props;

    return (
        <AppBar position="static">
            <div className={classes.root}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {!!title ? title : 'The Giver'}
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </div>
        </AppBar>
    );
}

AppBarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
};

export default withStyles(styles)(AppBarComponent);