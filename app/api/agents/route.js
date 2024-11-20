import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: 'key_85a66aa83b5f9cb9a8fd6e7beb10',
});

export async function GET() {
  try {
    const agents = await client.agent.list(); 
    return new Response(JSON.stringify(agents), { status: 200 });
  } catch (error) {
    console.error("Error fetching agents:", error);
    return new Response(JSON.stringify({ message: "Error fetching agents" }), { status: 500 });
  }
}
