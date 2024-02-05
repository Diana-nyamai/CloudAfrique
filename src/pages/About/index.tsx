import { images } from "../../constants";
import { features, funFacts, gallery } from "./data";

const About = () => {
  
  return (
    <div>
      <div className="relative bg-blue h-full flex flex-col lg:flex-row justify-center items-center lg:px-32 pb-32">
        <div className="text-white px-5 xl:w-1/2 mt-10">
          <h1 className="text-white text-2xl lg:text-6xl capitalize mb-4 font-playfair text-center">
            About <span className="text-orange">Us</span>{" "}
          </h1>
          <p className="font-montserrat mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            dolorum laudantium nesciunt exercitationem modi. In sit saepe eius,
            mollitia hic voluptatem eligendi ipsam recusandae
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center px-11 flex-wrap">
        <div className="lg:w-1/2">
          <img src={images.aboutUs} alt="aboutUs" />
        </div>
        <div className="lg:w-1/2">
          <p className="font-semibold font-montserrat mb-2">About Us</p>
          <h1 className="font-bold text-3xl font-playfair mb-3">
            KNOW ABOUT US
          </h1>
          <p className="font-montserrat">
            In Kenya, the high cost of clothing ,primarily due to expensive
            imported garments , poses a significant challenge for many,
            especially those with limited financial means. This scarcity of
            affordable clothing affects the basic well-being and self –esteem of
            individuals. Additionally ,unemployment rates, particularly among
            women and youth ,further compound economic hardships. To address
            these issues ,Cloud Afrique proposes a transformative solution by
            locally producing and selling clothing at more affordable prices
            while empowering women and unemployed youth through job creation at
            various stages at the production process. This initiative seeks to
            improve accessibility to clothing as a basic necessity, enhance
            economic opportunities and foster a stronger ,more self sufficient
            community.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-center font-bold font-playfair text-3xl">
          Our Features
        </h2>
        <div className="flex gap-6 justify-center items center flex-wrap my-5">
          {features.map((item, index) => (
            <div className="bg-lightBlue p-4 lg:w-1/4 mx-4" key={index}>
              <img src={item.icon} alt="donate" className="w-20" />
              <h3 className="mt-6 font-playfair font-semibold">{item.title}</h3>
              <p className="font-montserrat my-3">{item.desc}</p>
              <ol className="list-disc mx-11">
                <li>{item.l1}</li>
                <li>{item.l2}</li>
                <li>{item.l3}</li>
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* fun facts */}
      <div className="px-10">
        <h3 className="text-orange font-montserrat">Our Fun Facts</h3>
        <h1 className="font-playfair text-3xl font-semibold">We Believe that We can Save More Lifes with you</h1>
        
        <div className="flex gap-5 my-10 justify-center flex-wrap">
           {
          funFacts.map((fact, index)=>(
            <div className="bg-lightBlue p-4 w-full lg:w-[20%] flex flex-col justify-center items-center" key={index}>
            <img src={fact.icon} alt="donate" className="w-20" />
            <h3 className="mt-6 font-playfair font-semibold text-3xl">{fact.number} +</h3>
            <p className="font-montserrat my-3">{fact.title}</p>
          </div>
          ))
        }
        </div>
      </div>

      {/* our gallery */}
      <div className="pt-20">
        <h2 className="text-3xl font-playfair font-semibold px-10 py-6">Our <span className="text-orange">Gallery</span></h2>
         <div className="bg-lightOrange flex gap-6 flex-wrap justify-center items-center w-[80%] mx-auto p-4 rounded-md mb-10">
        {
          gallery.map((gallery, index)=>(
            <img src={gallery.image} alt="gallery" key={index}/>
          ))
        }
      </div>
      </div>
     
    </div>
  );
}

export default About
