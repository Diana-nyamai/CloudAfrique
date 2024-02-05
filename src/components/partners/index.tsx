import { images } from "../../constants"

const Partners = () => {
  return (
    <div className="lg:my-60 p-10 flex flex-row flex-wrap gap-10 justify-center items-center">
      <img src={images.p1} alt="partners" />
      <img src={images.p2} alt="partners" />
      <img src={images.p3} alt="partners" />
      <img src={images.p4} alt="partners" />
    </div>
  )
}

export default Partners
