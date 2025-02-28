"use client";
import { dayEdit, DBaddDayEdit } from "@/db/dbDays.mock";
import productsList from "@/db/products.mock";
import { getDateComplete, getHour } from "@/utils/date";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
}

interface SelectedProduct {
  productName: string;
  quantity: number;
}

export default function RegisterStock() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedProducts, setAddedProducts] = useState<SelectedProduct[]>([]);

  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProduct = () => {
    if (selectedProduct && quantity > 0) {
      setAddedProducts((prev) => [
        ...prev,
        { productName: selectedProduct.name, quantity },
      ]);
      setSelectedProduct(null);
      setQuantity(1);
      setSearch("");
    }
  };

  const handleSave = () => {
    const dataAtual = getDateComplete();
    const name = localStorage.getItem("poc-user-name") || "User não logado.";
    const DayEdit: dayEdit = {
      name,
      hour: getHour(),
      itens: addedProducts,
      type: 'add'
    };
    const response = DBaddDayEdit(dataAtual, DayEdit);
    if (response) {
      return router.replace("/Home");
    }
    console.log("Desculpe hocorreu um erro");
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold text-blue-400 mb-4">
        Registrar Mercadorias Adicionadas ao estoque
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar mercadoria..."
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <div
          className="bg-gray-800 mt-2 rounded max-h-40 overflow-y-auto"
          style={{ maxHeight: "200px" }}
        >
          <ul className="overflow-y-auto max-h-40">
            {filteredProducts.slice(0, 10).map((product) => (
              <li
                key={product.id}
                className="p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => setSelectedProduct(product)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedProduct && (
        <div className="mb-4">
          <p className="mb-2">Selecionado: {selectedProduct.name}</p>
          <input
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 0)}
            min="1"
            className="p-2 w-full rounded bg-gray-800 text-white"
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 mt-2 rounded font-semibold"
          >
            Adicionar ao Estoque
          </button>
        </div>
      )}
      <h2 className="text-xl font-bold text-blue-300 mt-4 mb-2">
        Itens Adicionados
      </h2>
      <ul className="bg-gray-800 p-4 rounded">
        {addedProducts.map((item, index) => (
          <li key={index} className="p-2 border-b border-gray-700">
            {item.productName} - {item.quantity} unidades
          </li>
        ))}
      </ul>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 mt-4 rounded font-semibold"
      >
        Salvar
      </button>
    </div>
  );
}
