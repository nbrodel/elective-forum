import {useLayoutEffect, useState} from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    const handleSize = () => {
        setWindowSize({
            width: window.outerWidth,
            height: window.outerHeight
        });
    };

    useLayoutEffect(() => {
        handleSize();

        window.addEventListener("resize", handleSize);

        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return windowSize;
};

export default useWindowSize;
