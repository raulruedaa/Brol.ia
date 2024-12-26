import React from 'react';
import { Header } from './components/Header';
import { SubjectCard } from './components/SubjectCard';
import { Hero } from './components/hero/Hero';
import { Features } from './components/features/Features';
import { subjects } from './data/subjects';
import { Subject } from './types';

export default function App() {
  const handleSubjectClick = (subject: Subject) => {
    console.log('Selected subject:', subject.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={handleSubjectClick}
            />
          ))}
        </div>

        <Features />
      </main>
    </div>
  );
}