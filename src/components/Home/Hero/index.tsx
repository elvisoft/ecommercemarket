import {
  getHeroBanners,
  getHeroSliders
} from "@/sanity/sanity-shop-utils";
import Image from "next/image";
import HeroBannerItem from "./HeroBannerItem";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
const Hero = async () => {
  const data = await getHeroBanners();
  const sliders = await getHeroSliders();

  return (
  <h1>Cursos de programacion</h1>
  );
};

export default Hero;
