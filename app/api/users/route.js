import User from "@/models/User";
import connectMongoDb from "@/utils/connectMongoDb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  await connectMongoDb();
  const users = await User.find().exec();
  return NextResponse.json(users);
}
