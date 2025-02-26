"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllDays } from "@/db/dbDays.mock";

export default function HomePage() {
  const router = useRouter();
  const [days, setDays] = useState<string[]>(getAllDays());

  const handleDayClick = (date: string) => {
    router.push(`/DayResume/${date.replaceAll("/", "-")}`);
  };

  useEffect(() => {
    setDays(getAllDays());
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between mb-4">
        <button onClick={() => router.push(`/AddItemStock`)} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold">
          Adicionar Itens ao Estoque
        </button>
        <button onClick={() => router.push(`/RemoveItemStock`)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold">
          Remover Itens do Estoque
        </button>
      </div>
      <h1 className="text-2xl font-bold text-blue-400 mb-4">Resumo de Fevereiro</h1>
      <ul className="flex flex-wrap gap-2">
        {days.map((day) => (
          <li key={day} className="w-1/5 min-w-[120px]">
            <button
              onClick={() => handleDayClick(day)}
              className="w-full text-left bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition hover:scale-105"
            >
              <p className="text-sm text-gray-300 text-center">
                <strong>{day}</strong> 
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
