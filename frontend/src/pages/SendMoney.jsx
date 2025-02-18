export function SendMoney() {
  return (
    <div className='bg-blue-200 h-screen p-50'>
      <div className='bg-white shadow-xl rounded px-8 pt-8 pb-6'>
        <div className='font-bold text-4xl text-center pb-10'>Send Money</div>

        <div className='flex items-center'>
          <div className=' px-3 py-1.5 rounded-full text-white bg-green-500 font-bold'>
            A
          </div>
          <h1 className='font-bold px-3'>Friend's Name</h1>
        </div>
        <div className='font-bold text-sm py-3'>Amount (in Rs)</div>
        <input
          type='text'
          placeholder='Enter amount'
          className='border border-gray-300 rounded p-2 w-full'
        />
        <button
          type='button'
          className='bg-green-400 text-white font-bold w-full p-2.5 my-5 rounded-lg hover:outline hover:outline-orange-500'
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}
