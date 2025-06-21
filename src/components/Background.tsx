import React from 'react'

const Background = () => {
  return (
          <div className="absolute inset-0">
        <div className="relative h-full w-full bg-[#f3f3f6] dark:bg-[#03030c] 
          [&>div]:absolute [&>div]:inset-0 
          [&>div]:bg-[linear-gradient(to_right,#d4d4d433_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d433_1px,transparent_1px)] 
          dark:[&>div]:bg-[linear-gradient(to_right,#4f4f4f4a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f4a_1px,transparent_1px)]
          [&>div]:bg-[size:14px_24px] 
          [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>
  )
}

export default Background