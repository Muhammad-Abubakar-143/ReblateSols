import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../services'
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-12 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-black">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category.slug}`}>
          <span className={`cursor-pointer text-gray-500 block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories