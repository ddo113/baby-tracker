import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Baby, Plus } from 'lucide-react';

interface BabyData {
  id: string;
  name: string;
  birthDate: string;
  gender: string;
}

export default function Home() {
  const { data: session } = useSession();
  const [babies, setBabies] = useState<BabyData[]>([]);

  useEffect(() => {
    if (session) {
      fetchBabies();
    }
  }, [session]);

  const fetchBabies = async () => {
    try {
      const res = await fetch('/api/baby/list');
      if (res.ok) {
        const data = await res.json();
        setBabies(data);
      }
    } catch (error) {
      console.error('Error fetching babies:', error);
    }
  };

  if (!session) {
    return (
      <div className="text-center p-4">
        <p>Please sign in to access the dashboard</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Babies</h1>
        <Link href="/add-baby">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Add Baby
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {babies.map((baby) => (
          <Card key={baby.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Baby className="h-5 w-5" />
                <span>{baby.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Birth Date: {new Date(baby.birthDate).toLocaleDateString()}</p>
                <p>Gender: {baby.gender === 'M' ? 'Male' : 'Female'}</p>
                <Link href={`/baby/${baby.id}`}>
                  <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">
                    View Details
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}