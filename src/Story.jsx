function Story() {
  const ourStrory = [
    {
      id: 1,
      name: "Catering",
      description: "Delight your guests with our flavors and  presentation",
      img : "\catering.svg"
    },
    {
      id: 2,
      name: "Fast delivery",
      description: "We deliver your order promptly to your door",
      img: "\delivery.svg"
    },
    {
      id: 3,
      name: "Online Ordering",
      description: "Explore menu & order with ease using our Online Ordering ",
      img: "\order.svg"
    },
    {
      id: 4,
      name: "Gift Cards",
      description: "Give the gift of exceptional dining with Foodi Gift Cards",
      img: "\gift-card.svg"
    },
  ];
  return (
    <div className="mt-40 flex justify-center gap-36 items-center">
      <div className="space-y-8 ">
        <h1 className="text-tx-food text-[16px] font-semibold uppercase">
          Our Story & Services
        </h1>
        <h2 className="text-4xl font-medium leading-12">
          Our Culinary Journey And Services
        </h2>
        <p className="text-[16px] text-tx">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <button className="bg-tetiary py-2 rounded-full text-primary text-xl px-4">
          Explore
        </button>
      </div>
      <div className="grid grid-cols-2 gap-7">
        {ourStrory.map((item) =>(
          <div key={item.id} className="flex flex-col p-5 justify-center rounded-2xl items-center text-center bg-primary shadow-[0px_0px_10px_rgba(0,0,0,0.1)] space-y-4">
            <img src={item.img} alt="" className="w-18"/>
            <h1 className="text-2ttx text-[18px] font-semibold">{item.name}</h1>
            <p className="text-[15px] text-ttx">{item.description}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
