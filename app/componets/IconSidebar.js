'use client';

import { MdGraphicEq } from "react-icons/md";
import { IoSettingsSharp, IoCalendarClearSharp } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const IconSidebar = ({ selectedIcon, setSelectedIcon }) => {
  const icons = [
    { id: "home", icon: MdGraphicEq, label: "home" },
    { id: "settings", icon: IoSettingsSharp, label: "settings" },
    { id: "meetings", icon: IoCalendarClearSharp, label: "meetings" },
    { id: "trending", icon: FaHashtag, label: "trending" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 w-20">
      <TooltipProvider>
        {icons.map(({ id, icon: Icon, label }) => (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "mb-6 w-10 h-10",
                  selectedIcon === id 
                    ? "text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100" 
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setSelectedIcon(id)}
              >
                <Icon className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default IconSidebar;