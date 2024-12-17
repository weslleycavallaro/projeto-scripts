import { NextResponse } from "next/server";

import Usuario from "@/database/models/Usuario";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);

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

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const id = url.pathname.split("/").pop();

//   try {
//     const usuario = await Usuario.findOne({
//       where: { email: 'das@da.cas' }
//     });

//     return new NextResponse(JSON.stringify(usuario, null, 2));
//   } catch (erro) {
//     return new Response(JSON.stringify({ error: erro }), {
//       status: 500,
//     });
//   }
// }

