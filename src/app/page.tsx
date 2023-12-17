import BannerComponent from "@/Components/BannerComponent";
import HeaderComponent from "@/Components/HeaderComponent";
import Image from "next/image";
import CarouselComponent from "@/Components/CarouselComponent";
import PropertyCard from "@/Components/PropertyCard";
import TestimonialsCard from "@/Components/TestimonialsCard";
import Footer from "@/Components/Footer";
import blank from "../../public/assets/blank.png";
import de from "../../public/assets/de.png";
import id from "../../public/assets/id.png";
import c8 from "../../public/assets/c8.jpg";
import badge from "../../public/assets/badge.png";
import art from "../../public/assets/arts.png";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />

      <div className="md:flex justify-between">
        <section className="sectionLeft mx-4 mt-4 md:mt-32 md:w-1/2 md:ml-32">
          <div className="font-bold text-2xl md:text-4xl">
            Discover the Beauty of <br /> Epoxy Resin Art
          </div>
        </section>

        <section className="sectionRight mx-4 md:w-1/2 md:p-20">
          <p className="text-sm md:text-base">
            Our Epoxy resin art products are meticulously crafted to bring out
            the uniqueness and quality that will captivate your senses. Each
            piece is a work of art that tells a story and adds a touch of
            elegance to any space.
          </p>
          <div className="properties flex flex-col md:flex-row w-full md:w-5/6 justify-between mt-4">
              <PropertyCard
                lm={false}
                title={"Unmatched Quality"}
                pic={badge}
                text={
                  "Experience the beauty and craftsmanship of our epoxy resin art collection"
                }
              />
            <PropertyCard
              lm={false}
              title={"Exquisite Designs"}
              pic={art}
              text={
                "Experience the beauty and craftsmanship of our epoxy resin art collection"
              }
            />
          </div>
          <div className="buttons flex flex-col md:flex-row gap-2 md:gap-10 mt-4">
            <Link href="/contact">
              <button className="btn text-black font-bold border-black border-2 p-2 lg:w-40 md:p-3 w-full md:w-32">
                Order now
              </button>
            </Link>
            <Link href="/gallery">
              <button className="btn text-black font-bold p-2 md:p-3 w-full md:w-35 mt-2 md:mt-0">
                Explore more &gt;
              </button>
            </Link>
          </div>
        </section>
      </div>

      <div className="slider mx-4 mt-4 w-11/12 md:w-3/12 md:h-1/5">
        <CarouselComponent />
      </div>

      <div className="flex flex-col justify-center mx-4 mt-4 md:w-11/12 md:m-auto border-black">
        <h1 className="text-xl m-auto mt-10 md:text-4xl font-bold text-center md:w-7/12 mb-4">
          Durable and long-lasting epoxy resin art pieces for your home
        </h1>
        <div className="properties flex flex-col md:flex-row m-4 md:justify-around">
          <div className="w-full md:w-3/12">
            <PropertyCard
              lm={true}
              title={"Vibrant colors for any space"}
              pic={de}
              text={
                "Customize your epoxy resin art to match your personal style"
              }
            />
          </div>
          <div className="w-full md:w-3/12">
            <PropertyCard
              lm={true}
              title={"Unique and one of a kind pieces"}
              pic={de}
              text={
                "Discover the beauty and versatility of our epoxy resin art collection"
              }
            />
          </div>
          <div className="w-full md:w-3/12">
            <PropertyCard
              lm={true}
              title={"Transform your space"}
              pic={id}
              text={
                "Experience the beauty and craftsmanship of our epoxy resin art collection"
              }
            />
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 md:w-full md:flex justify-between">
        <section className="sectionLeft w-full md:w-6/12 md:ml-32">
          <div className="font-bold text-xl md:text-4xl">
            Discover the Beauty of <br /> Epoxy Resin Art
          </div>
          <p className="text-sm md:text-base">
            Epoxy resin art is not only a visually captivating addition to your
            home but also offers a range of benefits that can enhance your
            interior design and serve as a conversation piece for years. With
            its unique patterns and vibrant colors, epoxy resin art adds a touch
            of elegance and sophistication to any space.
          </p>
          <div className="properties flex flex-col md:flex-row w-full md:w-5/6 justify-between mt-4">
            <PropertyCard
              lm={false}
              title={"Unmatched Quality"}
              pic={blank}
              text={
                "Experience the beauty and craftsmanship of our epoxy resin art collection"
              }
            />
            <PropertyCard
              lm={false}
              title={"Exquisite Designs"}
              pic={blank}
              text={
                "Experience the beauty and craftsmanship of our epoxy resin art collection"
              }
            />
          </div>
          <div className="buttons flex flex-col md:flex-row gap-2 md:gap-10 mt-4">
            <Link href="/contact">
              <button className="btn text-black font-bold border-black border-2 p-2 lg:w-40 md:p-3 w-full md:w-32">
                Order now
              </button>
            </Link>
            <Link href="/gallery">
              <button className="btn text-black font-bold p-2 md:p-3 w-full md:w-35 mt-2 md:mt-0">
                Explore more &gt;
              </button>
            </Link>
          </div>
        </section>

        <section className="sectionRight w-full md:w-6/12 md:p-20">
          <Image src={c8} alt="" width={500} height={500} />
        </section>
      </div>

      <section className="mx-4 mt-4 md:w-10/12 md:ml-32">
        <div className="font-bold text-xl md:text-4xl">Happy Customers</div>
        <p>Read what our satisfied customers have to say</p>
        <div className="cards flex flex-col gap-4 md:flex-row md:justify-around md:w-11/12 md:m-auto">
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}
