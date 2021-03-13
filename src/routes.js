import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Home from "./Home";
import Product from "./product"
import Navbar from "./common/navbar"
function Routes() {


    return (
        <Router >
            <Navbar />


            < Switch >
                <Route path='/test-project' component={Home} exact />
                <Route path='/product/:id' component={Product} exact />
            </Switch>



        </Router>
    )
}

export default Routes;