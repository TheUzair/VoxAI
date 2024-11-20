import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Error({ error, reset }) {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>
          {error.message || "An error occurred while loading the agent."}
        </AlertDescription>
      </Alert>
    </div>
  );
}