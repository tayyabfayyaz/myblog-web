import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
    const commentSection = await req.json();
    const comment = commentSection.comment;
    const cookieStore = await cookies();
    cookieStore.set("comment", "true");
    console.log(comment);

    if(!comment){
        return NextResponse.json( "Please enter a comment" );
    }else{
        return NextResponse.json( "Comment added successfully" );
    }
}