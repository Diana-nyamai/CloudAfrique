import { Partners } from "../../components"

const Contact = () => {
  return (
    <div>
      <div className="relative bg-blue h-full flex flex-col lg:flex-row justify-center items-center lg:px-32 pb-32">
        <div className="text-white px-5 xl:w-1/2 mt-10">
          <h1 className="text-orange text-2xl lg:text-6xl capitalize mb-4 font-playfair text-center animate__animated animate__fadeInDown">
            Contact Us
          </h1>
          <p className="font-montserrat mb-4 text-center  animate__animated animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            dolorum laudantium nesciunt exercitationem modi. In sit saepe eius,
            mollitia hic voluptatem eligendi ipsam recusandae
          </p>
        </div>
      </div>

      {/* form */}
      <div className="flex flex-wrap lg:flex-nowrap px-3 lg:px-32 my-36 gap-4">
        <div className="w-full">
          <h3 className="font-semibold font-montserrat">Get in Touch</h3>
          <h1 className=" font-playfair text-3xl my-5 font-semibold">
            Send us a message
          </h1>
          <form className="flex flex-col w-full gap-4 justify-between">
            <div className="flex gap-5 w-full">
              <label className="relative block overflow-hidden bg-lightOrange rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 lg:w-96 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  First name
                </span>
              </label>
              <label className="relative block overflow-hidden bg-lightOrange rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 w-96  border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Last Name
                </span>
              </label>
            </div>

            <div className="flex gap-5">
              <label className="relative block overflow-hidden bg-lightOrange rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 w-96  border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>

              <label className="relative block overflow-hidden bg-lightOrange rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 w-96 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Phone number
                </span>
              </label>
            </div>

            <textarea
              id="OrderNotes"
              className="mt-2 p-2 w-full h-32 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm bg-lightOrange"
              placeholder="Enter your message..."
            ></textarea>

            <button className="bg-blue text-white h-11">Send message</button>
          </form>
        </div>

        <div className="bg-lightOrange p-5">
          <h1 className="text-semibold font-playfair font-semibold text-3xl mb-5">
            Address
          </h1>
          <p className="mb-5">
            Quam elementum pulvinar etiam non quam lacus suspendisse.A
            scelerisque purus semper eget duis at Lobortisscelerisque fermentum
            dui faucibus in ornare....
          </p>
          <p className="mb-3">
            <b>Location</b>: Nairobi, Kenya
          </p>
          <p className="mb-3">
            <b>Phone</b> : +2547123456
          </p>
          <p>
            <b>Email </b>: cloudAfrique@gmail.com
          </p>
        </div>
      </div>

      {/* partners */}
      <Partners />
    </div>
  );
}

export default Contact
