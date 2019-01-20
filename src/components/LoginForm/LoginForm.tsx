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
                    {({handleSubmit, handleChange, handleBlur, values}) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container alignItems="center" justify="center" direction="column"
                                  style={{marginTop: 80}}>
                                <Grid item md={12}>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        label="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="password"/>
                                </Grid>
                                <Grid item md={12}>
                                    <Divider style={{marginTop: 50, marginBottom: 10, width: 300}}/>
                                </Grid>
                                <Grid item md={12}>
                                    <Button color="primary" type="submit">Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}