import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: 'key_85a66aa83b5f9cb9a8fd6e7beb10',
});

export async function POST(req) {
  try {
    const body = await req.json();
    const agentResponse = await client.agent.create(body);
    return new Response(JSON.stringify(agentResponse), { status: 201 });
  } catch (error) {
    console.error("Error creating agent:", error);
    return new Response(JSON.stringify({ message: "Error creating agent" }), { status: 500 });
  }
}
