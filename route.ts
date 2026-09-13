export async function POST(req:Request){const {prompt}=await req.json();return Response.json({script:prompt})}
