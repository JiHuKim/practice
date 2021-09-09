import React, {useEffect} from 'react';
import useText from '../../customHooks/useText';

function HookExample2() {

    const [txt , onChange] = useText({exTxt:''});

    useEffect(() => {
        console.log('Hook2 useEffect');
        console.log({txt});
    }, [txt])//라이프 사이클 메서드가 합쳐진 API , *useEffect는 컴포넌트가 렌더링 이후 수행하는 작업

    return(
        <React.Fragment>
            <div>
                <input type="text" name="exTxt" value={txt.exTxt} onChange={onChange}/>
                <p>{txt.exTxt}</p>
            </div>
        </React.Fragment>
    );

}

export default HookExample2;