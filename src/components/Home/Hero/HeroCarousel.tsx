"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { imageBuilder } from "@/sanity/sanity-shop-utils";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

const HeroCarousal = ({ sliders }: any) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {sliders?.map((slider: any, key: number) => (
        <SwiperSlide key={key}>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                  {slider?.discount}
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <Link href={`/products/${slider?.product?.slug.current}`}>
                  {slider?.product?.name}
                </Link>
              </h1>

              <p>{slider?.product?.shortDescription.slice(0, 100)}</p>

              <Link
                href={`/products/${slider?.product?.slug.current}`}
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
              >
                Shop Now
              </Link>
            </div>

            <div>
              <Image
                src={
                  slider?.image
                    ? imageBuilder(slider?.image).url()!
                    : "/images/noencontro.png"
                }
                alt="headphone"
                width={351}
                height={358}
                loading="eager"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
