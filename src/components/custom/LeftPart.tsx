import React, { useState } from "react";

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { combinedInformation } from "@/lib/DynamicValues";
import { PersonStanding } from "lucide-react";
import { getRandomLink, scrollToView } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";


interface Props { }

const LeftPart: React.FC<Props> = (props) => {
  const [isHovered, setHovered] = useState(false)

  const onPersonIconClicked = () => {
    const link = getRandomLink()
    window.open(link ?? "", "_blank")
  }

  return (
    <Card className="lg:w-1/3 xl:w-1/3 2xl:w-1/4 h-full p-0 m-0 lg:block hidden ">
      <CardContent className="p-0 m-0 flex flex-col h-full justify-between">
        <div className="flex flex-col w-full items-center p-10">
          {/* <h1 className="text-6xl font-extrabold border-2 p-4 text-center my-8 rounded-md">
            {combinedInformation.initialInformation.iconText}
          </h1> */}

          <div className="w-28 h-28 border-2 rounded-md my-8 p-2 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onPersonIconClicked}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  className="absolute inset-0 h-full w-full block ring-4 ring-green-950 bg-green-800 bg-opacity-30 rounded cursor-pointer"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <PersonStanding className={`w-full h-full`} />
          </div>

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
