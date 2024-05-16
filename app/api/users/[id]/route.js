import User from "@/models/User";
import connectMongoDb from "@/utils/connectMongoDb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params: { id } }) {
  await connectMongoDb();
  const user = await User.findById(id).exec();
  return NextResponse.json(user);
}
