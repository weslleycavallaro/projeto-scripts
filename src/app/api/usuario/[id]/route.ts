import { NextResponse } from "next/server";

import Usuario from '@/database/models/Usuario';


interface ParamsProps {
    params: Promise<{
        id: string
    }
    >
}


export async function GET(request: Request, { params }: ParamsProps) {
    const id = (await params).id

    console.log(id)

    try{

        const usuario = await Usuario.findByPk(Request.arguments.id);

        if (!usuario) {

            return new Response(JSON.stringify({error: 'Usuário não encontrado'}), {
                status: 404
            })

        }
        return new Response(JSON.stringify(usuario), {
            status: 200
        })

    }catch(erro){

        return new Response(JSON.stringify({erro}), {
            status: 500
        })

    }

}