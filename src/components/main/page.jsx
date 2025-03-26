
import React from 'react'
import Header from '../layout/header.jsx'
import Footer from '../layout/footer.jsx'

export default function Page({children}) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}
