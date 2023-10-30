"use client";

import { useSelector } from "react-redux";
import ListItem from "@/components/UI/List-Item/ListItem";

function FilesList() {
  const files = useSelector((state) => state.files);

  return (
    <ul className="flex flex-col gap-4">
      {files.map((file) => (
        <li key={file.id}>
          <ListItem
            listType="files"
            itemContent={file}
            canAddComment={true}
            canDownload={true}
          />
        </li>
      ))}
    </ul>
  );
}

export default FilesList;
