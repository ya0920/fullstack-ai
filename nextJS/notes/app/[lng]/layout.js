import Sidebar from "@/components/Sidebar.jsx"
import '@/public/style.css';

export default async function RootLayout({children, params: {lng}}) {
  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}