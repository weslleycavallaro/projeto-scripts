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
      console.log("Usuário não encontrado:", email);
      return new Response(JSON.stringify({ erro: 'Usuário não encontrado' }), {
        status: 401,
      });
    }

    const usuarioData = usuario.toJSON();

    if (usuarioData.senha !== senha) {
      console.log("Senha incorreta:", { senhaEnviada: senha, senhaBanco: usuarioData.senha });
      return new Response(
        JSON.stringify({ erro: "Senha incorreta" }),
        { status: 401 }
      );
    }

    console.log("Login bem-sucedido:", usuarioData);
    return new NextResponse(
      JSON.stringify({ mensagem: "Login realizado com sucesso", usuario }),
      { status: 200 }
    );

  } catch (erro) {
    console.error("Erro ao logar:", erro);
    return new Response(
      JSON.stringify({ mensagem: "Erro no servidor" }),
      { status: 500 }
    );
  }
}

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const id = url.pathname.split("/").pop();

//   try {
//     const usuario = await Usuario.findOne({
//         where: { email: 'das@da.cas' } 
//     });

//     return new NextResponse(JSON.stringify(usuario, null, 2));
//   } catch (erro) {
//     return new Response(JSON.stringify({ error: erro }), {
//       status: 500,
//     });
//   }
// }