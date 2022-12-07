export const AssetScal = () => {
  return (
    <div className="grid grid-cols-5 p-5 bg-secondaryDark items-center rounded-x my-2">
      <div className="col-start-1 col-span-1 grid grid-cols-2 ">
        <div className="w-full flex items-center space-x-4">
          <div className="rounded-full w-8 h-8 bg-gray-600"></div>
          <div>
            <p className="bg-gray-600 p-2"></p>
            {/* <p className="text-xs text-text-faded">PRONTLINE.com</p> */}
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-1   text-text-faded flex justify-center">
        <p className="bg-gray-600 p-2"></p>
      </div>
      <div className="col-start-3 col-span-1 flex justify-center  ">
        <p className="bg-gray-600 p-2"></p>
      </div>
      <div className="col-start-4 col-span-1  flex justify-center ">
        <p className="bg-gray-600 p-2"></p>
      </div>
      <div className="col-start-5 col-span-1 flex justify-center  ">
        <p className="bg-gray-600 p-2"></p>
      </div>
    </div>
  );
};
