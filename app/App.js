import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import NavigationBar from './_components/_navigation/NavigationBar';
import Home from './_components/_home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';;

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

function mapState(state) {
    return {

    };
}

const actionCreators = {

}

export default connect(mapState, actionCreators)(App);