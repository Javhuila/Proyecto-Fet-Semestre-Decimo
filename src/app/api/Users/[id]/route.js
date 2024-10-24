import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import users from "@/models/users";

export async function GET(request, {params}){

  try {

    connectDB();
    const userFound = await users.findById(params.id);
    if(!userFound)
      return NextResponse.json({
        "message": "User not found",
      }, {
        status: 404
      });
    return NextResponse.json(userFound);

  } catch (error) {
    
    return NextResponse.json(error.message, {
      status: 400
    });
  }
}

export async function DELETE(request, {params}){
  try {
    
    const userDeleted = await users.findByIdAndDelete(params.id);
    if(!userDeleted)
      return NextResponse.json({
        message: "Course not found",
      },{
        status: 400
      });
    return NextResponse,json(userDeleted);

  } catch (error) {
    
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function PUT(request, {params}){
  try {

    const data = await request.json();
    const userUpdated = await users.findByIdAndUpdate(params.id, data, {
      new: true
    })
    return NextResponse.json(userUpdated);
    
  } catch (error) {

    return NextResponse.json(error.message, {
      status: 400
    });
    
  }
}