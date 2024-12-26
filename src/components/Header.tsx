import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-900">EduSolve</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Subjects
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}