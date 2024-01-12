interface sdgProps {
    title: string;
    desc: string;
    index: number
}
const SdgCard:React.FC<sdgProps> = ({title, desc, index}) => {
  return (
    <div className="bg-white text-black w-1/4" key={index}>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default SdgCard
