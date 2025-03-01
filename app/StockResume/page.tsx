"use client";

import { getAllProducts } from "@/db/dbProducts.mock";
import { useEffect, useState } from "react";

type TFilter = {
  orderBy: "NAME" | "DATE" | "QUANTITY";
  method: "UPPER" | "LOWER";
};

export default function StockResume() {
  const [listItens, setListItens] = useState<
    { name: string; quantity: number }[]
  >([]);
  const [filterListItens, setFilterListItens] = useState<
    { name: string; quantity: number }[]
  >([]);
  const [nameSearch, setNameSearch] = useState("");
  const [dateSearch, setDateSearch] = useState("");
  const [filters] = useState<TFilter>({
    orderBy: "NAME",
    method: "UPPER",
  });

  useEffect(() => {
    const temp = listItens.filter((i) =>
      i.name.toLowerCase().includes(nameSearch.toLowerCase())
    );
    setFilterListItens(temp);
  }, [nameSearch, listItens, filters]);

  useEffect(() => {
    const newList: { name: string; quantity: number }[] = [];
    const items = getAllProducts();
    const keys = Object.keys(items);
    keys.forEach((name) => {
      newList.push({ name, quantity: items[name] });
    });
    setListItens(newList);
  }, []);

  return (
    <main className="bg-gray-900 p-6 text-white">
      <h1 className="text-2xl font-bold text-blue-400 mb-4 mt-4">
        Resumo do Estoque
      </h1>
      <form action="">
        <input
          className="bg-gray-800 w-60 h-8 p-2 mr-6 rounded-md"
          type="text"
          name="nome"
          placeholder="Nome"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <input
          className="bg-gray-800 w-30 h-8 p-2 mr-6 rounded-md"
          type="date"
          name="date"
          id="date"
          value={dateSearch}
          onChange={(e) => setDateSearch(e.target.value)}
        />
        {/* <input
          className="bg-gray-800 w-40 h-8 mr-6 rounded-md hover:cursor-pointer hover:scale-105 hover:bg-gray-700 transform transition-all duration-150"
          type="submit"
          value="Pesquisar"
        /> */}
      </form>
      <section className="w-full flex justify-center mt-10">
				<section>
					<table>
						<thead>
							<tr className="h-4 w-full bg-gray-800">
								<td className="w-96 px-2">Nome</td>
								<td className="w-40 px-2">Quantidade</td>
								<td className="w-40 px-2">Ultimo dia Alterado</td>
							</tr>
						</thead>
					</table>
					<div className="max-h-80 overflow-y-scroll">
						<table>
							<tbody>
								{filterListItens.map((item) => (
									<tr key={`${item.name}-${item.quantity}`}>
										<td className="w-96 px-2">{item.name}</td>
										<td className="w-40 px-2">{item.quantity}</td>
										<td className="w-40 px-2">28/02/2025</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
      </section>
    </main>
  );
}
