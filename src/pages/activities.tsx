import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Milk, 
  Moon, 
  Baby, 
  Clock,
  Plus 
} from 'lucide-react';

export default function ActivitiesPage() {
  const [activities] = useState([
    { 
      id: 1, 
      type: 'feeding',
      time: '08:00',
      duration: '20 minutes',
      details: 'Breast feeding - left side' 
    },
    { 
      id: 2, 
      type: 'sleep',
      time: '09:30',
      duration: '2 hours',
      details: 'Morning nap' 
    },
    { 
      id: 3, 
      type: 'diaper',
      time: '12:00',
      duration: null,
      details: 'Clean diaper' 
    }
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Daily Activities</h1>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-4 bg-blue-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600">
          <Milk className="h-5 w-5" />
          <span>Start Feeding</span>
        </button>
        
        <button className="p-4 bg-purple-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-600">
          <Moon className="h-5 w-5" />
          <span>Start Sleep</span>
        </button>
        
        <button className="p-4 bg-green-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600">
          <Baby className="h-5 w-5" />
          <span>Diaper Change</span>
        </button>
      </div>

      {/* Today's Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Milk className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Feedings</span>
              </div>
              <div className="mt-2 text-2xl font-bold">5</div>
              <div className="text-sm text-gray-500">Total today</div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Moon className="h-5 w-5 text-purple-500" />
                <span className="font-medium">Sleep</span>
              </div>
              <div className="mt-2 text-2xl font-bold">12h</div>
              <div className="text-sm text-gray-500">Total today</div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Baby className="h-5 w-5 text-green-500" />
                <span className="font-medium">Diapers</span>
              </div>
              <div className="mt-2 text-2xl font-bold">6</div>
              <div className="text-sm text-gray-500">Changes today</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Activity Timeline</span>
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full">
              <Plus className="h-5 w-5" />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 rounded-full bg-white">
                  {activity.type === 'feeding' && <Milk className="h-5 w-5 text-blue-500" />}
                  {activity.type === 'sleep' && <Moon className="h-5 w-5 text-purple-500" />}
                  {activity.type === 'diaper' && <Baby className="h-5 w-5 text-green-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium capitalize">{activity.type}</h3>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  {activity.duration && (
                    <div className="text-sm text-gray-500">{activity.duration}</div>
                  )}
                  <div className="mt-1 text-sm">{activity.details}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Activity Form */}
      <Card>
        <CardHeader>
          <CardTitle>Add Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Activity Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Feeding</option>
                  <option>Sleep</option>
                  <option>Diaper Change</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Details</label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Add any additional details..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Activity
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
