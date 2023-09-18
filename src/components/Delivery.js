//install app (div)
import React from "react";

const Delivery = () => {
  return (

    <>
    <style>
  {`
  .gghhh{    
       padding: 30px;    
       border-radius: 38px; 

  }
  `}
</style>
   
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="mx-auto grid md:grid-cols-2">
       {/* <div style={{width: "50%"}}> */}
       <div className="flex flex-col justify-center ">


        <img
          className="mx-auto my-4"
          src=" https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp "
        ></img>
        </div>
        {/* </div>  */}
        {/* <div style={{width: "50%"}}> */}

        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold ">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2  ">
            Limitless Convenience on-demand
          </h1>
          <p className="gghhh"> 
            "Get ready to indulge in the world of delectable flavors with our
            food delivery app. Installing it is a breeze – just visit your app
            store, download the app, and sign up in a matter of seconds. Once
            you're in, explore a diverse range of cuisines, browse local
            restaurants' menus, and place your order effortlessly. Whether
            you're craving comfort food or something exotic, our app brings the
            culinary delights right to your doorstep, ensuring a seamless and
            delightful dining experience from start to finish."
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.yumeats.customer&hl=en-IN",
                "_blank"
              );
            }}    
          >
            Get App
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
    </>
  );
};
export default Delivery;


{/* <style> */}


