import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import {Route, Switch} from 'react-router-dom';
import LoginTask from "../../tasks/LoginTask";
import AppBarContainer from "../AppBar/AppBarContainer";
import HomePage from "../../pages/HomePage";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20,
        },
    });


const App = () => (
    <div>
        <AppBarContainer/>
        <Switch>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/login" component={LoginTask}/>
        </Switch>
    </div>
);

export default withRoot(withStyles(styles)(App));
