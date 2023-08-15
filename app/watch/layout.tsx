import { WatchFooter } from '@/components/WatchFooter'
import { Footer } from '@/components/footer'
import { WatchHeader } from '@/components/watchHeader'
import React from 'react'

export default function layout({children} : {children: React.ReactNode}) {
    return (
        <div>
            <WatchHeader/>
            {children}
            <WatchFooter/>
        </div>
    )
}
