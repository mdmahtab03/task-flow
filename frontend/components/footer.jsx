import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-secondary py-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TaskFlow
        </p>
      </footer>
  )
}

export default Footer
