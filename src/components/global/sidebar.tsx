'use client';
import {motion} from 'framer-motion';

interface Props{
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function Sidebar({setIsSidebarOpen}:Props) {
  return (
    <motion.div
    variants={{
      show:{

      },
      hide:{

      }
    }}
    initial="hide"
    animate="show"
    exit="hide"
    >
      
    </motion.div>
  )
}

export default Sidebar
