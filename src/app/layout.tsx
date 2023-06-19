import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Coach labib',
  description:
    'Coach Labib qui vous aide à vivre votre vie personelle et professionnelle pleinement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
