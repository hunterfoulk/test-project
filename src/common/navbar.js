import "./navbar.scss"
import { Link, useHistory } from "react-router-dom";


export default function Navbar() {
    const history = useHistory();

    //Re routes back to the homepage when the navbar text is clicked
    const handleHomeRoute = () => {
        history.push({
            pathname: `/test-project`,

        });
    }


    return (
        <div className="navbar">
            <span onClick={() => handleHomeRoute()}>Products Store</span>
        </div>
    )
}

