import { useEffect } from "react"
import { images } from "../../constants"
import AOS from 'aos'

const Partners = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className="lg:my-60 p-10 flex flex-row flex-wrap gap-10 justify-center items-center">
      <img src={images.p1} alt="partners"  data-aos="zoom-in"/>
      <img src={images.p2} alt="partners"  data-aos="zoom-in"/>
      <img src={images.p3} alt="partners"  data-aos="zoom-in"/>
      <img src={images.p4} alt="partners"  data-aos="zoom-in"/>
    </div>
  )
}

export default Partners
