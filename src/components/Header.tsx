import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-900">EduSolve</h1>
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/subjects" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Subjects
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}