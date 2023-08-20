import * as React from 'react'
import Header from './Header';
import Footer from './Footer';

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full flex flex-col min-h-screen overflow-hidden'>
      <Header />

      <main className='flex-1'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout