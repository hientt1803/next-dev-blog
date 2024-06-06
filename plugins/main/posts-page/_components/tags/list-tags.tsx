import React from "react";
import ItemTag from "./item-tag";

const listTags = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Typescript" },
  { id: 3, name: "Java" },
  { id: 4, name: "UI/UX" },
  { id: 5, name: "Frontend" },
  { id: 6, name: "Backend" },
];

const ListTags = () => { 
  return (
    <div className="flex gap-2 justify-center items-center flex-wrap">
      {listTags.map((tag) => (
        <ItemTag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default ListTags;
