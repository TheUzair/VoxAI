import Retell from "retell-sdk";
import PromptPage from "@/app/componets/PromptPage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const client = new Retell({ apiKey: 'key_85a66aa83b5f9cb9a8fd6e7beb10' });

async function fetchAgent(id) {
  try {
    const response = await client.agent.retrieve(id);
    return response;
  } catch (error) {
    console.error('Error fetching agent:', error);
    return null;
  }
}

const LoadingSkeleton = () => (
  <Card className="max-w-2xl mx-auto mt-8">
    <CardHeader>
      <Skeleton className="h-8 w-64 mb-2" />
    </CardHeader>
    <CardContent className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-5/6" />
    </CardContent>
  </Card>
);

const ErrorState = () => (
  <div className="container mx-auto p-4 max-w-2xl">
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Unable to fetch agent details. Please try again later.
      </AlertDescription>
    </Alert>
  </div>
);

export default async function AgentPage({ params }) {
  const { id } = await params;
  const agent = await fetchAgent(id);

  if (!agent) {
    return <ErrorState />;
  }

  return (
    <div className="min-h-screen bg-background">
      <PromptPage agent={agent} />
    </div>
  );
}

AgentPage.loading = function Loading() {
  return <LoadingSkeleton />;
};