import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: 'key_85a66aa83b5f9cb9a8fd6e7beb10',
});

export async function GET(req, { params }) {
  console.log("params", params); 
  
  const { id } = await params; 
  console.log("params-id", id);
  
  if (!id) {
    return new Response(
      JSON.stringify({ message: "Agent ID is missing" }),
      { status: 400 }
    );
  }
  
  try {
    const agent = await client.agent.retrieve(id); 
    return new Response(JSON.stringify(agent), { status: 200 });
  } catch (error) {
    console.error("Error fetching agent:", error);
    return new Response(JSON.stringify({ message: "Error fetching agent" }), { status: 500 });
  }
}
