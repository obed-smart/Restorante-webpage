function Testimonial() {
  return (
    <div className="mt-48 px-8 grid grid-cols-[500px_1fr]  justify-center items-center">
      <div className="relative h-[400px] flex justify-center items-end">
        <div className=" rounded-tl-[8rem] rounded-bl-4xl rounded-br-4xl rounded-tr-[8rem] bg-tetiary w-full -bottom-20  h-60 ">
          <div className="relative  h-60 ">
            <span className="absolute rotate-45  -left-2 top-[40%]">🍕</span>
            <span className="absolute rotate-45 top-[50%] -right-2">😙</span>
            <div className="absolute -bottom-5 -right-10 z-30  shadow-[0px_5px_10px_rgba(0,0,0,0.3)] rounded-bl-full rounded-e-full">
              <p className=" text-tx-food relative bg-primary text-xl py-2 px-4 rounded-bl-full rounded-e-full">
                Our Best Chef 😁{" "}
                <span className=" absolute bg-primary -rotate-5 -top-1  -left-[0.01rem] [transform:rotate(20deg)] shadow- w-7 h-2  "></span>
              </p>
            </div>
          </div>
        </div>
        <img
          src="\cheif.png"
          alt=""
          className=" w-[20rem] bottom-0 object-fit absolute  "
        />
      </div>
      <div className="w-[25rem] space-y-8 justify-self-end">
        <h1 className="text-tx-food text-[16px] font-semibold uppercase">
          Testimonials
        </h1>
        <h2 className="text-4xl font-medium leading-12">
          What Our Customers Say About Us
        </h2>
        <p className="text-[16px] text-tx">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <div className="flex justify-between items-center">
          <div className="flex [&>*]:w-12 [&>*]:h-12">
            <img src="\person1.png" alt="" />
            <img src="\person2.png" alt="" className="-ml-3" />
            <img src="\person3.png" alt="" className="-ml-3" />
          </div>
          <div className="">
            <p className="text-[18px] font-medium">Customer Feedback</p>
            <p className="flex items-center space-x-2">
              <span>
                {" "}
                <img src="star-rate.png" alt="" />
              </span>
              <span>4.9</span>
              <span className="text-2tx">(18.6k Reviews)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
