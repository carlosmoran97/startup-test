import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header>
        <button className="bg-primary text-on-primary rounded-[5px] font-amiko w-[325px] h-[50px] shadow-xl cursor-pointer">
          Agregar destino
        </button>
      </Header>
      <main>
        <div
          className="h-[650px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div
          className="h-[77px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner.png')" }}
        />
      </main>
    </div>
  );
}
