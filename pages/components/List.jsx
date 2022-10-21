import React from "react";
import { items } from "../components/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, category, theme }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src='images/data.jpg' alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <section className="w-full flex justify-center">
        <div className="w-[80%] gap-5 ml-14">
          <div className="grid grid-cols-3 gap-5">
            <ProjectCard />
            <ProjectCard2 />
            <ProjectCard2 />
            <ProjectCard2 />
            <ProjectCard2 />
            <ProjectCard2 />
          </div>

          <div className="mt-28">f</div>
        </div>
      </section>
  );
}
