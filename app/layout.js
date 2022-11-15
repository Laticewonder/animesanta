import '../styles/globals.css'
import Navbar from './Navbar'


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='bg-zinc-900 lg:ml-20 text-white'>
        <div className="nav relative z-10">
          <Navbar />
        </div>
        <div className="main z-0">
          {children}
        </div>
      </body>
    </html>
  )
}
