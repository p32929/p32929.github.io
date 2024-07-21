import { ITitledListItem } from "@/lib/Models";

import { Asterisk } from "lucide-react";
import React from "react";

import ListItem from "./ListItem";

interface Props {
  items: ITitledListItem[];
}

const TitledItems: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col pb-4 w-full">
      {props.items.map((hitem) => {
        const getArr = () => {
          // .sort((a, b) => a.title.localeCompare(b.title))
          if (hitem.shouldNotSort) {
            return hitem.arr
          }
          else {
            return hitem.arr.sort((a, b) => a.title.localeCompare(b.title))
          }
        }

        return (
          <div className="flex flex-col">
            <div className="flex flex-row items-center px-4 py-3">
              <Asterisk className="mr-2 h-4 w-4" />

              <h1 className="text-sm font-bold tracking-wider">{hitem.text}</h1>
            </div>

            <div className="flex flex-row flex-wrap pl-2 pr-2 w-full">
              {getArr().map((item) => {
                return <ListItem item={item} title={hitem.text} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TitledItems;
