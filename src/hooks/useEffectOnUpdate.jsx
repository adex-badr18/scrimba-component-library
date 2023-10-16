import { useEffect, useRef } from "react";

const useEffectOnUpdate = (effectCallback, dependenciesArr) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;    
        } else {
            effectCallback();
        }

    }, dependenciesArr)
}

export default useEffectOnUpdate;