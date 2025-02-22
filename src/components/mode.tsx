"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {useEffect, useState} from "react";

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [userTheme, setUserTheme] = useState('')
    useEffect(() => {
        setUserTheme(theme || '');
    }, [theme]);

    return (
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)} defaultValue={userTheme}>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
            <option value='system'>System</option>
        </select>
    )
}
