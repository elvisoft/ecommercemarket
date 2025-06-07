import React from "react";

const Results = (props: any) => {
  const { setSearchModalOpen, filterValue } = props;

  return (
    <div className="w-full px-4">
      {(filterValue === "all" || filterValue === "products") && (
        <>
          {filterValue === "all" && (
            <h2 className="mb-2 text-xl text-dark font-bold">Products</h2>
          )}
          
        </>
      )}

      {(filterValue === "all" || filterValue === "blogs") && (
        <>
          {filterValue === "all" && (
            <h2 className="mb-2 text-xl text-dark font-bold">Blogs</h2>
          )}
          
        </>
      )}
    </div>
  );
};

export default Results;
