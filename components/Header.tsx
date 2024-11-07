"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const stateId = pathname.includes('/state/') ? pathname.split('/state/')[1] : null;

  const stateServices = stateId ? [
    { title: 'Service 1', href: `/state/${stateId}/service-1` },
    { title: 'Service 2', href: `/state/${stateId}/service-2` },
    { title: 'Service 3', href: `/state/${stateId}/service-3` },
    { title: 'Service 4', href: `/state/${stateId}/service-4` },
  ] : [];

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-center py-1 text-sm border-b">
        <span>555-555-5555</span>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto border-b">
        <div className="flex items-center justify-between py-4 px-4">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8" />
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-green-600"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-gray-600 hover:text-green-600"
            >
              About
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  {stateId ? (
                    stateServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Select a state first
                    </div>
                  )}
                </div>
              )}
            </div>
            <Link 
              href="/locations"
              className="text-gray-600 hover:text-green-600"
            >
              Locations
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-green-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}