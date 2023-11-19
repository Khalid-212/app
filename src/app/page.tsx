import BannerComponent from "@/Components/BannerComponent";
import HeaderComponent from "@/Components/HeaderComponent";
import Image from "next/image";
import badge from "../../public/assets/badge.png";
import art from "../../public/assets/arts.png";
import id from "../../public/assets/id.png";
import de from "../../public/assets/de.png";
import c8 from "../../public/assets/c8.jpg";
import CarouselComponent from "@/Components/CarouselComponent";
import PropertyCard from "@/Components/PropertyCard";
import TestimonialsCard from "@/Components/TestimonialsCard";
import Footer from "@/Components/Footer";
import blank from "../../public/assets/blank.png";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <div className="flex justify-between">
        <section className="sectionLeft ml-32 mt-32 pt-20">
          <div className="font-bold text-4xl">
            Discover the Beauty of
            <br />
            Epoxy Resin Art
          </div>
        </section>
        <section className="sectionRight w-6/12 p-20">
          <p>
            Our Epoxy resin art products are meticulously crafted to bring out
            the uniqueness and quality that will captivate your senses. Each
            piece is a work of art that tells a story and adds a touch of
            elegance to any space.
          </p>
          <br />
          <div className="properties flex w-5/6 justify-between">
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
          <br />
          <div className="buttons  flex gap-10">
            <button className="btn text-black font-bold border-black border-2 p-3 w-32">
              Order now
            </button>
            <button className="btn text-black font-bold p-3 w-35">
              Explore more &gt;
            </button>
          </div>
        </section>
      </div>
      <div className="slider w-3/12 h-1/5">
        <section>
          <CarouselComponent />
        </section>
        <br />
      </div>
      <div className="flex flex-col justify-center w-11/12 m-auto border-black">
        <section>
          <h1 className="text-4xl font-bold text-center m-auto w-7/12">
            Durable and long-lasting epoxy resin art{" "}
          </h1>
          <h1 className="text-4xl font-bold text-center m-auto w-7/12">
            pieces for your home
          </h1>
          <div className="properties flex m-20 justify-around  ">
            <div className="w-3/12">
              <PropertyCard
                lm={true}
                title={
                  "Vibrant and eyr catching colors that bring life to any space"
                }
                pic={de}
                text={
                  "customized your epoxy resin art to match your personal style"
                }
              />
            </div>
            <div className="w-3/12">
              <PropertyCard
                lm={true}
                title={"Unique and one of a kind Epoxy Resin Art pieces"}
                pic={de}
                text={
                  "Discover the beauty and versatility of our epoxy resin art collection"
                }
              />
            </div>
            <div className="w-3/12">
              <PropertyCard
                lm={true}
                title={
                  "Transform your space with our stunning Epoxy Resin Art pieces"
                }
                pic={id}
                text={
                  "Experience the beauty and craftsmanship of our epoxy resin art collection"
                }
              />
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <div className="flex justify-between">
          <section className="sectionLeft w-6/12 ml-32 mt-20">
            <div className="font-bold text-4xl">
              Discover the Beauty of
              <br />
              Epoxy Resin Art
            </div>
            <br />
            <p>
              Epoxy resin art is not only a visually captivating addition to
              your home but also offers a range of benefits that can enhance
              your intirior design and serve as a conversation piece for years.
              With its unique patterns and Vibrant colors, epoxy resin art adds
              a touch of elegance and sophestication to any space.
            </p>
            <div className="properties flex w-5/6 justify-between">
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
            <div className="buttons  flex gap-10">
              <button className="btn text-black font-bold border-black border-2 p-3 w-32">
                Order now
              </button>
              <button className="btn text-black font-bold p-3 w-35">
                Explore more &gt;
              </button>
            </div>
          </section>
          <section className="sectionRight w-6/12 p-20">
            <Image src={c8} alt="" width={500} height={500} />
          </section>
        </div>
      </div>
      <div className="">
        <section className="sectionLeft w-10/12 ml-32 mt-20">
          <div className="font-bold text-4xl">Happy Customers</div>
          <br />
          <p>Read What our satisfied customers have to say</p>
          <br />
          <div className="cards flex w-11/12 ">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </div>
        </section>
      </div>
      <Footer />
      <div className="bg-black text-white m-auto text-center">
        Developed by <a className="text-blue-600" href="https://khalidibrahim.co/">Khalid Ibrahim</a>
      </div>
    </div>
  );
}
