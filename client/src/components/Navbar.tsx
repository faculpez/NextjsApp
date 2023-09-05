import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" passHref className="text-white text-2xl font-semibold">
          Next
        </Link> 


        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref className="text-white hover:text-gray-400 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref className="text-white hover:text-gray-400 transition duration-300">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
