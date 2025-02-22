import {useTranslations} from 'next-intl';
import React from "react";

export default function NotFound() {
    // const t = useTranslations('Error');

    return (
        <html>
            <body className='text-center'>
                <h1 className='mt-10 font-semibold'>
                    {/*{t('not-found')}*/}
                    not-found
                </h1>
            </body>
        </html>
    );
}
