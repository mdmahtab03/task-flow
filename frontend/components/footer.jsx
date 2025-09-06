import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-secondary py-6">
      <p className="text-center text-base md:text-lg font-medium text-muted-foreground">
        © {new Date().getFullYear()} TaskFlow
      </p>
    </footer>
  )
}

export default Footer
