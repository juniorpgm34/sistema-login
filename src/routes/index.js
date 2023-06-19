import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth"

const Private = ({  Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exac path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<Signin />} />
                <Route exac path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp