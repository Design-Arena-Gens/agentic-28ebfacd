import './globals.css'

export const metadata = {
  title: 'EduLearn - Modern Educational Platform',
  description: 'Transform your learning journey with our comprehensive educational resources',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
