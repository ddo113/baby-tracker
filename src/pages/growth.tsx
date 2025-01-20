import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Scale, Ruler, Activity } from 'lucide-react';

export default function GrowthPage() {
  const measurements = [
    { date: '2024-01-15', weight: 5.2, height: 60 },
    { date: '2024-02-15', weight: 5.8, height: 62 },
    { date: '2024-03-15', weight: 6.4, height: 64 }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Growth Tracking</h1>

      {/* Latest Measurements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="h-5 w-5 mr-2" />
              Current Weight
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{measurements[measurements.length - 1].weight} kg</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Ruler className="h-5 w-5 mr-2" />
              Current Height
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{measurements[measurements.length - 1].height} cm</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Growth Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Normal</div>
          </CardContent>
        </Card>
      </div>

      {/* Measurement History */}
      <Card>
        <CardHeader>
          <CardTitle>Measurement History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {measurements.reverse().map((measurement, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-600">{measurement.date}</div>
                <div className="flex space-x-8">
                  <div>
                    <span className="text-gray-500 mr-2">Weight:</span>
                    <span className="font-medium">{measurement.weight} kg</span>
                  </div>
                  <div>
                    <span className="text-gray-500 mr-2">Height:</span>
                    <span className="font-medium">{measurement.height} cm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add New Measurement */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Measurement</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Measurement
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
