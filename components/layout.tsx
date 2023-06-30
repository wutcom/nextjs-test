import Navbar from './navbar'
import Sidebar from './sidebar'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="bg-gray-200 h-screen">
         <Sidebar />
        </div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <main>{children}</main>
        </div>
      </div>
    </>
  )
}