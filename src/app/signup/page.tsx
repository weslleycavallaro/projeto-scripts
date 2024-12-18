"use client"

import Link from "next/link"
import { useState } from "react";

export default function Signup() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        if (nome === "" || email === "" || cpf === "" || senha === "") {

            alert("Preencha todos os campos!")

        } else {

            let b1 = 0;
            let b2 = 0;

            let decremento = 9;
            for (let i = 0; i < 9; i++) {

                b1 += parseInt(cpf[i]) * (i + 1);
                b2 += parseInt(cpf[i]) * decremento;
                decremento--;

            }

            b1 %= 11;
            b2 %= 11;

            b1 = (b1 === 10) ? 0 : b1;
            b2 = (b2 === 10) ? 0 : b2;

            if (b1 == parseInt(cpf[9]) && b2 == parseInt(cpf[10])) {

                try {
                    const response = await fetch("../api/usuario", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nome,
                            email,
                            cpf,
                            senha,
                        }),
                    });
    
                    if (response.ok) {
                        alert("Usuário cadastrado com sucesso!");
                        setNome("");
                        setEmail("");
                        setCpf("");
                        setSenha("");
                    } else {
                        const error = await response.json();
                        alert(`Erro ao cadastrar usuário: ${error.mensagem}`);
                    }
                } catch (error) {
                    alert("Erro ao enviar dados.");
                }
            } else {

                alert("CPF inválido!");

            }

        }

    }

    return (

        <main className="flex justify-center items-center w-full h-full bg-white">
            <div className="flex w-[70%] h-[80%] rounded-md bg-white justify-center">

                {/* Seção de boas-vindas - visível para telas maiores */}
                <div className="w-full flex flex-col items-center bg-black justify-center text-2xl shadow-md shadow-slate-400 p-4 rounded-l-md hidden sm:flex">
                    <h1 className="text-white text-5xl font-bold" aria-labelledby="boas-vindas">Boas vindas ao site</h1>
                    <h2 className="text-xl text-white" aria-describedby="tem-conta">Já tem uma conta?</h2>
                    <Link href="../login" aria-label="Ir para página de login" className="bg-transparent text-white flex w-20 border justify-center text-lg rounded-md border-white mt-3">Log In</Link>
                </div>

                {/* Seção de Cadastro */}
                <div className="flex flex-col items-center gap-4 justify-center shadow-md shadow-slate-400 p-4 rounded-md md:w-1/2">
                    <div className="w-28 h-28">
                        <img src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" alt="Ícone de cadastro" />
                    </div>

                    <h1 className="text-3xl font-bold text-black" id="cadastro-header">Cadastrar</h1>

                    <form onSubmit={handleSubmit} action="#" method="POST">

                        <div className="text-black">
                            <label htmlFor="email" className="flex justify-start text-black">Nome</label>
                            <input
                                id="nome"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="seu nome"
                                type="nome"
                                aria-label="Digite seu nome"
                                onChange={(evento) => setNome(evento.target.value)}
                            />
                        </div>

                        <div className="text-black">
                            <label htmlFor="email" className="flex justify-start text-black">Email</label>
                            <input
                                id="email"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="email@example.com"
                                type="email"
                                aria-label="Digite seu email"
                                onChange={(evento) => setEmail(evento.target.value)}
                            />
                        </div>

                        <div className="text-black">
                            <label htmlFor="email" className="flex justify-start text-black">CPF</label>
                            <input
                                id="cpf"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder=".../.../...-.."
                                type="cpf"
                                aria-label="Digite seu cpf"
                                onChange={(evento) => setCpf(evento.target.value)}
                            />
                        </div>

                        <div className="text-black">
                            <label htmlFor="password" className="flex justify-start text-black">Senha</label>
                            <input
                                id="password"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="senha"
                                type="password"
                                aria-label="Digite sua senha"
                                onChange={(evento) => setSenha(evento.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-black text-white flex w-52 h-8 mt-4 justify-center text-lg rounded-md hover:bg-black shadow-md transition ease-out delay-150 hover:scale-105 duration-300"
                                aria-label="Cadastrar"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>

    )
}