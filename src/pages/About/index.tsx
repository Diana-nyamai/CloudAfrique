import { images } from "../../constants"

const About = () => {
  return (
    <div>
     
     <div className='relative bg-blue h-full flex flex-col lg:flex-row justify-center items-center lg:px-32 pb-32'>
        <div className='text-white px-5 xl:w-1/2 mt-10'>
          <h1 className='text-white text-2xl lg:text-6xl capitalize mb-4 font-playfair text-center'>About <span className="text-orange">Us</span> </h1>
          <p className="font-montserrat mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorum laudantium nesciunt exercitationem modi. In sit saepe eius, mollitia hic voluptatem eligendi ipsam recusandae</p>
        </div>
    </div>

    <div className="flex lg:flex-row w-full items-center px-11">
      <div className="w-1/2">
        <img src={images.aboutUs} alt="aboutUs" />
      </div>
      <div className="w-1/2">
        <p className="font-semibold font-montserrat mb-2">About Us</p>
        <h1 className="font-bold text-3xl font-playfair mb-3">KNOW ABOUT US</h1>
        <p className="font-montserrat">In Kenya, the high cost of clothing ,primarily due to expensive imported garments , poses a significant challenge for many, especially those with limited financial means. This scarcity of affordable clothing affects the basic well-being and self –esteem of individuals. Additionally ,unemployment rates, particularly among women and youth ,further compound economic hardships. To address these issues ,Cloud Afrique proposes a transformative solution by locally producing and selling clothing at more affordable prices while empowering women and unemployed youth through job creation at various stages at the production process. This initiative seeks to improve accessibility to clothing as a basic necessity, enhance economic opportunities and foster a stronger ,more self sufficient community.</p>
      </div>
    </div>

    </div>
  )
}

export default About
