import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CalendarSidebar = () => {
  return (
    <div className="w-80 border-r p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Schedules</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <div className="space-y-2">
          <Button className="w-full" variant="default">
            Add New Event
          </Button>
          <Button className="w-full" variant="outline">
            View Today's Schedule
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
        <div className="space-y-2">
          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Team Meeting</h4>
                  <p className="text-sm text-muted-foreground">
                    Nov 20, 2024 - 10:00 AM
                  </p>
                </div>
                <Badge variant="secondary">Work</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Project Deadline</h4>
                  <p className="text-sm text-muted-foreground">
                    Nov 22, 2024 - 11:59 PM
                  </p>
                </div>
                <Badge variant="warning">Urgent</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Doctor Appointment</h4>
                  <p className="text-sm text-muted-foreground">
                    Nov 25, 2024 - 4:00 PM
                  </p>
                </div>
                <Badge variant="destructive">Personal</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-4" />

      <div>
        <h3 className="text-lg font-semibold mb-2">Navigate</h3>
        <div className="flex justify-between">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarSidebar;