import { NextResponse } from "next/server";

import Usuario from "@/database/models/Usuario";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const usuario = await Usuario.create({
      nome: body.nome,
      cpf: body.cpf,
      email: body.email,
      senha: body.senha,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return new NextResponse(usuario.toJSON());
  } catch (erro) {
    return new Response(JSON.stringify({ mensagem: erro }), {
      status: 500,
    });
  }
}