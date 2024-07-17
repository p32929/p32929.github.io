import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { combinedInformation } from "@/lib/DynamicValues";
import { PersonStanding } from "lucide-react";
import { getRandomLink, scrollToView } from "@/lib/utils";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props { }

const LeftPart: React.FC<Props> = (props) => {
  const [isHovered, setHovered] = useState(false);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const onPersonIconClicked = () => {
    const link = getRandomLink();
    window.open(link ?? "", "_blank");
  };

  return (
    <Card className="lg:w-1/3 xl:w-1/3 2xl:w-1/4 h-full p-0 m-0 lg:block hidden ">
      <CardContent className="p-0 m-0 flex flex-col h-full justify-between">
        <div className="flex flex-col w-full items-center p-10">
          <div
            className="w-28 h-28 border-2 rounded-md my-8 p-2 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onPersonIconClicked}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence>
              {isHovered && (
                <>
                  <motion.div
                    key="tooltip" // Unique key to ensure reanimation
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                  >
                    <div className="absolute inset-x-10 z-30 w-[50%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                    <div className="absolute left-10 w-[70%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-1" />

                    <p className="font-semibold text-primary relative z-30 text-base">
                      Are you feeling lucky today?
                    </p>
                    <p className="text-primary text-sm text-center font-normal">Click to feel even more lucky...</p>
                  </motion.div>

                  <motion.span
                    className="absolute inset-0 h-full w-full block ring-4 ring-white bg-blue-500 bg-opacity-10 rounded cursor-pointer"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />

                </>
              )}
            </AnimatePresence>

            <PersonStanding className="w-full h-full" />
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
            };

            return (
              <Button variant="outline" onClick={onButtonClicked} key={item.name}>
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
