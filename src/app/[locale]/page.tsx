import {useLocale, useTranslations} from 'next-intl';
import LocalSwitcher from "@/components/local-switcher";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode";

export default function Home() {
    /*const t = useTranslations('IndexPage');
    const localActive = useLocale();*/

    return (
        <div className="text-center">
            <h1 className='text-4xl mb-4 font-semibold'>title</h1>
            <p>description</p>
            <div className="flex justify-center">
                <div className="fixed flex flex-1">
                    <LocalSwitcher/>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    );
}
