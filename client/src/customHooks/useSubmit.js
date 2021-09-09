import { useCallback } from "react";
import { useHistory } from "react-router-dom";

function useSubmit(props){

    const history = useHistory();

    const onSubmit = useCallback(() => {
        history.push(props.path, props.state);
    }, [props, history])

    return onSubmit;
}

export default useSubmit;