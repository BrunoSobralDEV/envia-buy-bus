import pikachuErrorImg from '../assets/pikachu-no.gif';

interface Props {
  message: string;
}

export function Error({message}: Props) {
  return(
    <section className='mx-auto'>
      <h2>{message}</h2>
      <div>
        <img src={pikachuErrorImg} className="w-80 h-80 rounded-full" alt="imagem pikachu" />
      </div>
    </section>
  )
}