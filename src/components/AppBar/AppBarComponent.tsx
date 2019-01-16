import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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

interface AppBarComponentProps {
    classes: any;
    title?: string;
    taskStarted: boolean;
    onLoginClick: () => void;
    onCancelClick: () => void;
}

function AppBarComponent(props: AppBarComponentProps) {
    const {
        classes,
        title,
        taskStarted,
        onLoginClick,
        onCancelClick,
    } = props;

    return (
        <AppBar position="static">
            <div className={classes.root}>
                <Toolbar>
                    {
                        taskStarted ?
                            <IconButton className={classes.menuButton} color="inherit" onClick={onCancelClick}>
                                <ArrowBackIcon/>
                            </IconButton> :
                            <IconButton className={classes.menuButton} color="inherit">
                                <MenuIcon/>
                            </IconButton>
                    }
                    <Typography id="navTitle" variant="h6" color="inherit" className={classes.grow}>
                        {!!title ? title : ''}
                    </Typography>
                    {
                        taskStarted ?
                            <IconButton>
                                <MoreVertIcon/>
                            </IconButton> :
                            <Button color="inherit" onClick={onLoginClick}>Login</Button>
                    }
                </Toolbar>
            </div>
        </AppBar>
    );
}

AppBarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    taskStarted: PropTypes.bool.isRequired,
    onLoginClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppBarComponent);