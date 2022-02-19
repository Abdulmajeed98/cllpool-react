import React from "react";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import ProjectsPageCard from "../projects/ProjectsPageCard";
import data from "../../data.json";

const SingleProject = (props) => {
  const { projectId } = useParams();

  console.log(projectId);
  return (
    <div className="mt-nav-offset px-sides flex flex-col p-10">
      <div className="flex justify-between">
        <div className="flex-1">
          <h2 className="mb-8 text-center text-4xl capitalize text-slate-600">
            Project Name
          </h2>
          <p className="mb-8  text-xl text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            nostrum hic, earum perspiciatis incidunt voluptatibus. Suscipit quae
            molestiae nihil voluptatibus sapiente fuga ex esse, quos aut nostrum
            repellat voluptatum delectus reprehenderit officiis et impedit amet
            voluptate veritatis velit! Sequi ad similique nostrum quia
            dignissimos rem illo eum unde reiciendis deleniti ullam, ut sunt
            praesentium perferendis nam quibusdam quaerat dicta hic fugiat
            excepturi eligendi aliquid ipsa commodi! Temporibus harum laboriosam
            cupiditate sed velit libero repellendus reiciendis, officia hic
            minima iusto est!
          </p>
        </div>
        <div className="flex-2">
          <Splide className="px-20 ">
            <SplideSlide className="overflow-hidden rounded-xl">
              <img
                src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                alt="Image 1"
                className="h-96"
              />
            </SplideSlide>
            <SplideSlide className="overflow-hidden rounded-xl">
              <img
                src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                alt="Image 1"
                className="h-96"
              />
            </SplideSlide>
            <SplideSlide className="overflow-hidden rounded-xl">
              <img
                src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                alt="Image 1"
                className="h-96"
              />
            </SplideSlide>
            <SplideSlide className="overflow-hidden rounded-xl">
              <img
                src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                alt="Image 1"
                className="h-96"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="mb-10 text-center text-2xl font-normal capitalize text-slate-600">
          SeeMore
        </h2>
        <div className="flex  justify-between gap-3">
          {data.projectsData.slice(0, 6).map((element) => (
            <ProjectsPageCard
              key={element.id}
              projectId={element.id}
              projectName={element.name}
              projectImg={element.img}
              height="h-72"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
