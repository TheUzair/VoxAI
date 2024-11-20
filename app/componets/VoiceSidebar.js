'use client';

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

const VoiceSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    { 
      name: "English", 
      members: [
        { name: "Marie", gender: "Female" }, 
        { name: "Sarah", gender: "Female" }, 
        { name: "Mark", gender: "Male" }, 
        { name: "Sam", gender: "Male" }
      ] 
    },
    { 
      name: "Spanish", 
      members: [
        { name: "Maria", gender: "Female" }, 
        { name: "Luis", gender: "Male" }, 
        { name: "Carlos", gender: "Male" }, 
        { name: "Ana", gender: "Female" }
      ] 
    },
    { 
      name: "French", 
      members: [
        { name: "Chloe", gender: "Female" }, 
        { name: "Pierre", gender: "Male" }, 
        { name: "Luc", gender: "Male" }, 
        { name: "Juliette", gender: "Female" }
      ] 
    },
  ];

  const filteredLanguages = languages.map(language => ({
    ...language,
    members: language.members.filter(member => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      language.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(language => language.members.length > 0);

  const LoadingState = () => (
    <div className="space-y-2 p-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  );

  return (
    <aside className="w-80 bg-gray-100 border-r">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center mb-4">Select Voice</h2>
        <div className="relative mb-6">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search Voice/Language"
            className="pl-10 w-full bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ScrollArea className="h-[calc(100vh-180px)]">
          {isLoading ? (
            <LoadingState />
          ) : filteredLanguages.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No voices found matching your search.
            </div>
          ) : (
            <div className="space-y-6 pr-4">
              {filteredLanguages.map((language) => (
                <div key={language.name} className="space-y-2">
                  <div className="flex items-center mb-2">
                    <div className="flex-1 border-t border-black"></div>
                    <div className="px-2 font-medium text-sm">
                      {language.name}
                    </div>
                    <div className="flex-1 border-t border-black"></div>
                  </div>

                  <div className="space-y-2">
                    {language.members.map((member) => (
                      <Card
                        key={member.name}
                        className="bg-blue-100 hover:bg-blue-50 transition-colors cursor-pointer"
                      >
                        <CardContent className="p-2 flex justify-between items-center">
                          <span className="text-black font-bold">
                            {member.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-indigo-800 text-white hover:bg-indigo-700"
                          >
                            {member.gender}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </aside>
  );
};

export default VoiceSidebar;