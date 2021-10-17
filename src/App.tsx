import './App.scss';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Register from './pages/Account/Register';
import Login from './pages/Account/Login';
import MyAccount from './pages/Account/MyAccount';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import TicketBooking from './pages/TiketBooking/TicketBooking';
import AccountTemplate from './templates/AccountTemplate/AccountTemplate';
import FeatureTemplate from './templates/FeatureTemplate/FeatureTemplate';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

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

                <Route exact path="/detail/:maPhim">
                    <FeatureTemplate>
                        <Detail />
                    </FeatureTemplate>
                </Route>

                <UserRoute exact path="/ticket-booking/:maLichChieu">
                    <FeatureTemplate>
                        <TicketBooking />
                    </FeatureTemplate>
                </UserRoute>
            </Switch>
        </Router>
    );
}

export default App;

interface IUserRouteProps {
    path: string;
    exact: boolean;
}
const UserRoute: React.FC<IUserRouteProps> = ({ children, ...restProps }) => {
    const history = useHistory();
    const { userLocal } = useSelector((root: RootState) => root.account);
    return (
        <Route
            {...restProps}
            render={() => {
                if (userLocal) {
                    return children;
                } else {
                    history.push('/login');
                    return null;
                }
            }}
        />
    );
};
