import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import courses from "@/models/courses";

export async function GET(request, {params}){

  try {

    connectDB();
    const courseFound = await courses.findById(params.id);
    if(!courseFound)
      return NextResponse.json({
        "message": "Course not found",
      }, {
        status: 404
      });
    return NextResponse.json(courseFound);

  } catch (error) {
    
    return NextResponse.json(error.message, {
      status: 400
    });
  }
}

export async function DELETE(request, {params}){
  try {
    
    const courseDeleted = await courses.findByIdAndDelete(params.id);
    if(!courseDeleted)
      return NextResponse.json({
        message: "Course not found",
      },{
        status: 400
      });
    return NextResponse,json(courseDeleted);

  } catch (error) {
    
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function PUT(request, {params}){
  try {

    const data = await request.json();
    const courseUpdated = await courses.findByIdAndUpdate(params.id, data, {
      new: true
    })
    return NextResponse.json(courseUpdated);
    
  } catch (error) {

    return NextResponse.json(error.message, {
      status: 400
    });
    
  }
}