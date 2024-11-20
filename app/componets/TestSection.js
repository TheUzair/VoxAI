'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const TestSection = () => {
  const defaultPhoneNumbers = ["+1 123 456 7890", "+44 20 7946 0958", "+91 9876543210"];
  const defaultEmails = ["example@gmail.com", "testuser@yahoo.com", "sample@outlook.com"];

  return (
    <aside className="w-80 border-l p-4 bg-indigo-50">
      <Tabs defaultValue="call" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-indigo-500 p-1 rounded-lg">
          <TabsTrigger 
            value="call"
            className="rounded-full text-black data-[state=active]:bg-white data-[state=active]:text-blue-600"
          >
            Test Call
          </TabsTrigger>
          <TabsTrigger 
            value="chat"
            className="rounded-full text-black data-[state=active]:bg-white data-[state=active]:text-blue-600"
          >
            Test Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="call" className="mt-4 space-y-4">
          <FormSection 
            type="call"
            options={defaultPhoneNumbers}
          />
        </TabsContent>

        <TabsContent value="chat" className="mt-4 space-y-4">
          <FormSection 
            type="chat"
            options={defaultEmails}
          />
        </TabsContent>
      </Tabs>
    </aside>
  );
};

const FormSection = ({ type, options }) => {
  const isCall = type === "call";

  return (
    <>
      <Card className="bg-indigo-100">
        <CardContent className="p-4">
          <Label className="font-semibold">
            {isCall ? "Select Phone Number" : "Select Email"}
          </Label>
          <Select>
            <SelectTrigger className="w-full mt-1 bg-white">
              <SelectValue placeholder={isCall ? "Select phone number" : "Select email"} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="bg-indigo-100">
        <CardContent className="p-4">
          <Label htmlFor="name" className="font-semibold">
            Enter Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            className="mt-1 bg-white"
          />
        </CardContent>
      </Card>

      <Card className="bg-indigo-100">
        <CardContent className="p-4">
          <Label htmlFor="contact" className="font-semibold">
            {isCall ? "Enter Phone Number" : "Enter Email"}
          </Label>
          <Input
            id="contact"
            type={isCall ? "tel" : "email"}
            placeholder={isCall ? "Enter phone number" : "Enter email"}
            className="mt-1 bg-white"
          />
        </CardContent>
      </Card>

      <Button 
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
        size="lg"
      >
        {isCall ? "Call Me" : "Text Me"}
      </Button>
    </>
  );
};

export default TestSection;