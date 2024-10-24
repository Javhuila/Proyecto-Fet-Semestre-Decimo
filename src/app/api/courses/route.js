import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import courses from "@/models/courses";

export async function GET(){
  connectDB();
  const allCourses = await courses.find();
  return NextResponse.json(allCourses);
}

export async function POST(request){

  try {

    const data = await request.json();
    const newCourse = new courses(data);
    const savedCourse = await newCourse.save();
    return NextResponse.json(savedCourse);

  } catch (error) {
    
    return NextResponse.json(error.message, {
      status: 400
    })
  }

}