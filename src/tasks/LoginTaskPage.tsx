import * as React from 'react';
import {PureComponent} from "react";
import {connect} from "react-redux";
import {TaskProps} from "./models";
import {cancelTask, startTask} from "./actionCreators";
import {LoginFormContainer} from "../containers/LoginFormContainer/LoginFormContainer";
import {ApplicationState} from "../configureStore";
import {Divider, Grid, Typography} from "@material-ui/core";

class LoginTaskPage extends PureComponent {
    constructor(public props: TaskProps) {
        super(props);
    }

    componentWillMount(): void {
        this.props.onStartTask({navTitle: 'Sign in'})
    }

    componentWillUnmount(): void {
        this.props.onCancelTask();
    }

    render() {
        return (
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item md={12}>
                    <LoginFormContainer/>
                </Grid>
                <Grid item md={12} style={{marginTop: 100}}>
                    <Divider style={{width: 100}}/>
                </Grid>
                <Grid item md={12}>
                    <a href={"#"}><Typography variant={"caption"}>Create an account</Typography></a>
                </Grid>
            </Grid>
        );
    }
}

export default connect(
    (state: ApplicationState) => ({
        activatedRoute: state.router.location.pathname
    }),
    {
        onStartTask: startTask,
        onCancelTask: cancelTask,
    })(LoginTaskPage);
