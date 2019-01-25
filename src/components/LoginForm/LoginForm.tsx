import * as React from "react";
import {LoginFormModel} from "../../containers/LoginFormContainer/LoginFormContainer";
import {Formik} from "formik";
import {Button, Divider, Grid, TextField, Typography} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

interface LoginFormProps {
    isAuthenticated: boolean;
    onLoginSubmit: (formData: LoginFormModel) => void;
}

const initialValues: LoginFormModel = {username: '', password: ''};

export class LoginForm extends React.PureComponent<LoginFormProps> {
    render(): React.ReactNode {
        return (
            <div>
                <Formik initialValues={initialValues} onSubmit={this.props.onLoginSubmit}>
                    {({handleSubmit, handleChange, handleBlur, values, submitCount}) => (
                        <React.Fragment>
                            <Grid
                                container
                                style={{height: 70}}
                                justify="space-around"
                                alignContent="center"
                                alignItems="flex-end"
                            >
                                <Grid item style={{flexGrow: 1}}>
                                    {submitCount > 0 && !this.props.isAuthenticated ? <ErrorIcon color="error"/> : ''}
                                </Grid>
                                <Grid item style={{flexGrow: 3}}>
                                    <Typography color="error" variant="subheading">
                                        {submitCount > 0 && !this.props.isAuthenticated ? 'Username / Password incorrect' : ''}
                                    </Typography>
                                </Grid>
                            </Grid>
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
                                            error={submitCount > 0 && !this.props.isAuthenticated}
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField
                                            label="Password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={submitCount > 0 && !this.props.isAuthenticated}
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
                        </React.Fragment>
                    )}
                </Formik>
            </div>
        );
    }
}