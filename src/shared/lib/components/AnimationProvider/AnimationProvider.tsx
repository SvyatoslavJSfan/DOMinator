import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});


const getAsyncAnimationModules = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider
            value={value}
        >
            {children}
        </AnimationContext.Provider>
    );
};
