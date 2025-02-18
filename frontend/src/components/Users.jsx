import { useState } from "react";
import { Button } from "./Button";

export function Users() {
  const [users, setUsers] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1
    }
  ]);
  return (
    <>
      <div className='px-3'>
        <div className='font-bold py-2'>Users</div>
        <input
          className='border border-gray-400 rounded px-2 py-0.5 w-full'
          type='text'
          placeholder='Search users...'
        />
      </div>
      <div>
        {users.map((user) => (
          // eslint-disable-next-line react/jsx-key
          <User user={user} />
        ))}
      </div>
    </>
  );
}

function User({ user }) {
  return (
    <div className='flex justify-between py-3 px-3 items-center'>
      <div className='flex items-center space-x-2 py-3 '>
        <div className='rounded-full px-3 py-1.5 border bg-violet-100'>
          {user.firstName[0]}
        </div>
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className='pb-3'>
        <Button label='Send Money' />
      </div>
    </div>
  );
}
