
'use client';

import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SettingsSidebar = dynamic(() => import("./SettingsSidebar"), {
  loading: () => <SidebarSkeleton />
});

const CalendarSidebar = dynamic(() => import("./CalendarSidebar"), {
  loading: () => <SidebarSkeleton />
});

const HashtagSidebar = dynamic(() => import("./HashtagSidebar"), {
  loading: () => <SidebarSkeleton />
});

const VoiceSidebar = dynamic(() => import("./VoiceSidebar"), {
  loading: () => <SidebarSkeleton />
});
const SidebarSkeleton = () => {
  return (
    <div className="w-80 bg-gray-100 border-r p-4">
      <Skeleton className="h-8 w-3/4 mx-auto mb-6" />
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  );
};

const Sidebar = ({ selectedIcon }) => {
  const DefaultContent = () => (
    <Card className="w-80 bg-gray-100 border-r">
      <CardContent className="p-4">
        Select an icon from the sidebar to view content.
      </CardContent>
    </Card>
  );

  switch (selectedIcon) {
    case "settings":
      return <SettingsSidebar />;
    case "meetings":
      return <CalendarSidebar />;
    case "trending":
      return <HashtagSidebar />;
    case "home":
      return <VoiceSidebar />;
    default:
      return <DefaultContent />;
  }
};

export default Sidebar;