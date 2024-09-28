"use client";

import useFetchCategories from "../hooks/UseFetchCategories";

const Categor = () => {
  const { data, isLoading, error } = useFetchCategories();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  return data.message.map((item: any) => {
    return <div key={item.id}>{item.category}</div>;
  });
};

export default Categor;
