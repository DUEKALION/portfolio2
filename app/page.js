"use client";

import React from "react";
import codingWithCoffie from "public/codingWithCoffie.json";
import Lottie from "lottie-react";
import MainLayout from "app/AppLayout/MainLayout";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Fade } from "react-reveal";
import ResumeBtn from "./components/ResumeBtn";
import Chips from "./components/Chips";
import { anchorAttrs, mySocials } from "./constants";
import Socials from "./components/Socials";

const Home = () => {
  const projects = [
    {
      img: "/images/e-form.png",
      title: "E-Forms",
      desc: "Sign and Fill Nigerian courts Affidavit",
      href: "https://eforms.vercel.app/",
      github: "https://github.com/geekwithmuskle/eform_app",
      tech: ["HTML", "React", "SCSS"],
    },
    {
      img: "/images/arsha.png",
      title: "Arsha",
      desc: "Bussiness marketing website to grow your Business ",
      href: "https://duekalion.github.io/",
      github: "",
      tech: ["HTML", "React", "Tailwindcss"],
    },
    {
      img: "/images/food-app.png",
      title: "Food App",
      desc: "Food deleivery website",
      href: "",
      github: "https://github.com/geekwithmuskle/foodapp",
      tech: ["Vite", "React", "Sass"],
    },
    {
      img: "",
      title: "Project management board",
      desc: "Project management web app",
      github: "https://github.com/DUEKALION/project-management-board",
      tech: ["HTML", "React", "Bootstrap"],
    },
    {
      img: "",
      title: "Todo App",
      desc: "Lightweight todo app to keep chck of progress.",
      href: "",
      github: "https://github.com/DUEKALION/do_tasks",
      tech: ["Vite", "React", "Styled Components", "date-fns"],
    },
  ];

  return (
    <MainLayout>
      <div className="p-2 sm:p-4">
        <section id="home">
          <div
            className="
          flex flex-col sm:flex-row items-center gap-16
          justify-between
          "
          >
            <div className="w-full max-w-lg break-words">
              <p className="text-lg text-green-primary">😊 Hi,</p>
              <Fade delay={0}>
                <div className="text-white-primary font-bold text-mdl s280:text-lg s412:text-xl">
                  <h1>I'm Oni-Olufemi Ayobami</h1>
                </div>
              </Fade>
              <Fade delay={0} bottom>
                <div className="text-white-light text-xs italic">
                  West Africa . Nigeria .{" "}
                  <span className="w-full max-w-80 break-words inline-block s360:inline">
                    {mySocials.email}
                  </span>
                </div>
              </Fade>
              <Fade delay={0} bottom>
                <div className="text-white-primary italic font-bold max-w-xl my-2">
                  Full-stack developer passionate about building seamless
                  digital experiences. I thrive on crafting scalable solutions,
                  bringing ideas to life through clean, efficient code that
                  powers user-friendly web applications.
                </div>
              </Fade>
            </div>
            <div className="block">
              {/* <Lottie
                animationData={codingWithCoffie}
                loop
                style={{ width: 400, height: 400 }}
              /> */}

              <Image
                width={150}
                height={150}
                alt=""
                src="/images/me1.jpg"
                className="rounded-full"
              />
            </div>
          </div>

          <ResumeBtn className="w-full mt-2 s200:hidden" />

          <div className="hidden flex-col justify-center items-center md:justify-normal md:flex-row gap-4 w-full mt-10">
            <Fade left>
              <div className="text-green-primary text-md font-bold mb-4 md:mb-0">
                Tech Stack <span className="hidden md:inline-block">|</span>{" "}
              </div>
            </Fade>
            <Fade left>
              <div className="flex flex-wrap justify-around items-center lg:ml-5 gap-4">
                {[
                  { img: "/images/html5Icon.png" },
                  { img: "/images/css3Icon.png" },
                  { img: "/images/sassIcon.png" },
                  { img: "/images/jsIcon.png" },
                  { img: "/images/reactIcon.png" },
                  { img: "/images/nodejsIcon.png" },
                ].map((t, i) => (
                  <Image
                    alt={"brand-icon"}
                    src={t.img}
                    key={i}
                    width={45}
                    height={45}
                  />
                ))}
              </div>
            </Fade>
          </div>
        </section>

        <section id="bio" className="mt-20">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:max-w-sm">
              <h4 className="text-green-primary text-lg font-bold">AutoBio</h4>
              <div className="text-white-light text-xs italic">Beign Me!</div>
              <div className="mt-5">
                <Fade bottom>
                  <p className="mb-5 text-white-primary">
                    I am Oni-Olufemi Ayobami Julius, I am a web developer that
                    resides in Akure Nigeria. I am passionate programmer, who
                    seeks and sees knowledge as a way of liberating people and
                    bring the best out of them. I see coding as a wayout for the
                    third world we are in. I will try my best to reach the
                    pinnacle of my coding career.
                  </p>
                </Fade>
                <div className="text-green-primary">
                  Beyond technical skills:
                </div>
                <Fade bottom>
                  <p className="text-white-primary">
                    As a developer, I believe there’s more to success than just
                    technical proficiency. I pride myself on being a proactive
                    collaborator who values communication and teamwork.
                    Problem-solving is at the heart of what I do, but I
                    recognize that great solutions often come from diverse
                    perspectives. I’m committed to continuous learning, not just
                    about the latest technologies, but also about how to work
                    effectively with others. Whether it's mentoring,
                    brainstorming ideas, or supporting a project’s vision, I
                    focus on delivering value while fostering a positive,
                    innovative work environment.
                  </p>
                </Fade>

                <div className="text-green-primary mt-5 hidden">
                  What i think of success:
                </div>
                <Fade bottom>
                  <p className="text-white-primary hidden">
                    I believe success is all about setting and working hard to
                    achieve goals. Holistically achieving success can be
                    overwhelming, leading to fear and self-doubt. Taking a
                    monolistic approach to success and celebrating small wins
                    makes the big picture easier to achieve. For me, success is
                    found in the small wins of my day-to-day activities.
                  </p>
                </Fade>
              </div>
            </div>

            <div>
              <h4 className="text-green-primary text-mdl font-bold mb-5">
                Soft skills
              </h4>
              <Fade bottom>
                <Chips
                  chips={[
                    "Adaptability",
                    "Collaboration",
                    "Time Management",
                    "Attention to Detail",
                    "Patience",
                    "Creativity",
                    "Communication",
                    "Problem Solving",
                    "Emotional Intelligence",
                  ]}
                />
              </Fade>
              <h4 className="mt-8 text-mdl font-bold text-green-primary mb-5">
                Coding skills
              </h4>
              <Fade bottom>
                <Chips
                  chips={[
                    "React",
                    "Redux",
                    "CSS",
                    "HTML",
                    "Javascript",
                    "Bootstrap",
                    "Tailwind",
                    "Agile Development",
                  ]}
                />
              </Fade>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <h4 className="text-mdl font-bold text-green-primary">My Work</h4>
          <div className="text-white-light text-xs italic">
            Simple UI . Sleek Interface
          </div>
          <Fade delay={0} duration={500} bottom>
            <div className="flex flex-wrap mt-4 gap-4 mx-auto">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col sm:w-col2 md:w-col3 rounded-sm border-solid border border-white-divider hover:scale-101 hover:rotate-1 transition-all"
                >
                  <div className="w-[300] h-[100]">
                    {p.img ? (
                      <Image
                        alt={`${p.title} image`}
                        src={p.img}
                        width={300}
                        height={100}
                        style={{
                          maxHeight: "140px",
                          minHeight: "auto",
                          minWidth: "100%",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          maxHeight: "140px",
                          minHeight: "140px",
                          minWidth: "100%",
                        }}
                        className="bg-dark-light w-full h-full"
                      />
                    )}
                  </div>
                  <div className="p-2 flex-1 flex flex-col">
                    <div>
                      <h4 className="text-md font-bold text-white-milk">
                        {p.title}
                      </h4>
                      <p className="my-3 text-white-primary">
                        {p.desc}

                        <span style={{ display: "none" }}>{p.moreDesc}</span>
                        {p.moreDesc > 74 ? (
                          <span
                            data-open={false}
                            className="underline cursor-pointer"
                            onClick={(e) => {
                              const n = e.currentTarget;
                              const open = n.dataset.open === "true";

                              n.textContent = open
                                ? " read more"
                                : " read less";
                              n.dataset.open = !open;
                              n.previousElementSibling.style.display = open
                                ? "none"
                                : "inline";
                            }}
                          >
                            {" "}
                            read more
                          </span>
                        ) : null}
                      </p>

                      <Chips mini className="mb-2" chips={p.tech} />
                    </div>
                    <div className="flex flex-wrap flex-1 justify-end items-end gap-4 text-white-primary">
                      {[
                        {
                          icon: FaExternalLinkAlt,
                          href: p.href,
                          nullify: !p.href,
                        },
                        {
                          icon: FiGithub,
                          href: p.github,
                          nullify: !p.github,
                        },
                      ].map((b, i) =>
                        b.nullify ? null : (
                          <a
                            key={i}
                            href={b.href}
                            className="w-8 h-8 flex items-center justify-center  rounded-full border-solid border-2 border-white-divider hover:border-white-light"
                            {...anchorAttrs}
                          >
                            <b.icon />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </section>

        <section id="contact" className="mt-20">
          <h4 className="text-mdl font-bold text-green-primary">Contact Me </h4>
          <div className="text-white-light text-xs italic">
            Love to hear from you!
          </div>

          <Socials
            className="mt-4"
            titles={[
              mySocials.email,
              "geekwithmuskle",
              "oniactkreatif",
              "Oni-Olufemi Ayobami",
            ]}
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
