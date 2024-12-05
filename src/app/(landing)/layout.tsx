import Navbar from "@/components/global/navbar"
function layout({children}:{children:React.ReactNode}) {
  return (
    <main className="relative">
      <Navbar />
      {children}
    </main>
  )
}

export default layout
