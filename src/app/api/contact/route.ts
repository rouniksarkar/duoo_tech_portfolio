import dbConnect from '@/lib/dbconfig'
import Contact from '@/model/contact.model';
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