import Title from "../../components/Title";
import Card from "../../components/Card";
import Link from "next/link";
import React from "react";
import {
  ArrowLeftIcon,
  ClockIcon,
  CurrencyDollarIcon,
  FlagIcon,
  GlobeIcon,
  MapIcon,
  PhoneIcon,
  TranslateIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Countries = ({ countries, countryName }) => {
  const country = countries ? countries.filter((cnt) => cnt.name.toLowerCase() === countryName.toLowerCase())[0] : [];

  const numberPeopleWithSpaces = (numberPeople) => {
    return numberPeople ? numberPeople.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : numberPeople;
  };

  const ReturnNativeName = () => {
    const nativeNames = country.languages;
    return (
      <ul>
        {nativeNames
          ? nativeNames.map((value, index) => (
              <Link href={`/languages/${value.name}`}>
                <a>
                  <li key={index} className="text-gray-600">
                    {value.name}
                  </li>
                </a>
              </Link>
            ))
          : "error"}
      </ul>
    );
  };

  const ReturnCurrencies = () => {
    const currencies = country.currencies;
    return (
      <ul>
        {currencies
          ? currencies.map((currency, index) => (
              <li key={index} className="text-gray-600">
                <Link href={`/currencies/${currency.name ? currency.name.toLowerCase() : currency.name}`}>
                  <a className="flex items-center p-5 ">
                    <ul>
                      <li className="">Name : {`${currency.name || ""}`}</li>
                      <li className="">Symbol : {`${currency.symbol || ""}`}</li>
                      <li className="">Code : {`${currency.code || ""}`}</li>
                    </ul>
                  </a>
                </Link>
              </li>
            ))
          : "error"}
      </ul>
    );
  };

  const getCountriesBorders = () => {
    const borders = country.borders;
    const borderCountries = countries
      ? countries.filter((cnt) => {
          const alphaCode3 = cnt.alpha3Code;
          return borders.includes(alphaCode3);
        })
      : [];
    return borderCountries;
  };

  const ReturnBordes = () => {
    const borderCountries = getCountriesBorders();

    return !borderCountries.length ? (
      <div className="hidden"></div>
    ) : (
      <Card>
        <div className="rounded-full p-3 bg-green-100">
          <MapIcon className="h-5 text-green-700" />
        </div>
        <ul>
          {borderCountries
            ? borderCountries.map((cnt, index) => (
                <li key={index} className="text-gray-600 ">
                  <Link href={`/countries/${cnt.name}`}>
                    <a className="flex items-center">
                      <img src={cnt.flag} className="h-6 w-12 pr-3 "></img>
                      {cnt.name}
                    </a>
                  </Link>
                </li>
              ))
            : "error"}
        </ul>
      </Card>
    );
  };

  const Check = ({ data }) => {
    if (data === "") return <div className="hidden"></div>;
    if (data === country.capital)
      return (
        <Card>
          <div className="rounded-full p-3 bg-red-100">
            <FlagIcon className="h-5 text-embie-red" />
          </div>
          <span className="text-gray-600">{data}</span>
        </Card>
      );
    if (data === country.demonym)
      return (
        <Card>
          <div className="rounded-full p-3 bg-blue-100">
            <UserIcon className="h-5 text-embie-lightblue" />
          </div>
          <span className="text-gray-600">{data}</span>
        </Card>
      );
    if (data === country.region)
      return (
        <Card>
          <div className="rounded-full p-3 bg-yellow-100">
            <GlobeIcon className="h-5 text-embie-yellow" />
          </div>
          <Link href={`/regions/${data}`}>
            <a>
              <span className="text-gray-600"> {data} </span>
            </a>
          </Link>
        </Card>
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
      {!country ? (
        <div className="">404</div>
      ) : (
        <div className="w-5xl mx-auto bg-embie-blue h-full min-h-screen flex flex-col space-y-16">
          <Title>
            <img src={country.flag} className="h-14 w-15 pr-3 item-center"></img>
            {country.name}
          </Title>
          <div className="text-2xl shadow-smooth grid grid-cols-2 w-1/2 gap-6 mt-md mx-auto  p-10">
            <Check data={country.capital} />
            <Card>
              <div className="rounded-full p-3 bg-purple-100">
                <UserGroupIcon className="h-5 text-embie-purple" />
              </div>
              <Link href={`/people/#${country.name}`}>
                <a href={`#${country.name}`}>
                  <span className="text-gray-600">{numberPeopleWithSpaces(country.population)} </span>
                </a>
              </Link>
            </Card>
            <Check data={country.region} />

            <Card>
              <div className="rounded-full p-3 bg-blue-100">
                <ClockIcon className="h-5 text-embie-lightblue" />
              </div>
              <span className="text-gray-600 overflow-hidden overflow-scroll-contain">
                <ul>
                  {country.timezones
                    ? country.timezones.map((timezone, index) => (
                        <li key={index} className="text-gray-600 ">
                          <Link href={`/timezones/${timezone}`}>
                            <a className="flex items-center">{timezone}</a>
                          </Link>
                        </li>
                      ))
                    : "error"}
                </ul>
              </span>{" "}
            </Card>
            <Check data={country.demonym} />
            <Card>
              <div className="rounded-full p-3 bg-red-100">
                <TranslateIcon className="h-5 text-embie-red" />
              </div>
              <span className="text-gray-600">
                <ReturnNativeName />
              </span>
            </Card>
            <Card>
              <div className="rounded-full p-3 bg-gray-100">
                <CurrencyDollarIcon className="h-5 text-gray-600" />
              </div>
              <span className="text-gray-600">
                <ReturnCurrencies />
              </span>
            </Card>

            <ReturnBordes />

            {!parseInt(country.callingCodes) ? (
              <div className="hidden"></div>
            ) : (
              <Card>
                <div className="rounded-full p-3 bg-green-100">
                  <PhoneIcon className="h-5 text-green-700" />
                </div>
                <span className="text-gray-600">+{country.callingCodes}</span>
              </Card>
            )}
          </div>
        </div>
      )}
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
      countryName: params.name,
    },
  };
};

export const getStaticPaths = async () => {
  // const countries = await fetch("https://restcountries.eu/rest/v2/all").then((r) => r.json());
  const data = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await data.json();

  return {
    paths: countries.map((country) => ({
      params: { name: country.name },
    })),
    fallback: true,
  };
};

export default Countries;
