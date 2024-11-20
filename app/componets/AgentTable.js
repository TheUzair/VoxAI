"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AgentTable = ({ agents }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleRowClick = (id) => {
    router.push(`./get-agent2/${id}`);
  };

  const paginatedAgents = agents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Language</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedAgents.map((agent) => (
            <TableRow
              key={agent.agent_id}
              onClick={() => handleRowClick(agent.agent_id)}
              className={cn(
                "cursor-pointer",
                currentPage % 2 === 0 ? "bg-muted/50" : ""
              )}
            >
              <TableCell>{agent.agent_id}</TableCell>
              <TableCell>{agent.language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant={currentPage === 1 ? "secondary" : "default"}
        >
          Previous
        </Button>

        <span className="text-sm font-medium">Page {currentPage}</span>

        <Button
          onClick={() =>
            setCurrentPage((prev) =>
              agents.length > prev * itemsPerPage ? prev + 1 : prev
            )
          }
          disabled={currentPage * itemsPerPage >= agents.length}
          variant={
            currentPage * itemsPerPage >= agents.length ? "secondary" : "default"
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AgentTable;