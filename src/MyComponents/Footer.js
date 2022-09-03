import React from 'react'

export const Footer = () => {
 let footerStyle = {
  position: "sticky",
  top:"100vh",
  width:"100%",
  font: "20px solid grey"
 }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; TodosList.com
      </p>
    </footer>
  )
}
