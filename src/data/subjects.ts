import { Subject } from '../types';
import { Beaker, Brain, Calculator, Atom } from 'lucide-react';

export const subjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    icon: Atom,
    description: 'Master fundamental physics concepts through step-by-step problem solving',
    topics: [
      {
        id: 'mechanics',
        name: 'Mechanics',
        exercises: [
          {
            id: 'projectile-motion',
            title: 'Projectile Motion',
            difficulty: 'intermediate',
            steps: [
              {
                id: '1',
                content: 'A ball is thrown with initial velocity of 20 m/s at an angle of 45°. Calculate its maximum height.',
                explanation: 'We will use the equation h = (v₀y)²/2g where v₀y = v₀sin(θ)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: Beaker,
    description: 'Learn chemistry through interactive problem-solving and detailed explanations',
    topics: []
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: Brain,
    description: 'Explore biological concepts with visual aids and step-by-step solutions',
    topics: []
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: Calculator,
    description: 'Build strong mathematical foundations with guided problem solutions',
    topics: []
  }
];