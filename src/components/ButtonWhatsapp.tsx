import {Phone} from 'lucide-react'
export default function ButtonWhatsapp(){
  return(
    <button className="bg-green-500 rounded-2xl p-5 fixed right-3 bottom-4 text-white font-bold duration-300 hover:scale-105">
      <a href="https://wa.link/txkdmd" target="_blank" className="w-full h-full flex flex-row items-center justify-center gap-7">
        <Phone /> Contactate ahora !!!
      </a>
    </button>
  )
}
