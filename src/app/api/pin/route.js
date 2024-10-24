import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";

export function GET(request, {params}){
  connectDB();
  return NextResponse.json({
      message: `hello world`
    });
}
