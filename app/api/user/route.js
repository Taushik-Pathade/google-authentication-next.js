import Connectmongodb from "@/app/database/Connectmongodb"
import User from "@/models/user"


import { NextResponse } from "next/server"

export async function POST(request) {
    const { name, email } = await request.json()
    await Connectmongodb()

    await User.create({ name, email })
    return NextResponse.json({ message: "User Registered successfully" }, { status: 201 })

}