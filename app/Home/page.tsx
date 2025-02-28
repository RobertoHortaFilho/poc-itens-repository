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
    <div className="mt-4 p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex gap-4 mb-4">
        <button onClick={() => router.push(`/AddItemStock`)} className="w-60 bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold">
          Adicionar Itens ao Estoque
        </button>
        <button onClick={() => router.push(`/RemoveItemStock`)} className="w-60 bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold">
          Remover Itens do Estoque
        </button>
        <button onClick={() => router.push(`/StockResume`)} className="w-60 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold">
          Ver Items Em Estoque
        </button>
      </div>
      <h1 className="text-2xl font-bold text-blue-400 mb-4 mt-10">Resumo</h1>
      <ul className="flex flex-wrap gap-4">
        {days.map((day) => (
          <li key={day} className="w-60">
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
