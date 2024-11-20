import Retell from "retell-sdk";

const client = new Retell({ apiKey: 'key_85a66aa83b5f9cb9a8fd6e7beb10' });

export async function PUT(req, { params }) {
  const { id } = params; 
  console.log("params in update", params);

  try {
    const { prompt } = await req.json(); 
    console.log("Updating agent with ID:", id, "and prompt:", prompt);
    
    const response = await fetch(`https://api.retellai.com/update-agent/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer key_85a66aa83b5f9cb9a8fd6e7beb10"
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to update agent");
    }

    return new Response(JSON.stringify({ message: "Agent updated successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error updating agent:", error);
    return new Response(JSON.stringify({ message: "Error updating agent" }), { status: 500 });
  }
}
