import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
    </div>
  );
}

export default App;