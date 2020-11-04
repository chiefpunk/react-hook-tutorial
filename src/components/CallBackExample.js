import React, { useRef } from 'react'
import { useCountRenders } from "../hooks/useCountRenders";

export const CallBackExample = React.memo(({increment}) => {
    
    useCountRenders();

    return (
        <>
            <button onClick={()=>increment(5)}>It's EM</button>
        </>
    )
});

