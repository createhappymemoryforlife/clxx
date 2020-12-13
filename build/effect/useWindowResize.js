import { useEffect, useRef } from "react";
/**
 * 窗口尺寸变化时触发
 * @param onResize
 */
export function useWindowResize(onResize) {
    const resizeRef = useRef(onResize);
    useEffect(() => {
        resizeRef.current = onResize;
    });
    useEffect(() => {
        window.addEventListener("resize", resizeRef.current);
        if (window.onorientationchange !== undefined) {
            window.addEventListener("orientationchange", resizeRef.current);
        }
        return () => {
            window.removeEventListener("resize", resizeRef.current);
            if (window.onorientationchange !== undefined) {
                window.removeEventListener("orientationchange", resizeRef.current);
            }
        };
    }, []);
}
