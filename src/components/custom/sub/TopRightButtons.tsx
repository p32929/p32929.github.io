import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import React, { useEffect, useState } from "react";
import {
  Github,
  MessageCircle,
  UserRound,
  Share2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { combinedInformation } from "@/lib/DynamicValues";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IRoutedSection } from "@/lib/Models";
import { getValueAtIndex, scrollToView } from "@/lib/utils";
import { Amplitude, amplitudeEvents } from "@/lib/Amplitude";

interface Props { }

interface DialogProps {
  open: boolean,
  setDialogOpen: any,
}

const ShareDialog: React.FC<DialogProps> = ({ open, setDialogOpen }) => {
  const shareMenuItems = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/sharer/sharer.php?u=",
      color: "#0165E1"
    },
    {
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?text=",
      color: "#28D146"
    },
    {
      title: "Twitter",
      link: "https://twitter.com/intent/tweet?url=",
      color: "#1D9BF0"
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/sharing/share-offsite/?url=",
      color: "#0A66C2"
    },
    {
      title: "Tumblr",
      link: "https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url=",
      color: "#35465C"
    },
    {
      title: "Pinterest",
      link: "https://www.pinterest.com/pin/create/button/?url=",
      color: "#BD081B"
    },
    {
      title: "Reddit",
      link: "https://www.reddit.com/submit?url=",
      color: "#FF4500"
    },
  ]

  const onOpenChange = (b: boolean) => {
    setDialogOpen(b)
  }

  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="w-full">
      <DialogHeader>
        <DialogTitle>Share</DialogTitle>
        <DialogDescription>
          Share this portfolio with your friends. Its FREE!!!
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-y-2">
        {
          shareMenuItems.map((item) => {
            const onButtonClicked = () => {
              const url = `${item.link}${window.location.href}`
              Amplitude.trackCustomEvent(amplitudeEvents.clicked_on_share_item, { url })
              window.open(url, '_blank')
            }

            return <Button variant="outline" onClick={onButtonClicked}>{item.title}</Button>
          })
        }
      </div>
    </DialogContent>
  </Dialog>
}

const TopRightButtons: React.FC<Props> = (props) => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const gotoTop = () => {
    Amplitude.trackCustomEvent(amplitudeEvents.clicked_on_goto_top, {})
    const item = getValueAtIndex(combinedInformation.routes, 0) as IRoutedSection
    scrollToView(`section-${item.name.toLowerCase()}`);
  }

  const onDirectMessagesDropdownOpen = (open: boolean) => {
    Amplitude.trackCustomEvent(amplitudeEvents.opened_direct_message_dropdown, { open })
  }

  useEffect(() => {
    Amplitude.trackCustomEvent(amplitudeEvents.opened_share_dialog, { isDialogOpen })
  }, [isDialogOpen])

  return (
    <Card className="w-full h-12">
      <ShareDialog open={isDialogOpen} setDialogOpen={setDialogOpen} />
      <CardContent className="p-1 flex flex-row h-full items-center justify-between">
        <div className="flex flex-row items-center">
          <Button
            disabled
            variant="ghost"
            size="icon"
          >
            <UserRound className="h-4 w-4" />
          </Button>

          <h1 className="text-sm font-bold tracking-wider cursor-pointer" onClick={gotoTop}>
            Portfolio
          </h1>
        </div>

        <div>
          <DropdownMenu onOpenChange={onDirectMessagesDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" title="Send Direct Message">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {combinedInformation.directMessageItems.map((item) => {
                const onDropdownItemClicked = () => {
                  Amplitude.trackCustomEvent(amplitudeEvents.clicked_direct_message_item, { link: item.link })
                  window.open(item.link, "_blank");
                };

                return (
                  <DropdownMenuItem onClick={onDropdownItemClicked}>
                    {item.name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" title="Source code" onClick={() => {
            const url = `https://github.com/p32929/p32929.github.io/`
            Amplitude.trackCustomEvent(amplitudeEvents.clicked_github_icon, { url })
            window.open(url, "_blank")
          }}>
            <Github className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" title="Share" onClick={() => setDialogOpen(true)}>
            <Share2 className="h-4 w-4" />
          </Button>

        </div>
      </CardContent>
    </Card>
  );
};

export default TopRightButtons;
