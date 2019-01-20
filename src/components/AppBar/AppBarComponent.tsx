import {AppBar, IconButton, Theme, Toolbar, Typography, withTheme} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
    activePagePath: string;
    taskStarted: boolean;
    onLoginClick: () => void;
    onCancelClick: (p: string) => void;
    theme: Theme;
}

function AppBarComponent(props: AppBarComponentProps) {
    const {
        classes,
        title,
        taskStarted,
        activePagePath,
        onLoginClick,
        onCancelClick,
        theme
    } = props;

    return (
        <AppBar position="static" style={
            {backgroundColor: taskStarted ? theme.palette.primary.dark : theme.palette.primary.main}
        }>
            <div className={classes.root}>
                <Toolbar>
                    {
                        taskStarted ?
                            <IconButton className={classes.menuButton} color="inherit"
                                        onClick={() => onCancelClick(activePagePath)}>
                                <CloseIcon/>
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
                            <IconButton color="inherit" onClick={onLoginClick}>
                                <AccountCircleIcon/>
                            </IconButton>
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
    onCancelClick: PropTypes.func.isRequired,
};

export default withTheme()(withStyles(styles)(AppBarComponent));