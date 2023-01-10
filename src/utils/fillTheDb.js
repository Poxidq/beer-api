import Beer from "../models/Beer";
import db from "../db";

const SIZE = process.env.BEER_COUNT;

const fetchSampleData = async () => {
  const url = `https://random-data-api.com/api/v2/beers?size=${SIZE}`;
  const response = await fetch(url);
  const json = await response.json();
  console.log("Fetchin...");
  return json || [];
};

const createSampleBeers = async () => {
  try {
    const data = await fetchSampleData();
    // console.log("Data from the random-data-api", data);
    let sql =
      "CREATE TABLE IF NOT EXISTS beers(id INT auto_increment, brand VARCHAR(255), alcohol VARCHAR(50), name VARCHAR(255), style VARCHAR(255), yeast VARCHAR(255), primary key(id));";
    // console.log("My sql: ", sql);
    db.execute(sql);
    await Beer.saveMultiple(data);
    console.log("The beer was successfully poured into barrels");
  } catch (e) {
    console.log("Something bad happend with beer initialization\n", e);
  }
};

export default createSampleBeers;
