export const AssetScal = () => {
  return (
    <div className="grid grid-cols-5 p-5 bg-secondaryDark items-center rounded-x my-2 rounded-xl">
      <div className="col-start-1 col-span-1 grid grid-cols-2 rounded-lg ">
        <div className="w-full flex items-center space-x-4">
          <div className="rounded-full w-8 h-8 bg-primaryDark"></div>
          <div>
            <p className="bg-primaryDark  p-4 animate-pulse rounded-lg"></p>
            {/* <p className="text-xs text-text-faded">PRONTLINE.com</p> */}
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-1   text-text-faded flex justify-center animate-pulse">
        <p className="bg-primaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
      <div className="col-start-3 col-span-1 flex justify-center  ">
        <p className="bg-primaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
      <div className="col-start-4 col-span-1  flex justify-center ">
        <p className="bg-primaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
      <div className="col-start-5 col-span-1 flex justify-center  ">
        <p className="bg-primaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
    </div>
  );
};
