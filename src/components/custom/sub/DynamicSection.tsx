import React from "react";

import SectionName from "./SectionName";
import TitledItems from "./TitledItems";
import { IRoutedSection } from "@/lib/Models";

interface Props {
  item: IRoutedSection;
  index: number;
}

const DynamicSection: React.FC<Props> = ({ index, item }) => {
  return (
    <div
      className="flex flex-col w-full"
      id={`section-${item.name.toLowerCase()}`}
    >
      <SectionName name={item.name} index={index} />
      <TitledItems items={item.items} />
    </div>
  );
};

export default DynamicSection;
