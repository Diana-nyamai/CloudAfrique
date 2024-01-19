import { images } from "../../constants"

const Footer = () => {
  return (
    <div className="bg-blue w-full text-white flex p-10 justify-evenly">
      <div className="flex justify-center items-center">
        <img src={images.logoTransparent} alt="logo"  className="w-20"/>
        <p className="font-semibold font-playfair">Cloud Afrique</p>
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold font-playfair mb-4">Quick links</h3>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Donate</a>
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold font-playfair mb-4">Get in touch</h3>
        <a href="#">Home</a>
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold font-playfair mb-4">Address</h3>
        <a href="#">Home</a>
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold font-playfair mb-4">Quick links</h3>
        <a href="#">Home</a>
      </div>
    </div>
  )
}

export default Footer
