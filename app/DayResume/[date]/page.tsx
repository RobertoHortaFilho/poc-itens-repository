"use client";
import { dayEdit, getOneDay } from "@/db/dbDays.mock";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DayResume() {
  const {date} = useParams()
  const [updates, setUpdates] = useState<dayEdit[]>([]);
  const [dateString, setDateString] = useState<string>('');

  useEffect(() => {
    if (!date || typeof date != 'string') {
      return
    }
    const datestring = date.replaceAll('-', '/')
    setDateString(datestring)
    const data = getOneDay(datestring);
    if (data) {
      setUpdates(data);
    }
  }, [date]);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold text-blue-400 mb-4">Resumo do Dia {dateString}</h1>
      {updates.length === 0 ? (
        <p>Nenhuma atualização registrada.</p>
      ) : (
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-sm text-gray-200">
                <strong>Usuário:</strong> {update.name}
              </p>
              <p className="text-sm text-gray-200">
                <strong>Hora:</strong> {update.hour}
              </p>
              <ul className="mt-2 text-sm">
                {update.itens.map((item, idx) => (
                  <li key={idx} className="text-gray-300">
                    <p>
                      <strong>Produto:</strong> {item.productName},{" "}
                      <strong>Quantidade:</strong> {item.quantity}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                {update.type == "add" ? (
                  <strong className="text-emerald-500">Adicionado ao estoque</strong>
                ) : (
                  <strong className="text-red-500">Retirado do estoque</strong>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
