import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const HashtagSidebar = () => {
  return (
    <div className="w-80 bg-gray-100 border-r p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Trending Content</h2>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search hashtags..."
          className="w-full shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Top Trending</h3>
        <div className="space-y-3">
          <Card className="bg-indigo-100 hover:bg-indigo-200 cursor-pointer transition-colors">
            <CardContent className="p-2 flex justify-between items-center">
              <span className="text-indigo-800 font-medium">#WebDevelopment</span>
              <span className="text-sm text-gray-600">1.2M tweets</span>
            </CardContent>
          </Card>

          <Card className="bg-blue-100 hover:bg-blue-200 cursor-pointer transition-colors">
            <CardContent className="p-2 flex justify-between items-center">
              <span className="text-blue-800 font-medium">#AI</span>
              <span className="text-sm text-gray-600">987K tweets</span>
            </CardContent>
          </Card>

          <Card className="bg-green-100 hover:bg-green-200 cursor-pointer transition-colors">
            <CardContent className="p-2 flex justify-between items-center">
              <span className="text-green-800 font-medium">#Sustainability</span>
              <span className="text-sm text-gray-600">856K tweets</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          Explore Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          <Badge
            variant="secondary"
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Technology
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Science
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Lifestyle
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Health
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Education
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Featured</h3>
        <Card className="bg-yellow-100">
          <CardContent className="p-3">
            <h4 className="font-bold text-yellow-700">#ClimateChange</h4>
            <p className="text-sm text-gray-600 mt-2">
              Join the conversation on global climate change initiatives and
              updates.
            </p>
            <Button
              className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white"
              variant="secondary"
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HashtagSidebar;