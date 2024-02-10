import { useEffect } from "react"
import { images } from "../../constants"
import AOS from 'aos'

const About:React.FC = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className="flex lg:mx-auto items-center gap-4 lg:px-5 lg:flex-row flex-col">
      <div data-aos="fade-down-right">
        <img src={images.About} alt="about" className="w-full h-full"/>
      </div>
      <div className="lg:w-1/2" data-aos="fade-up-left">
        <div className="flex items-center gap-3">
          <p className="w-20 border-b-2 border-orange"></p>
          <p className="capitalize text-lg relative font-playfair"> About <span className="text-orange">us</span></p>
        </div>
       
        <h2 className="font-playfair text-3xl font-bold">KNOW ABOUT US</h2>
        <p className="">In Kenya, the high cost of clothing ,primarily due to expensive imported garments , poses a significant challenge for many, especially those with limited financial means. This scarcity of affordable clothing affects the basic well-being and self –esteem of individuals. Additionally ,unemployment rates, particularly among women and youth ,further compound economic hardships. To address these issues ,Cloud Afrique proposes a transformative solution by locally producing and selling clothing at more affordable prices while empowering women and unemployed youth through job creation at various stages at the production process. This initiative seeks to improve accessibility to clothing as a basic necessity, enhance economic opportunities and foster a stronger ,more self sufficient community.</p>
      </div>
    </div>
  )
}

export default About
