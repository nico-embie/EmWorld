import Card from "components/Card";
import Title from "components/Title";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FlagIcon, GlobeIcon, SearchIcon, TranslateIcon, UserGroupIcon } from "@heroicons/react/outline";
import _ from "lodash";
import AnimatedNumber from "animated-number-react";

function Home({ countries }) {
  const [country, setCountry] = useState();
  const [numberPeople, setNumberPeople] = useState(0);

  const handleCountriesChanges = (e) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    const populations = countries.map((country) => country.population);
    const reducer = (accumulator, curr) => accumulator + curr;
    const worldPopulations = populations.reduce(reducer, 0);
    setNumberPeople(worldPopulations);
  });

  const numberPeopleWithSpaces = (numberPeople) => {
    return numberPeople.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const getLanguages = () => {
    const arr = [];
    countries.forEach((country) => {
      const languages = country.languages;
      languages.forEach((language) => {
        const iso = language.iso639_2;
        if (!arr.includes(iso)) arr.push(iso);
      });
    });
    return arr;
  };

  const formatText = (string) => {
    return string
      .trim()
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const getFilteredCountries = (value) => {
    if (!value) return countries;

    const searchName = formatText(value);

    const filteredCountries = countries.filter((key) => formatText(key.name).includes(searchName));

    return filteredCountries;
  };

  const getCountriesPerRegions = () => {
    const result = {};
    countries.forEach((country) => {
      const region = country.region;
      if (result[region]) {
        result[region] += 1;
      } else if (region) {
        result[region] = 1;
      }
    });
    return result;
  };

  const CountriesByRegions = () => {
    const data = getCountriesPerRegions();

    return (
      <ul>
        {Object.keys(data).map((key, index) => (
          <li key={index} className="text-gray-600">{`${key} : ${data[key]}`}</li>
        ))}
      </ul>
    );
  };

  const ListOfCountries = () => {
    const listOfCountries = getFilteredCountries(country);
    const searchValue = country ? formatText(country) : "";

    return listOfCountries.map((country, index) => {
      let countryName = country.name;
      const countryFlag = country.flag;
      const formatedName = formatText(countryName);

      const startIndex = formatedName.indexOf(searchValue);
      const endIndex = startIndex + searchValue.length;

      const startName = countryName.slice(0, startIndex);
      const midName = countryName.slice(startIndex, endIndex);
      const endName = countryName.slice(endIndex, countryName.length);
      return (
        <div>
          <Link href={`/countries/${countryName}`}>
            <a key={index}>
              <div className="bg-white p-6 shadow-lg rounded-md flex items-center w-full h-full">
                <img src={countryFlag} className="h-9 w-14 pr-3" />
                <span className="bg-em whitespace-pre"> {startName}</span>
                <span className="bg-embie-yellow rounded-lg "> {midName} </span>
                <span className="bg-em whitespace-pre">{endName}</span>
              </div>
            </a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="lg:w-5xl xs:h-full xs:w-ful lg:mx-auto bg-embie-blue lg:h-full lg:min-h-screen lg:flex lg:flex-col lg:space-y-16">
      <Head>
        <title>Countries</title>
      </Head>
      <Title>Bienvenue 🎉</Title>
      <div className="text-2xl shadow-smooth grid grid-cols-2 w-1/2 gap-6 mt-md border-8 border-white rounded-md mx-auto bg-white p-10">
        <Card>
          <div className="rounded-full p-3 bg-red-100">
            <FlagIcon className="h-5 text-embie-red" />
          </div>
          <span className="text-gray-600">Countries : {countries.length}</span>
        </Card>
        <Card>
          <div className="rounded-full p-3 bg-blue-100">
            <TranslateIcon className="h-5 text-embie-lightblue" />
          </div>
          <span className="text-gray-600">{getLanguages().length} Languages</span>
        </Card>
        <Card>
          <div className="rounded-full p-3 bg-yellow-100">
            <GlobeIcon className="h-5 text-embie-yellow" />
          </div>
          <CountriesByRegions />
        </Card>
        <Card>
          <div className="rounded-full p-3 bg-purple-100">
            <UserGroupIcon className="h-5 text-embie-purple" />
          </div>
          <AnimatedNumber value={numberPeople} formatValue={(value) => numberPeopleWithSpaces(value.toFixed(0))} duration={4000} />
        </Card>
      </div>
      <a href="https://embie.be" className="mx-auto">
        <img src="/logo_neg.png" alt="Embie logo" className="max-w-xl" />
      </a>
      <div className="text-2xl shadow-smooth bg-embie-blue w-auto  mt-md  rounded-md mx-auto ">
        <div className="p-6 shadow-lg rounded-md flex items-center w-full space-x-6 h-full bg-embie-blue">
          <label htmlFor="" className="flex space-x-4 items-center rounded-full p-4 pl-5 bg-gray-100 ">
            <input
              onChange={(e) => handleCountriesChanges(e)}
              className="bg-white rounded-lg outline-none flex justify-center p-md shadow-lg"
              value={country}
              type="text"
            />
            <button className="bg-white rounded-full shadow-lg p-2 flex">
              <SearchIcon className="h-5 text-embie-blue inline-block" />
            </button>
          </label>
        </div>
      </div>
      <div className="text-2xl shadow-smooth grid grid-cols-2 w-1/2 gap-6 mt-md border-8   border-white rounded-md mx-auto bg-white p-10 mt-20 min-h-48 max-h-[50vh] overflow-scroll">
        <ListOfCountries />
      </div>
      <div className="w-full h-10 p-10"></div>
    </div>
  );
}

export const getStaticProps = async () => {
  // const countries = await fetch(`https://restcountries.eu/rest/v2/all/`).then((r) => r.json());
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

export default Home;
