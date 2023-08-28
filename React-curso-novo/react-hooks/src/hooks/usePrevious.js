import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
    const ref = useRef

    useDebugValue("--- CUSTOM HOOK E USE DEBUGVALUE")
    useDebugValue("O NUMERO ANTERIOR É " + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current;
}