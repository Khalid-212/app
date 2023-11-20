// Courses.tsx
import HeaderComponent from "@/Components/HeaderComponent";
import Footer from "@/Components/Footer";
import React from "react";

const Courses: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <section className="w-10/12 m-auto mt-20">
        <div className="font-bold text-4xl">Courses</div>
        <p className="mt-4">
          Choose from our selection of courses to enhance your skills.
        </p>
      </section>
      <section className="courseCards flex justify-between w-10/12 m-auto mt-10">
        <div className="Coursecard w-5/12">
          <div className="course-card mb-6 p-6 border rounded-md">
            <div className="font-bold text-2xl mb-2">Beginner Course</div>
            <p>
              Whether you are just starting or looking to reinforce your
              fundamentals, our Beginner Course is designed for you.
            </p>
            <button className="btn mt-4 bg-black text-white font-bold p-3 w-full">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="w-5/12">
          <div className="course-card mb-6 p-6 border rounded-md">
            <div className="font-bold text-2xl mb-2">Advanced Course</div>
            <p>
              Ready to take your skills to the next level? Our Advanced Course
              is tailored for those seeking a more in-depth understanding.
            </p>
            <button className="btn mt-4 bg-black text-white font-bold p-3 w-full">
              Enroll Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
