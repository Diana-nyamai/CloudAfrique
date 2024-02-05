interface sdgProps {
    title: string;
    desc: string;
    index: number
}
const SdgCard:React.FC<sdgProps> = ({title, desc, index}) => {
  return (
    <div className="bg-white text-black lg:w-1/4 h-60 flex flex-col justify-center items-center px-4 mx-4" key={index}>
        <h3 className="font-bold">{title}</h3>
        <p className="text-center">{desc}</p>
    </div>
  )
}

export default SdgCard
