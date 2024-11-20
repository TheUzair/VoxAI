import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const EditableNavbar = ({ name, setName }) => {
  return (
    <Card className="flex items-center justify-between p-4 bg-indigo-500">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-80 mr-4 bg-white/90"
        placeholder="Enter name..."
      />
      <Button variant="secondary">Save</Button>
    </Card>
  );
};

export default EditableNavbar;