import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { IListItem } from "@/lib/Models";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImageOff, Link } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn, isLinkString } from "@/lib/utils";
import { Amplitude, amplitudeEvents } from "@/lib/Amplitude";

interface Props {
  title: string;
  item: IListItem;
}

interface LinkIconProps {
  url: string | undefined;
  isHovering: boolean
  title: string
  description: string
}

const LinkIcon: React.FC<LinkIconProps> = (props) => {
  const { url, isHovering, title, description } = props;

  // useEffect(() => {
  //   if (isHovering) {
  //     Amplitude.trackCustomEvent(amplitudeEvents.hovered_on_item, { url, title, description })
  //   }
  // }, [isHovering])

  if (url) {
    if (isLinkString(props.url ?? "")) {
      return (
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Link className={cn("h-4 w-4", isHovering ? "glowing-icon animate-bounce" : "")} />
        </Button>
      );
    }
  }

  return <></>;
};

const ListItem: React.FC<Props> = (props) => {
  const item = props.item;
  let [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [imageError, setImageError] = useState(false);

  const onCardClicked = () => {
    if (item.link) {
      const link = item.link
      Amplitude.trackCustomEvent(amplitudeEvents.clicked_on_item, { link })
      window.open(link, "_blank")
    }
  }
  const isHovering = item.title === hoveredIndex

  return (
    <div className={cn("w-full sm:w-full md:w-1/2 xl:w-1/2 2xl:w-1/3 p-1 relative group block", isLinkString(props.item.link ?? "") ? 'cursor-pointer' : 'cursor-not-allowed')}
      onMouseEnter={() => setHoveredIndex(item.title)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onCardClicked}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.span
            className={cn("absolute inset-0 h-full w-full block bg-opacity-15 rounded-xl", isLinkString(props.item.link ?? "") ? "bg-green-500" : "bg-red-500")}
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

      <Card className="h-full flex flex-row w-full p-4 items-center">
        <div className="w-8 h-8 flex min-w-8 min-h-8">
          {!imageError ? (
            <LazyLoadImage
              className="mr-4 object-contain"
              src={item.logo}
              onError={() => setImageError(true)}
            />
          ) : (
            <ImageOff className="w-full h-full" />
          )}
        </div>
        <div className="flex flex-col ml-3 w-full gap-y-1">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </div>

        <LinkIcon url={item.link} isHovering={isHovering} title={item.title} description={item.desc ?? ""} />
      </Card>
    </div>
  );
};

export default ListItem;
