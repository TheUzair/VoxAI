'use client';

import { useState, useEffect } from "react";
import EditableNavbar from "./EditableNavbar";
import IconSidebar from "./IconSidebar";
import Sidebar from "./Sidebar";
import TestSection from "./TestSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const PromptPage = ({ agent }) => {
  const [prompt, setPrompt] = useState('');
  const [name, setName] = useState(agent.agent_id);
  const [selectedIcon, setSelectedIcon] = useState("home");
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      try {
        const savedPrompt = localStorage.getItem(`prompt_${agent.agent_id}`);
        if (savedPrompt) {
          setPrompt(savedPrompt);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadInitialData();
  }, [agent.agent_id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      autoSavePrompt();
    }, 500);

    return () => clearTimeout(timer);
  }, [prompt]);

  const autoSavePrompt = async () => {
    setIsSaving(true);
    localStorage.setItem(`prompt_${agent.agent_id}`, prompt);

    try {
      const response = await fetch(`https://api.retellai.com/update-agent/${agent.agent_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer key_85a66aa83b5f9cb9a8fd6e7beb10"
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error details:", errorDetails);
        throw new Error("Failed to save prompt");
      }

      const result = await response.json();
      console.log("Agent updated successfully:", result);
    } catch (error) {
      console.error("Error saving prompt:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <EditableNavbar name={name} setName={setName} />
      <div className="flex flex-grow">
        <IconSidebar selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
        <Separator orientation="vertical" />

        <div className="w-80 bg-gray-100">
          <Sidebar selectedIcon={selectedIcon} />
        </div>
        <Separator orientation="vertical" />

        <main className="flex-grow p-12 w-2/5 bg-slate-200">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-extrabold">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-gray-700 font-extrabold">
                  Prompt
                </Label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[400px] resize-none"
                  disabled={loading}
                />
                {isSaving && (
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    Saving...
                  </p>
                )}
                {loading && (
                  <p className="text-xs text-muted-foreground">Loading prompt...</p>
                )}
                {error && (
                  <p className="text-xs text-destructive">{error}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </main>
        <Separator orientation="vertical" />

        <TestSection />
      </div>
    </div>
  );
};

export default PromptPage;