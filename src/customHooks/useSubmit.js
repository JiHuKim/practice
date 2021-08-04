import { useCallback } from "react";
import { useHistory } from "react-router-dom";

function useSubmit(path){

    const history = useHistory();

    const onSubmit = useCallback(() => {
        history.push(path);
    }, [path, history])

    return onSubmit;
}

export default useSubmit;