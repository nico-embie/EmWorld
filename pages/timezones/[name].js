import Title from "../../components/Title";
import Card from "../../components/Card";
import Link from "next/link";
import React from "react";
import { ArrowLeftIcon, GlobeIcon } from "@heroicons/react/outline";

const TimeZones = ({ countries, timezone }) => {
  const countriesTimezones = countries
    ? countries.filter((country) => {
        return country.timezones.map((tm) => tm.toLowerCase()).includes(timezone.toLowerCase());
      })
    : [];

  const ReturncountriesTimezones = () => {
    return (
      <ul>
        {countriesTimezones.map((country, index) => (
          <li key={index} className="text-gray-600 ">
            <Link href={`/countries/${country.name}`}>
              <a className="flex items-center p-5 ">
                <Card>
                  <img src={country.flag} className="h-6 w-12 pr-3 "></img>
                  {country.name}
                </Card>
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
        <Title>{timezone ? timezone.toUpperCase() : timezone}</Title>

        <div className="text-2xl shadow-smooth flex gap-6 mt-md border-8  border-white rounded-md mx-auto bg-white p-10 mt-20 min-h-48 ">
          <ReturncountriesTimezones />
        </div>
        <div className="w-full h-10 p-10"></div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  // const countries = await fetch("https://restcountries.eu/rest/v2/all").then((r) => r.json());
  const data = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await data.json();
  if (!countries) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      countries,
      timezone: params.name,
    },
  };
};

export const getStaticPaths = async () => {
  // const countries = await fetch("https://restcountries.eu/rest/v2/all").then((r) => r.json());
  const data = await fetch(`https://restcountries.eu/rest/v2/all/`);
  const countries = await data.json();

  const reducer = (accumulator, currentValue) => {
    currentValue.timezones.forEach((timezone) => {
      if (!accumulator.includes(timezone)) accumulator.push(timezone);
    });
    return accumulator;
  };
  return {
    paths: countries.reduce(reducer, []).map((timezone) => ({
      params: { name: timezone },
    })),
    fallback: true,
  };
};

export default TimeZones;
