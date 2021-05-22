import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32  bg-gradient-to-t from-white  bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/HeroPC_1500x600_1._CB669048608_.jpg"
            alt=""
          />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/Feb2021/Primehero/1500x600_Herotator_CBCC._CB661550702_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/May21/Covid_Hero/Coid_Pantry_MH__1500x600._CB669212531_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/EssentialsStore/1x._CB668073731_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/1x_SMP_D_Cricket._CB670251750_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
