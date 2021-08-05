import React from "react";
import useSubmit from "../../customHooks/useSubmit";

function Main(){

    const goSignUp = useSubmit({path:"/signUp"});

    return(
        <>
            <h1>My Web</h1>
            <input type="button" value="Sign Up" className="cmmBtn" onClick={goSignUp}/>
        </>
    );

}

export default Main;