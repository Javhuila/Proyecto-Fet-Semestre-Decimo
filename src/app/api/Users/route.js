import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import users from "@/models/users";

export async function GET(){
  connectDB();
  const allUsers = await users.find();
  return NextResponse.json(allUsers);
}

export async function POST(request){

  try {

    const data = await request.json();
    const newUser = new users(data);
    const savedUser = await newUser.save();
    return NextResponse.json(savedUser);

  } catch (error) {
    
    return NextResponse.json(error.message, {
      status: 400
    })
  }

}