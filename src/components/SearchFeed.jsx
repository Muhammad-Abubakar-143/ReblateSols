import React, { useState } from "react";
import ContentMenu from "./ContentMenu";
import { data } from "../constants/data";

const SearchFeed = () => {
  const [content, setContent] = useState(data);

  const FilterType = (category) => {
    if (category === "all") {
      setContent(data);
    } else {
      const filtered = data.filter((item) => {
        return item.category === category;
      });
      setContent(filtered);
    }
  };

  return (
    <>
      <div className="px-4 text-center mx-auto">
        <div className="mb-8 text-center pt-3">
          <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
            Portfolio
          </h1>
          <p className="font-regular text-center text-gray-500 text-md sm:text-xl font-normal mb-4">
            Filter Projects by category 
          </p>
        </div>

        {/* SearchBar */}
        <div className="flex sm:lg:mx-[130px] border-b border-gray-200 pb-3 gap-2">
          {/* Options */}
          <select
            id="projects"
            className="font-medium px-6 py-2 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-indigo-50 text-black"
            onChange={(e) => FilterType(e.target.value)}
          >
            <option className="text-sm sm:text-md" value="all">
              All Projects
            </option>
            <option className="sm:text-md" value="web">
              Web Development
            </option>
            <option className="sm:text-md" value="mobile">
              Mobile App Development
            </option>
            <option className="sm:text-md" value="ecom">
              Ecommerce
            </option>
            <option className="sm:text-md" value="ui">
              UI/UX Design
            </option>
          </select>
        </div>
        <ContentMenu content={content} />
      </div>
    </>
  );
};

export default SearchFeed;
