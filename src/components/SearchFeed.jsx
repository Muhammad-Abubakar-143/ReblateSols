import { useState } from "react";
import ContentMenu from "./ContentMenu";
import { data } from "../constants/data";

const SearchFeed = () => {
  const [content, setContent] = useState(data);

  const FilterType = (mainTitle) => {
    if (mainTitle === "all") {
      setContent(data);
    } else {
      const filtered = data.filter((item) => {
        return item.mainTitle === mainTitle;
      });
      setContent(filtered);
    }
  };

  return (
    <>
        <div className="flex sm:lg:px-[130px] p-3 md:p-0 gap-2  justify-end relative">
          {/* Options */}
          <select
            id="projects"
            className="font-medium px-6 py-2 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-[#14213d]/10 text-black"
            onChange={(e) => FilterType(e.target.value)}
          >
            <option className="text-sm sm:text-md" value="all">
              All Projects
            </option>
            <option className="sm:text-md" value="Walmart">
              Walmart
            </option>
            {/* <option className="sm:text-md" value="Amazon">
              Amazon
            </option> */}
            <option className="sm:text-md" value="ECommerce">
              E-Commerce
            </option>
            <option className="sm:text-md" value="Web Development">
              Web Development
            </option>
            {/* <option className="sm:text-md" value="Digital Marketing">
              Digital Marketing
            </option> */}
            <option className="sm:text-md" value="Graphic Designing">
              Graphic Designing
            </option>
          </select>
        </div>
        <ContentMenu content={content}  />
    </>
  );
};

export default SearchFeed;
