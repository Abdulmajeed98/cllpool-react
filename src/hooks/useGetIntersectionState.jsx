import { useMemo, useEffect, useState } from "react";

const useGetIntersectionState = (options, targetRef) => {
    const optionsAsMemo = useMemo(() => options, [options]);
    const [isIntersected, setIsIntersected] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsIntersected(entry.isIntersecting);
        }, optionsAsMemo);
        if (targetRef.current) observer.observe(targetRef.current);
        return () => {
            if (targetRef.current) observer.unobserve(targetRef.current);
        };
    }, [targetRef, optionsAsMemo]);

    return isIntersected;
};

export default useGetIntersectionState;
