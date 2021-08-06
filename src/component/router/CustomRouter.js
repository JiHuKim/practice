import Main from "../main/Main";
// import SignUp from "../signUp/SignUp";
import SignUpSuc from "../signUp/SignUpSuc";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import SignUpFormik from "../signUp/SignUpFormik";

function CustomRouter(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/signUp/suc" component={SignUpSuc}/>
                {/* <Route path="/signUp" component={SignUp}/> */}
                <Route path="/signUp" component={SignUpFormik}/>
            </Switch>
        </BrowserRouter>
    );
}

export default CustomRouter;