import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Syringe, 
  Stethoscope, 
  Clock,
  Plus,
  AlertCircle 
} from 'lucide-react';

export default function MedicalPage() {
  const [appointments] = useState([
    {
      id: 1,
      type: 'Checkup',
      date: '2024-04-15',
      time: '09:00',
      doctor: 'Dr. Smith',
      notes: 'Regular checkup'
    },
    {
      id: 2,
      type: 'Vaccination',
      date: '2024-04-20',
      time: '10:30',
      doctor: 'Dr. Johnson',
      notes: '4-month vaccines'
    }
  ]);

  const [vaccinations] = useState([
    {
      id: 1,
      name: 'DTaP',
      date: '2024-01-15',
      nextDue: '2024-04-15',
      doctor: 'Dr. Johnson',
      notes: 'First dose'
    },
    {
      id: 2,
      name: 'Rotavirus',
      date: '2024-01-15',
      nextDue: '2024-04-15',
      doctor: 'Dr. Johnson',
      notes: 'First dose'
    }
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Medical Records</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Next Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">April 15, 2024</div>
            <div className="text-gray-500">Regular Checkup</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Syringe className="h-5 w-5 mr-2" />
              Next Vaccines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">April 20, 2024</div>
            <div className="text-gray-500">4-month vaccines</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Stethoscope className="h-5 w-5 mr-2" />
              Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-green-500">Healthy</div>
            <div className="text-gray-500">Last checked: Apr 1</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Upcoming Appointments</span>
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full">
              <Plus className="h-5 w-5" />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded-full">
                  {appointment.type === 'Checkup' ? 
                    <Stethoscope className="h-5 w-5 text-blue-500" /> : 
                    <Syringe className="h-5 w-5 text-green-500" />
                  }
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{appointment.type}</h3>
                    <div className="text-sm text-gray-500">
                      {appointment.date} at {appointment.time}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Dr. {appointment.doctor}</div>
                  <div className="mt-1 text-sm">{appointment.notes}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vaccination History */}
      <Card>
        <CardHeader>
          <CardTitle>Vaccination History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vaccinations.map((vaccine) => (
              <div key={vaccine.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded-full">
                  <Syringe className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{vaccine.name}</h3>
                    <div className="text-sm text-gray-500">{vaccine.date}</div>
                  </div>
                  <div className="text-sm text-gray-500">Next due: {vaccine.nextDue}</div>
                  <div className="mt-1 text-sm">{vaccine.notes}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Medical Record Form */}
      <Card>
        <CardHeader>
          <CardTitle>Add Medical Record</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Record Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Checkup</option>
                  <option>Vaccination</option>
                  <option>Illness</option>
                  <option>Medication</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Doctor</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Doctor's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Add any additional notes..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Record
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
