function Category() {
  return (
    <div className=" mt-32 flex justify-center flex-col items-center pb-20">
      <h1 className="text-black mb-14 font-medium text-5xl text-center">
        Popular Catagories
      </h1>
      <div className=" flex items-center gap-10 flex-wrap">
        <div className="bg-primary space-y-2 w-[220px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] aspect-square flex flex-col items-center rounded-4xl justify-center ">
          <div className="bg-cg w-[8rem] rounded-full aspect-square flex justify-center items-center">
            <img src="\main-dish.png" alt="" />
          </div>
          <h2 className="font-medium text-xl">Main Dish</h2>
          <p className="text-2tx">(86 dishes)</p>
        </div>
        <div className="bg-primary space-y-2 w-[220px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] aspect-square flex flex-col items-center rounded-4xl justify-center ">
          <div className="bg-cg w-[8rem] p-3 rounded-full aspect-square flex justify-center items-center">
            <img src="\breakfast.png" alt="" />
          </div>
          <h2 className="font-medium text-xl">Break Fast</h2>
          <p className="text-2tx">(12 break fast)</p>
        </div>
        <div className="bg-primary space-y-2 w-[220px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] aspect-square flex flex-col items-center rounded-4xl justify-center ">
          <div className="bg-cg w-[8rem] rounded-full aspect-square flex justify-center items-center">
            <img src="\dessert.png" alt="" />
          </div>
          <h2 className="font-medium text-xl">Dessert</h2>
          <p className="text-2tx">(48 dessert)</p>
        </div>
        <div className="bg-primary space-y-2 w-[220px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] aspect-square flex flex-col items-center rounded-4xl justify-center ">
          <div className="bg-cg w-[8rem] rounded-full aspect-square flex justify-center items-center">
            <img src="\all.png" alt="" />
          </div>
          <h2 className="font-medium text-xl">Browse All</h2>
          <p className="text-2tx">(255 Items)</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
