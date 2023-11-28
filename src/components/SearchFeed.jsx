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
      

        {/* SearchBar */}
        <div className="flex sm:lg:px-[130px] pb-3 gap-2  justify-end relative z-40">
          {/* Options */}
          <select
            id="projects"
            className="font-medium px-6 py-2 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-[#14213d]/10 text-black"
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
   
    </>
  );
};

export default SearchFeed;
