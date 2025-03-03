import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2  bg-red-400" />
          <div className="col-span-1 size-44 bg-red-400" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
