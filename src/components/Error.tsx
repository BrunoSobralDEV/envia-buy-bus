import pikachuErrorImg from '../assets/pikachu-no.gif';

interface Props {
  message: string;
}

export function Error({message}: Props) {
  return(
    <section className='mx-auto relative'>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Oh No! </strong>
        <span className="block sm:inline">Acho que a cidade está errada!</span>
      </div>
      <div>
        <img src={pikachuErrorImg} className="w-80 h-80 rounded-full" alt="imagem pikachu" />
      </div>
    </section>
  )
}