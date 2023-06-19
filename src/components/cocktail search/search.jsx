import styles from "./search.module.css";
// import { useState } from "react";

export const Search = () => {
  // const [inputText, setInputText] = useState("");

  // const inputHandler = (e) => {
  //   console.log(e.target.value);
  //   setInputText(e.target.value);
  //   console.log(inputText);
  // };
  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   setInputText([text: inputText]);
  // };

  return (
    <div className={styles.container}>
      <h1>Search cocktails</h1>
      <div className={styles.container__form}>
        <h3>Select Catagory</h3>
        <form className={styles.form}>
          <select required name="cocktail_search_method" id="csm">
            <option value="">Select catagory</option>
            <option value="ordinary-drinks">Ordinary Drinks</option>
            <option value="cocktails">Cocktails</option>
          </select>
        </form>
        <h3>Select Drink</h3>
        <form className={styles.form}>
          <select required name="cocktail_search_method" id="csm">
            <option value="">Select catagory</option>
            <option value="pina-colada">Pina Colada</option>
            <option value="esspresso-martini">Esspresso Martini</option>
          </select>
        </form>
        {/* <input type="text" name="search-box" onChange={null} /> */}
        {/* <button onClick={null}>Search</button> */}
      </div>
    </div>
  );
};
export default Search;
