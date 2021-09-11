import Title from "../../components/Title";
import Link from "next/link";

import React from "react";
import { ArrowLeftIcon, GlobeIcon } from "@heroicons/react/outline";

const People = ({ countries }) => {
  const numberPeopleWithSpaces = (numberPeople) => {
    return numberPeople.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const getWorldPopulation = () => {
    const worldPopulationRanking = countries.sort((mini, max) => {
      const miniPopulation = mini.population;
      const maxPopulation = max.population;
      return maxPopulation - miniPopulation;
    });
    return worldPopulationRanking;
  };

  const Ranking = () => {
    const worldPopulationRanking = getWorldPopulation();
    return (
      <ul>
        {worldPopulationRanking.map((value, index) => (
          <li key={index} className="text-gray-600 bg-gray-200 pl-3 mb-6 shadow-lg rounded-md   ">
            <Link href={`/countries/${value.name}`}>
              <a name={`${value.name}`} id={`${value.name}`} className="grid grid-cols-12 place-items-center max-w-4xl space-x-4">
                <span className=" col-span-1 place-content-center	 ">{index + 1}</span>

                <img src={value.flag} className="  inline-block m-3 h-17 w-16 pr-3 item-center"></img>
                <p className="text-center  inline-block col-span-4">{value.name}</p>

                <span className="col-span-4 place-self-end">{numberPeopleWithSpaces(value.population)}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="bg-embie-blue flex pl-20 pt-20">
        <Link href="/">
          <a>
            <GlobeIcon className="h-14 text-white inline-block mr-6" />
            <ArrowLeftIcon className="h-14 text-white inline-block" />
          </a>
        </Link>
      </div>
      <div className="w-5xl mx-auto bg-embie-blue h-full min-h-screen flex flex-col space-y-16">
        <Title>World population ranking</Title>

        <div className="text-2xl shadow-smooth flex gap-6 mt-md border-8  border-white rounded-md mx-auto bg-white p-10 mt-20 min-h-48 ">
          <Ranking />
        </div>
        <div className="w-full h-10 p-10"></div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  // const countries = await fetch("https://restcountries.eu/rest/v2/all").then((r) => r.json());
  const data = await fetch(`https://restcountries.eu/rest/v2/all/`);
  const countries = await data.json();

  if (!countries) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      countries,
    },
  };
};

export default People;
