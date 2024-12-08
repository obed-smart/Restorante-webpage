function Hero() {
  return (
    <div className="flex justify-between items-center ">
      <div className="max-w-[28rem]  space-y-8 ">
        <h1 className="text-5xl font-semibold leading-14">
          Dive into Delights Of Delectable{" "}
          <span className="text-tetiary">Food</span>{" "}
        </h1>
        <p className="text-xl text-tx">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex justify-start items-center space-x-6">
          <button className="bg-tetiary py-2 rounded-full text-primary text-xl px-4">
            Order Now
          </button>
          <button className="text-[17px] text-tx">Watch Video</button>
          <button className="bg-white p-3 rounded-full shadow-[0px_5px_10px_rgba(0,0,0,0.3)]">
            <img src="\Polygon 1.png" alt="" className="w-3 object-fit" />
          </button>
        </div>
      </div>
      <div className=" flex justify-center  items-end h-[500px] relative ">
        <div className="w-[27rem] bg-tetiary relative pb-32 rounded-full pr-5 h-[27rem] flex items-center">
          <img src="\food.png" alt="" className="scale-110" />
          <div className="absolute top-8 -left-33 shadow-[0px_5px_10px_rgba(0,0,0,0.3)] rounded-tr-full rounded-s-full">
            <p className=" text-tx-food relative bg-primary text-xl py-2 px-4 rounded-tr-full rounded-s-full">
              Hot spicy Food 🌶{" "}
              <span className=" absolute bg-transparent bottom-3 right-[6px] [transform:rotate(20deg)] shadow-[10px_10px_1px_#ffffff] w-7 h-2  "></span>
            </p>
          </div>
        </div>
        <div className="w-[32rem] -bottom-10 flex gap-5 justify-between  absolute">
          <div className="flex h-full w-full bg-primary space-x-6 p-2 grow shadow-[0px_5px_10px_rgba(0,0,0,0.3)] rounded-2xl  items-center">
            <img src="\noodle.png" alt="noodle image" className="w-18" />
            <div className="space-y-1">
              <p className="text-[16px] font-medium ">Spicy noodles</p>
              <p className="flex items-center space-x-1 [&>img]:w-3">
                <img src="\star-rate.png" alt="star icon" />
                <img src="\star-rate.png" alt="star icon" />
                <img src="\star-rate.png" alt="star icon" />
                <img src="\fi-br-star.png" alt="star icon" />
                <img src="\fi-br-star.png" alt="star icon" />
              </p>
              <p className="text-[18px] font-bold">
                <span className="text-tx-food font-bold">$</span>18.00
              </p>
            </div>
          </div>
          <div className="flex h-full w-full grow bg-primary shadow-[0px_5px_10px_rgba(0,0,0,0.3)] space-x-6 p-2 rounded-2xl items-center">
            <img src="\salad.png" alt="noodle image" className="w-18" />
            <div className="space-y-1">
              <p className="text-[16px] font-medium">Vegetarian salad</p>
              <p className="flex items-center space-x-1 [&>img]:w-3">
                <img src="\star-rate.png" alt="star icon" />
                <img src="\star-rate.png" alt="star icon" />
                <img src="\star-rate.png" alt="star icon" />
                <img src="\star-rate.png" alt="star icon" />
                <img src="\fi-br-star.png" alt="star icon" />
              </p>
              <p className="text-[18px] font-bold">
                <span className="text-tx-food font-bold">$</span>23.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
