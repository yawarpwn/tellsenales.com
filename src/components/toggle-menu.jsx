export default function ToggleMenu({ opened }) {
  return (
    <div className='flex flex-col justify-center'>
      <div
        className={`w-[22px] h-[1px] bg-black transition-transform 
      ${opened ? 'translate-y-[1px] rotate-45' : 'translate-y-1 rotate-0'}`}
      ></div>
      <div
        className={`w-[22px] h-[1px] bg-black transition-transform 
      ${opened ? 'translate-y-0 -rotate-45' : '-translate-y-1 rotate-0'}`}
      ></div>
    </div>
  )
}
