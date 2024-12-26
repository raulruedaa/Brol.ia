import React from 'react';

export function Features() {
  return (
    <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Why Choose EduSolve?
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">Step-by-Step Solutions</h4>
          <p className="text-gray-600">Detailed explanations that break down complex problems into manageable steps</p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">Multiple Subjects</h4>
          <p className="text-gray-600">Comprehensive coverage of Physics, Chemistry, Biology, and Mathematics</p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">Budget-Friendly</h4>
          <p className="text-gray-600">Quality education accessible to everyone at an affordable price</p>
        </div>
      </div>
    </div>
  );
}