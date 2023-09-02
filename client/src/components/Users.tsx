import React from 'react';
import { user } from './types';

interface UsersProps {
  users: user[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white rounded-lg shadow-lg p-4">
            <div>
              <h2 className="text-xl font-semibold">{user.first_name}</h2>
              <p className="text-gray-600">{user.last_name}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name}
              className="mt-2 w-32 h-32 rounded-full mx-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Users;
                                                                                                                                                 