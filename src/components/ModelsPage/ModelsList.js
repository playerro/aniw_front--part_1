"use client";

import { useSelector } from "react-redux";
import ListItem from "@/components/UI/List-Item/ListItem";

function ModelsList() {
  const { models } = useSelector((state) => state.models);

  return (
    <ul className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
      {models.map((model) => (
        <li key={model.id} className="flex-[100%] lg:flex-[40%]">
          <ListItem
            listType="models"
            itemContent={model}
            canAddComment={true}
          />
        </li>
      ))}
    </ul>
  );
}

export default ModelsList;
