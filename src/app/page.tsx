export default function Home() {
  return (
      <main className="flex flex-col w-full">

        <div className="relative flex justify-center w-full items-center bg-[url('../../public/bg.jpg')] bg-cover bg-center h-[80%]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 justify-center">
            <h1 className="text-3xl p-4 sm:text-5xl text-white font-semibold">Um novo conceito de veiculo</h1>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <p>Conteudo...</p>
        </div>
        
        

      </main>

  );
}
