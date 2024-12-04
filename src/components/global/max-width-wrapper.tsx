import React from 'react'
import { cn } from '@/lib/utils'
interface Props{
  className?:string,
  children:React.ReactNode;
}
function MaxWidthWrapper({className,children}:Props) {
  return (
    <div className={cn('mx-4 md:mx-16 lg:mx-24',className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
