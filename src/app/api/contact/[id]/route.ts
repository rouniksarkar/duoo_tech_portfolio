import dbConnect from "@/lib/dbconfig";
import Contact from "@/model/contact.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    try {
        const { id } = await params;

        dbConnect()

        const session = await getServerSession();

        if(!session){
            return NextResponse.json(
                { message: "You are not authorized!" },
                { status: 404 }
            );
        }

        const contact = await Contact.findById(id);

        if (!contact) {
            return NextResponse.json(
                { message: `Contact with ID ${id} not found.` },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Contact query fetched successfully!",
                data: contact
            },
            { status: 200 }
        );

    } catch (error:any) {
        return NextResponse.json(
            {
                message: "Error fetching the contact query!",
                error: error.message || error
            },
            { status: 500 }
        );
    }

}