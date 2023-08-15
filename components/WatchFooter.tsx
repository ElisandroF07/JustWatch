import React from 'react'

export const WatchFooter = () => {
  return (
    <footer style={{backgroundColor: 'var(--ion-background-color)'}} className='px-16 flex items-center justify-between mb-10'>
        <div className='text-gray-300 mb-10 font-semibold flex text-md items-center justify-start gap-2'>JustWatch | <p className="font-normal " >The streaming guide</p> <div className="bg-yellow-600 text-black px-3 py-2 rounded-md">We are hiring</div> </div>
        <div className='text-gray-300 mb-10'>
            © 2023 JustWatch - All external content remains the property of the rightful owner. (3.6.1)
        </div>
    </footer>
  )
}
