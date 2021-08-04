import React from "react";
import useSubmit from "../../customHooks/useSubmit";

function Main(){

    const goSignUp = useSubmit("/signUp");

    return(
        <>
            <div>My Web</div>
            <input type="button" value="Sign Up" className="cmmBtn" onClick={goSignUp}/>
        </>
    );

}

export default Main;