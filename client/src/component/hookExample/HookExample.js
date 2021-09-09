import React, { useEffect } from 'react';
import useCounter from '../../customHooks/useCounter';

function HookExample() {
    
    //const [count, setCount] = useState(0); //기존 setState대신 사용 , return 타입은 배열형식
    const [count, onClick] = useCounter(0);
    
    useEffect(() => {
        console.log(count)
        console.log(onClick)
    },[count, onClick])

    return(
        <React.Fragment>
            <p>현재 숫자 : {count}</p>
            <input type="button" value="+" onClick={onClick}/>
            <input type="button" value="-" onClick={onClick}/>
        </React.Fragment>
    );
}

export default HookExample;