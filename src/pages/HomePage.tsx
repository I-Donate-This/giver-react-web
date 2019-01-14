import {PureComponent} from "react";
import * as React from "react";
import {loadPage} from "./actionCreators";
import {connect} from "react-redux";
import {PageProps} from "./models";

class HomePage extends PureComponent {

    constructor(public props: PageProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onPageLoad({navTitle: 'Giver'});
    }

    render() {
        return (
            <div>Home Page</div>
        )
    }
}

export default connect((state) => ({}), {onPageLoad: loadPage})(HomePage);
