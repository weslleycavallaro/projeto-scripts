import { NextResponse } from "next/server";

import Usuario from "@/database/models/Usuario";

export async function POST(request: Request) {

  const body = await request.json();
  const { email, senha } = body

  try {
    const usuario = await Usuario.findOne({
      where: { email },
    })

    if(!usuario) {
      return new Response(JSON.stringify({ erro: 'Usuário não encontrado' }), {
        status: 401,
      });
    }

    const usuarioData = usuario.toJSON();

    if (usuarioData.senha !== senha) {
      return new Response(
        JSON.stringify({ erro: "Senha incorreta" }),
        { status: 401 }
      );
    }

    return new NextResponse(
      JSON.stringify({ mensagem: "Login realizado com sucesso", usuario }),
      { status: 200 }
    );

  } catch (erro) {
    return new Response(
      JSON.stringify({ mensagem: "Erro no servidor" }),
      { status: 500 }
    );
  }
}