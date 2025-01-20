import React from 'react';
import Link from 'next/link';
import { Home, Activity, Calendar, Settings } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center px-2 py-2 text-gray-700">
                <Home className="h-5 w-5" />
                <span className="ml-2">Baby Tracker</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/activities" className="flex items-center px-2 py-2 text-gray-700">
                <Activity className="h-5 w-5" />
                <span className="ml-2">Activities</span>
              </Link>
              <Link href="/medical" className="flex items-center px-2 py-2 text-gray-700">
                <Calendar className="h-5 w-5" />
                <span className="ml-2">Medical</span>
              </Link>
              <Link href="/settings" className="flex items-center px-2 py-2 text-gray-700">
                <Settings className="h-5 w-5" />
                <span className="ml-2">Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
