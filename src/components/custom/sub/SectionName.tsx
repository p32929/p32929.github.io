import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { combinedInformation } from "@/lib/DynamicValues";
import { IRoutedSection } from "@/lib/Models";
import { getValueAtIndex, scrollToView } from "@/lib/utils";

import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, Star } from "lucide-react";
import React from "react";

interface Props {
  name: string;
  index: number;
}

const SectionName: React.FC<Props> = (props) => {
  const onPrevClicked = () => {
    scrollToView(`section-${getPrevSectionName().toLowerCase()}`);
  }
  const onNextClicked = () => {
    scrollToView(`section-${getNextSectionName().toLowerCase()}`);
  }

  const getPrevSectionName = () => {
    const item = getValueAtIndex(combinedInformation.routes, (props.index - 1) % combinedInformation.routes.length) as IRoutedSection
    return item.name
  }

  const getNextSectionName = () => {
    const item = getValueAtIndex(combinedInformation.routes, (props.index + 1) % combinedInformation.routes.length) as IRoutedSection
    return item.name
  }

  return (
    <div className="flex flex-col bg-gray-900 mb-2 sticky top-0 z-10 ">
      <div className="flex flex-row items-center px-4 py-2 justify-between">
        <div className="flex flex-row items-center">
          <Star className="mr-2 h-4 w-4" />
          <h1 className="text-lg uppercase font-extrabold tracking-wider">
            {props.name}
          </h1>
        </div>

        <div className="flex flex-row items-center">
          <Button variant="ghost" size="icon" onClick={onPrevClicked} title={`Goto ${getPrevSectionName()} Section`}>
            <ChevronUpIcon className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={onNextClicked} title={`Goto ${getNextSectionName()} Section`}>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator className="w-full" />
    </div>
  );
};

export default SectionName;
