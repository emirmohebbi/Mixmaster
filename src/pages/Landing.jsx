import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

export const loader = async () => {
  const searchTerm = "";
  if (searchTerm) {
    const newUrl = cocktailSearchUrl.replace("?s=a", "?s=");
    const response = await axios.get(`${newUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
  } else {
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
  }
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
