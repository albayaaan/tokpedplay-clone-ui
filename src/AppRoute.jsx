import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/videos/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRoute;
