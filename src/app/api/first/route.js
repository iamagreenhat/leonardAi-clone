import { NextResponse } from "next/server"

export const GET=()=>{
    // return new NextResponse(JSON.stringify({msg:"first api call"}))
      return Response.json({ message: "Hello, world!" });
}