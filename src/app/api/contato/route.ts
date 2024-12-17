import { NextResponse } from "next/server";

import Contato from '@/database/models/Contato';

export async function POST(request: Request) {
    const body = await request.json()
    try {

        const contato = await Contato.create({
            modelo: body.modelo,
            nome: body.nome,
            cpf: body.cpf,
            email: body.email
        })

        return new Response(contato, {
            status: 201
        })

    } catch (erro) {

        return new Response(JSON.stringify({ mensagem: erro }), {
            status: 500
        })

    }
}

export async function GET(request: Request) {
    const id = request.url.split('/').pop();
    try {

        const contato = await Contato.findByPk(id);

        if (!contato) {
            return new Response(JSON.stringify({ error: 'Contato não encontrado' }), {
                status: 404
            });
        }

        return new Response(JSON.stringify(contato), {
            status: 200
        })

    } catch (erro) {

        return new Response(JSON.stringify({ mensagem: erro }), {
            status: 500
        })

    }
}
