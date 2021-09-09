import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Account/Register';
import Login from './pages/Account/Login';
import MyAccount from './pages/Account/MyAccount';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import TicketBooking from './pages/TiketBooking/TicketBooking';
import AccountTemplate from './templates/AccountTemplate/AccountTemplate';
import FeatureTemplate from './templates/FeatureTemplate/FeatureTemplate';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/register">
                    <AccountTemplate>
                        <Register />
                    </AccountTemplate>
                </Route>
                <Route exact path="/login">
                    <AccountTemplate>
                        <Login />
                    </AccountTemplate>
                </Route>
                <Route exact path="/my-account">
                    <FeatureTemplate>
                        <MyAccount />
                    </FeatureTemplate>
                </Route>
                <Route exact path="/">
                    <FeatureTemplate>
                        <Home />
                    </FeatureTemplate>
                </Route>

                <Route exact path="/detail/:id">
                    <FeatureTemplate>
                        <Detail />
                    </FeatureTemplate>
                </Route>

                <Route exact path="/ticket-booking/:id">
                    <FeatureTemplate>
                        <TicketBooking />
                    </FeatureTemplate>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
