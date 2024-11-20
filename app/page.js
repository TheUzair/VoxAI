import AgentTable from "./componets/AgentTable";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchAgents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/agents", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch agents: ${res.statusText}`);
    }

    const agents = await res.json();
    return agents;
  } catch (error) {
    console.error("Error fetching agents:", error);
    return null; 
  }
};

const LoadingSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-8 w-[200px] mb-4" />
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </CardContent>
  </Card>
);

const EmptyState = () => (
  <Card className="text-center p-8">
    <CardContent className="space-y-4">
      <Users className="mx-auto h-12 w-12 text-gray-400" />
      <CardTitle>No Agents Found</CardTitle>
      <AlertDescription className="text-gray-500">
        Please create a new agent to get started.
      </AlertDescription>
    </CardContent>
  </Card>
);

const ErrorState = ({ message }) => (
  <Alert variant="destructive">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>{message}</AlertDescription>
  </Alert>
);

export default async function HomePage() {
  const agents = await fetchAgents();

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="border-b bg-blue-100">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Users className="h-6 w-6" />
            Agents List
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 bg-slate-100">
          {agents === null ? (
            <ErrorState message="Failed to fetch agents. Please try again later." />
          ) : agents.length > 0 ? (
            <AgentTable agents={agents} />
          ) : (
            <EmptyState />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

HomePage.loading = function Loading() {
  return <LoadingSkeleton />;
};