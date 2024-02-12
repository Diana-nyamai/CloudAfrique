import { Partners } from "../../components";
import { images } from "../../constants";
import { Progress } from 'antd';

const Donate = () => {
  return (
    <div>
      <div className="relative bg-blue h-full flex flex-col lg:flex-row justify-center items-center lg:px-32 pb-32">
        <div className="text-white px-5 xl:w-1/2 mt-10"> 
          <h1 className="text-orange text-2xl lg:text-6xl capitalize mb-4 font-playfair text-center animate__animated animate__bounce">
            Donate
          </h1>
          <p className="font-montserrat mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            dolorum laudantium nesciunt exercitationem modi. In sit saepe eius,
            mollitia hic voluptatem eligendi ipsam recusandae
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <img src={images.donateimg} alt="donate" />
      </div>

      
      <div className="w-3/4 mx-auto flex flex-col">
        <p className="text-blue mb-5 font-montserrat font-semibold">Donations</p>
        <Progress percent={75} status="active" strokeColor={"#E26434"} />
      </div>
      
      {/* lipa na mpesa */}
      <div className="flex flex-wrap my-24 lg:px-52">
        <div className="lg:w-1/2 mx-5 lg:mx-0">
          <h2 className="font-semibold text-3xl font-playfair mb-4">Your Support is Really Powerful.</h2>
          <p className="font-montserrat lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere sequi nisi necessitatibus ex sunt dolore aspernatur quaerat qui reiciendis asperiores illum esse dolorum mollitia, magnam adipisci atque ad vero.
Similique saepe vel ea. Omnis assumenda quas doloremque at. Quasi facere earum itaque eius veritatis ducimus quisquam minima reiciendis totam consequatur fuga exercitationem laborum ipsum commodi, aperiam nobis modi nisi!
Aut earum accusantium impedit mollitia. Vero, numquam? Deserunt ipsa doloribus dicta earum alias explicabo voluptates tempore molestias sunt, dolorum commodi iure, vel nihil. Beatae error praesentium veritatis natus. Voluptate, cumque?
Nobis harum illo, laboriosam ipsa ex suscipit odio praesentium reprehenderit qui, nesciunt, repudiandae iure quis totam corrupti dolor commodi quam nostrum! Distinctio iusto voluptatem ut perspiciatis reprehenderit officia magni quis.</p>
        </div>

        <div className="lg:w-1/2 bg-lightBlue flex flex-col justify-center items-center mx-5 lg:mx-0 p-6 rounded-md mt-10 lg:mt-0">
            <img src={images.paybill} alt="paybill"/>
            <p className="mt-5 font-semibold text-blue">Donate via payBill</p>
        </div>
      </div>

      <Partners/>
    </div>
  );
};

export default Donate;