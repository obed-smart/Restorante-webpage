function Dishes() {
  const dishes = [
    {
      id : 1,
      name: "Fattoush salad",
      description: "Description of the item",
      price: 24.0,
      img: "Fattoush salad.png",
      rate: "4.9",
      star: "star-rate.png",
    },
    {
      id: 2,
      name: "Vegetable salad",
      description: "Description of the item",
      price: 26.0,
      img: "\Vegetable salad.png",
      rate: "4.6",
      star: "star-rate.png",
    },
    {
      id: 3,
      name: "Egg vegi salad",
      description: "Description of the item",
      price: 24.0,
      img: "\Egg salad.png",
      rate: "4.5",
      star: "star-rate.png",
    },
  ];

  return (
    <div className=""> 
      <div className="flex  justify-between items-center ">
        <div className="w-[20rem] space-y-2">
          <p className="text-tx-food text-[16px] font-semibold uppercase">
            Special Dishes
          </p>
          <h1 className="text-4xl font-medium leading-12">
            Standout Dishes From Our Menu
          </h1>
        </div>
        <div className="flex self-end items-center  gap-7">
          <button className="bg-dish  flex justify-center items-center w-14 aspect-square rounded-full">
            <img src="\dark.png" alt="" />
          </button>
          <button className="bg-tetiary flex justify-center items-center  w-14 aspect-square rounded-full">
            <img src="\white.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden mt-20 items-center">
        {dishes.map((item) => (
          <div key={item.id} className="relative bg-primary w-[340px] cursor-pointer rounded-4xl p-5 space-y-2 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
            <img
              src={item.img}
              alt={item.name}
              className="w-[15rem] object-fit justify-self-center"
            />
            <div>
              <h1 className="text-[22px] font-medium">{item.name}</h1>
              <p className="text-[17px] text-2tx">{item.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[18px] font-bold">
                <span className="text-tx-food font-bold">$</span>
                {item.price}
              </p>
              <button className="bg-tetiary py-1 text-xl cursor-pointer text-primary font-medium px-4 rounded-3xl">
                Add to cart
              </button>
              <div className="flex items-center justify-between space-x-2">
                <img src={item.star} alt="star" className="w-3" />

                <span className="font-medium">{item.rate}</span>
              </div>
            </div>
            <div className="w-10  flex justify-center rounded-l-3xl rounded-t-3xl rotate-45 items-center top-1 bg-tetiary right-1 h-10  absolute">
              <img src="\fi-sr-heart.png" alt="" className="w-4 -rotate-45"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
