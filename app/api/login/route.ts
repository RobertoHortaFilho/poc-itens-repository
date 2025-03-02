import User from "@/db/users";
import { UserType } from "@/types/userstypes";
import { NextResponse } from "next/server";


export async function  GET() {
  return NextResponse.json({ message: 'ok'})
}

export async function POST(req: Request) {
  const {email, password}: UserType = await req.json()
  const user = new User({email, password})
  const response = await user.login()
  return NextResponse.json({...response}, {status: response.response=="DENNIED" ? 403 : 200})
}