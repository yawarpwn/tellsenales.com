import { useState } from 'preact/hooks'
import { WHATSAPP_LINK } from '@utils/constants'

export default function WhatsappBtnPopup() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='fixed bottom-[15px] right-[30px] z-50 lg:animate-bounce '>
        <div
          className={`
          duration-400 transition ease-in-out
          ${
            isOpen
              ? 'invisible translate-y-10 opacity-0 '
              : 'visible translate-y-0 opacity-100'
          }
          absolute right-full top-[10px] mr-1  hidden w-[155px] 
          rounded-md bg-[#f5f7f9] py-[6px] px-3 text-xs tracking-wide text-[#43474e] shadow-md md:block `}
        >
          <strong>Chatea con nostros</strong>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
          transition-all duration-300 ease-in-out
          ${!isOpen ? 'rotate-0' : 'rotate-90'}
          flex h-[42px] w-[42px] items-center justify-center rounded-full bg-green-500 text-white outline-none`}
        >
          {!isOpen ? (
            <svg
              className='h-7 w-7'
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path
                  fill-rule='nonzero'
                  d='M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z'
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              className='h-7 w-7'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Colaboradores */}
      <div
        className={`
            transition duration-300 
            ${
              !isOpen
                ? 'invisible translate-x-12 opacity-0'
                : 'visible translate-x-0 opacity-100'
            }

        max-w-[calc(100% - 50px)] fixed right-[25px] bottom-[73px] z-50 mx-auto max-w-xs`}
      >
        <div
          className={`
            rounded-md
bg-white
          `}
        >
          <div className='rounded-lg p-4 shadow-lg'>
            <div className='text-center text-xs text-[#989b9f] '>
              El equipo suele responder en unos minutos
            </div>
            <div className=' mt-[14px]'>
              <a
                href={`${WHATSAPP_LINK}Hola Raquel, vengo de la pagina. Estoy interesado en sus productos.`}
                target='_blank'
                className='relative flex items-center space-x-4  rounded-r-md border-l-2 border-green-500 bg-[#f5f7f9] py-4 px-3 shadow-sm'
              >
                <div className='w-[50px]'>
                  <img
                    src='/assets/team/raquel_maldonado.png'
                    alt='Raquel Maldonado Ramirez'
                  />
                </div>
                <div className='min-h-12 table-cell h-12 align-middle'>
                  <div className='text-sm text-[#363c47]'>
                    Raquel Maldonado Ramirez
                  </div>
                  <div className='text-[11px] text-[#989b9f]'>
                    Gerente Comercial
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <svg
                    className='h-10 w-10 text-green-500'
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path
                        fill-rule='nonzero'
                        d='M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z'
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
