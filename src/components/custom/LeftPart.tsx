import React from "react";

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { combinedInformation } from "@/lib/DynamicValues";
import { PersonStanding } from "lucide-react";
import { scrollToView } from "@/lib/utils";

interface Props { }

const LeftPart: React.FC<Props> = (props) => {


  return (
    <Card className="lg:w-1/3 xl:w-1/3 2xl:w-1/4 h-full p-0 m-0 lg:block hidden ">
      <CardContent className="p-0 m-0 flex flex-col h-full justify-between">
        <div className="flex flex-col w-full items-center p-10">
          {/* <h1 className="text-6xl font-extrabold border-2 p-4 text-center my-8 rounded-md">
            {combinedInformation.initialInformation.iconText}
          </h1> */}

          <PersonStanding className={`w-28 h-28 border-2 rounded-md my-8 p-2`} />

          <h1 className="text-xl font-extrabold tracking-normal ">
            {combinedInformation.initialInformation.name}
          </h1>

          <h1 className="text-sm font-extrabold tracking-normal mt-0.5">
            {combinedInformation.initialInformation.occupation}
          </h1>
        </div>

        <div className="flex flex-col w-full p-3 gap-y-2">
          {combinedInformation.routes.map((item) => {
            const onButtonClicked = () => {
              scrollToView(`section-${item.name.toLowerCase()}`);
            }

            return (
              <Button
                variant="outline"
                onClick={onButtonClicked}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeftPart;
