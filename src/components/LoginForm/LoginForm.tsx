import * as React from "react";
import {LoginFormModel} from "../../containers/LoginFormContainer/LoginFormContainer";
import {Formik} from "formik";
import {Button, Divider, Grid, TextField} from "@material-ui/core";

interface LoginFormProps {
    onLoginSubmit: (formData: LoginFormModel) => void;
}

const initialValues: LoginFormModel = {username: '', password: ''};

export class LoginForm extends React.PureComponent<LoginFormProps> {
    render(): React.ReactNode {
        return (
            <div>
                <Formik initialValues={initialValues} onSubmit={this.props.onLoginSubmit}>
                    {({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container alignItems="center" justify="center" direction="column"
                                  style={{marginTop: 50}}>
                                <Grid item md={12}>
                                    <TextField label="Username" name="username"/>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField label="Password" name="password" type="password"/>
                                </Grid>
                                <Grid item md={12}>
                                    <Divider style={{marginTop: 50, marginBottom: 10, width: 300}}/>
                                </Grid>
                                <Grid item md={12}>
                                    <Button color="primary" type="submit">Submit</Button>
                                    <Button color="secondary">Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}