import * as React from 'react';
import {PureComponent} from "react";
import {loadPage} from "./actionCreators";
import {connect} from "react-redux";
import {PageProps} from "./models";


class LoginPage extends PureComponent {
    constructor(public props: PageProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onPageLoad({navTitle: 'Login'})
    }

    render() {
        return (<div>Login Page</div>);
    }
}

export default connect((state) => ({}), {onPageLoad: loadPage})(LoginPage);
