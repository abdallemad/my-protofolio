'use client'
// @ts-expect-error:commonjs
import { ReactLenis } from "lenis/dist/lenis-react";

function Providers({children}:{children:React.ReactNode}) {
  return (
    <main>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        {children}
      </ReactLenis>
    </main>
  )
}

export default Providers
