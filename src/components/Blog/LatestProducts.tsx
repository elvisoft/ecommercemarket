import React from "react";
import Image from "next/image";
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import Link from "next/link";
import { getAllProducts } from "@/sanity/sanity-shop-utils";
import { Product } from "@/types/product";

const LatestProducts = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Latest Products</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- product item --> */}
          {products.length > 0 &&
            products.slice(0, 3).map((product, key) => (
              <div className="flex items-center gap-6" key={key}>
                <div className="flex items-center justify-center rounded-[10px] bg-gray-3 max-w-[90px] w-full h-22.5">
                  <Image
                    src={
                      product?.thumbnails
                        ? imageBuilder(product.thumbnails?.[0].image).url()!
                        : "/images/noencontro.png"
                    }
                    alt="product"
                    width={74}
                    height={74}
                  />
                </div>

                <div>
                  <h3 className="font-medium text-dark mb-1 ease-out duration-200 hover:text-blue">
                    <Link href={`/products/${product?.slug?.current}`}> {product?.name} </Link>
                  </h3>
                  <p className="text-custom-sm">
                    Price: ${product.discountedPrice}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
