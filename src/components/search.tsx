import { useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <form className="w-full">
        <div className="flex justify-between items-center">
          <input
            id="gameSearch"
            type="seach"
            placeholder="Search 889,797 games"
            value={searchText}
            onChange={updateText}
            className="w-full appearance-none bg-[#ffffff29] rounded-full p-2 pl-10 pr-10 
            bg-[url(src/assets/whiteMagnifying.png)] bg-no-repeat bg-position-[0.7em] 
            bg-center transition-colors duration-300 ease-in-out hover:bg-[#fff]
            hover:text-[#000]  hover:bg-[url(src/assets/blackMagnifying.png)] focus:outline-0
            focus:bg-[#fff] focus:text-[#000] focus:bg-[url(src/assets/blackMagnifying.png)] "
          />
          <div className="flex justify-between absolute right-10 text-[#ffffff80] font-mono">
            <span className="border-[#ffffff4d] border-1 pl-1 pr-1">alt</span>
            <span className="ml-2 mr-2">+</span>
            <span className="border-[#ffffff4d] border-1 pl-1 pr-1">enter</span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
