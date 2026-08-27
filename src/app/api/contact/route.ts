import dbConnect from '@/lib/dbconfig'
import Contact from '@/model/contact.model';
import { getServerSession } from 'next-auth';
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request:NextRequest){

    const data = await request.json()

    if(!data.name || !data.phoneNo || !data.email || !data.projectName){
        return NextResponse.json({message:"Please fill all the required fields!"},{status:400})
    }

    try {
        await dbConnect();

        const contact = await Contact.create({
            name:data.name,
            phoneNo :data.phoneNo,
            email:data.email,
            projectName:data.projectName,
            message:data.message || "",
        })

        return NextResponse.json({message:"Contact created succesfully!",contact},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Failed to creact contact",error},{status:500})
    }
}

export async function GET(request:NextRequest){

    try {
        await dbConnect();

        const sessions = await getServerSession();

        if(!sessions){
            return NextResponse.json({message:"You are not admin!"},{status:501})
        }

        const allContact = await Contact.find();

        if(!allContact || allContact.length===0){
            return NextResponse.json({message:"No one contact us!"},{status:404})
        }

        return NextResponse.json({message:"Fetch all contact quaries!",contact:allContact},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Error on fetching contacts!",error},{status:500})
    }
}