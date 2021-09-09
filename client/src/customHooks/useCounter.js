import { useCallback, useState } from 'react';

function useCounter(props){
    
    const [count, setCount] = useState(props);

    const onClick = useCallback((e) => {
        
        const chk = e.target.value === "+";
        
        chk ? setCount(count + 1) : setCount(count - 1);

    }, [count])

    return [count , onClick];
}

export default useCounter;