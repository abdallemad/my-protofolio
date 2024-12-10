import React from 'react'
import { cn } from '@/lib/utils'
function SectionTitle({children,className}:{children:string,className?:string}) {
  return (
    <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2",className)}>
      {children}
    </h2>
  )
}

export default SectionTitle
