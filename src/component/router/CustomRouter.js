import Main from "../main/Main";
import SignUp from "../signUp/SignUp";
import SignUpSuc from "../signUp/SignUpSuc";


function CustomRouter(){
    <Router>
        <Switch>
            <Route exact path="/" component={<Main />}/>
            <Route path="/signUp" component={<SignUp />}/>
            <Route path="/signUp/suc" component={<SignUpSuc />}/>
        </Switch>
    </Router>
}

export default CustomRouter;