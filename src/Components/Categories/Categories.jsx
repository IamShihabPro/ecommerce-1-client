import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [categories]);

  return (
    <Container>
        <div className='pt-4 mt-2 flex flex-row md:flex-col lg:flex-col xl:flex-col items-center justify-evenly overflow-x-auto'>
            {
                categories.map(item =>(
                    <CategoryBox key={item.id} item={item}></CategoryBox>
                ))
            }
        </div>
       
    </Container>
);
};

export default Categories;
