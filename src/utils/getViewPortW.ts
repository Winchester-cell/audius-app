export const getViewPortWidth = (): number => {
    if (typeof window !== "undefined") {
        return window.innerWidth;
    }
    return 0;
};
