import {PureComponent} from "react";
import * as React from "react";
import {loadPage} from "./actionCreators";
import {connect} from "react-redux";
import {PageProps} from "./models";
import {ApplicationState} from "../configureStore";
import {activePage} from "../Navigator/actionCreators";

class HomePage extends PureComponent {

    constructor(public props: PageProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onPageLoad({navTitle: 'Giver'});
        this.props.onNavigated(this.props.activatedRoute);
    }

    render() {
        return (
            <div>Home Page</div>
        )
    }
}

export default connect(
    (state: ApplicationState) => ({activatedRoute: state.router.location.pathname}),
    {onPageLoad: loadPage, onNavigated: activePage}
    )(HomePage);
