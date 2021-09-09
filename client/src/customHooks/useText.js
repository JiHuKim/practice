import { useCallback, useState } from "react";

function useText(props){
    
    const [txt, setTxt] = useState(props);

    const onChange = useCallback((e) => {

        const {name, value}= e.target;
        
        setTxt({
            ...txt,
            [name] : value
        });

    }, [txt, setTxt])

    return [txt, onChange];
}

export default useText;