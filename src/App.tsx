import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import withRoot from './withRoot';
import GAppBar from "./components/GAppBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20,
        },
    });


const App = () => (
    <Router>
        <div>
            <GAppBar/>
            <Switch>
                    <Route path="/" exact={true} component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
            </Switch>
        </div>
    </Router>
);

export default withRoot(withStyles(styles)(App));
