export function AppBar({ label, username, profile }) {
  return (
    <div className='my-5 mx-2'>
      <div className='border-y border-gray-300 bg-blue-200 px-4'>
        <div className='flex justify-between items-center'>
          <h1>{label}</h1>
          <div className='flex space-x-2 items-center'>
            <h1>{username}</h1>
            <p className='border rounded-full px-1.5 bg-green-200 mx-2 my-3'>
              {profile}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
