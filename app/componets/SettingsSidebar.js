import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SettingsSidebar = () => {
  return (
    <div className="w-80 bg-gray-100 border-r p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Settings</h2>

      <Card className="mb-6 bg-transparent border-none shadow-none">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg font-semibold text-gray-700">
            General
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Dark Mode</span>
            <Switch className="data-[state=checked]:bg-indigo-500" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Notifications</span>
            <Switch className="data-[state=checked]:bg-indigo-500" />
          </div>
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="mb-6 bg-transparent border-none shadow-none">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg font-semibold text-gray-700">
            Account
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Change Password</span>
            <Button
              variant="link"
              className="text-indigo-500 hover:text-indigo-600 p-0 h-auto"
            >
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Privacy Settings</span>
            <Button
              variant="link"
              className="text-indigo-500 hover:text-indigo-600 p-0 h-auto"
            >
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg font-semibold text-gray-700">
            Advanced
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Clear Cache</span>
            <Button
              variant="link"
              className="text-indigo-500 hover:text-indigo-600 p-0 h-auto"
            >
              Clear
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Reset to Default</span>
            <Button
              variant="link"
              className="text-red-500 hover:text-red-600 p-0 h-auto"
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsSidebar;