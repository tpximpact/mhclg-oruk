"use client"
import { useEffect, useState, useCallback } from "react";

export const NoJsFallback = () => {
    const [state] = useState("state");

    const amendHtmlTagClass = useCallback(() => {
        const e = document.getElementById("html")
        e.classList.remove('no-js')
    }, [state]);

    useEffect(() => {
        amendHtmlTagClass(); 
    }, [amendHtmlTagClass]);

    return <div></div>
}