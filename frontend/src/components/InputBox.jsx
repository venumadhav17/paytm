// eslint-disable-next-line react/prop-types
export function InputBox({ label }) {
  return (
    <div>
      <div className='text-sm font-medium text-left py-2'>{label}</div>
      <input
        type='text'
        placeholder='John'
        className='w-full px-2 py-1 border border-rounded border-slate-200'
      />
    </div>
  );
}
