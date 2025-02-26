type stockOperation = 'remove' | 'add'
 
export type dayEdit = {
  name: string;
  itens: {
    productName: string;
    quantity: number;
  }[];
  hour: string;
  type: stockOperation;
};

const Days: Record<string, dayEdit[]> = {
  "22/02/2025": [
    {
      name: "Lucas",
      itens: [
        {
          productName: "Abobrinha Italiana cx 10 und",
          quantity: 5,
        },
        {
          productName: "Goiaba Vermelha cx 4 kg",
          quantity: 2,
        },
      ],
      hour: "10:45:13",
      type: "add",
    },
    {
      name: "Matheus",
      itens: [
        {
          productName: "Abobrinha Italiana cx 10 und",
          quantity: 1,
        },
        {
          productName: "Couve-Flor cx 8 und",
          quantity: 1,
        },
      ],
      hour: "14:00:02",
      type: "remove",
    },
  ],
  "21/02/2025": [
    {
      name: "Carlos",
      itens: [
        {
          productName: "Maçã Gala cx 6 kg",
          quantity: 3,
        },
        {
          productName: "Banana Prata cx 10 kg",
          quantity: 2,
        },
      ],
      hour: "09:30:45",
      type: "add",
    },
    {
      name: "Fernanda",
      itens: [
        {
          productName: "Melancia Baby und 1",
          quantity: 1,
        },
      ],
      hour: "16:20:15",
      type: "remove",
    },
  ],
  "20/02/2025": [
    {
      name: "Joana",
      itens: [
        {
          productName: "Pimentão Verde cx 5 kg",
          quantity: 2,
        },
        {
          productName: "Cebola Roxa saco 15 kg",
          quantity: 4,
        },
      ],
      hour: "11:10:33",
      type: "remove",
    },
    {
      name: "Rafael",
      itens: [
        {
          productName: "Morango Premium cx 12 und",
          quantity: 3,
        },
        {
          productName: "Maracujá Azedo cx 5 kg",
          quantity: 2,
        },
      ],
      hour: "13:50:10",
      type: "remove",
    },
  ],
  "19/02/2025": [
    {
      name: "Bruna",
      itens: [
        {
          productName: "Laranja Lima cx 10 kg",
          quantity: 6,
        },
        {
          productName: "Pepino Japonês cx 6 kg",
          quantity: 2,
        },
      ],
      hour: "08:15:20",
      type: "add",
    },
    {
      name: "Felipe",
      itens: [
        {
          productName: "Pera Williams cx 4 kg",
          quantity: 3,
        },
      ],
      hour: "17:40:55",
      type: "add",
    },
  ],
};

function CreateDayIfNoExist(date: string) {
  if (Days[date] == undefined) {
    Days[date] = [];
  }
}

export function DBaddDayEdit(date: string, commit: dayEdit): boolean {
  if (Days[date] == undefined) {
    CreateDayIfNoExist(date);
  }
  const listToAdd = [...Days[date]];
  listToAdd.push(commit);
  Days[date] = [...listToAdd];
  console.log("Days", Days);
  return true;
}

export function getAllDays(): string[] {
  return Object.keys(Days).sort().reverse();
}

export function getOneDay(day: string): dayEdit[] | undefined {
    return Days[day]
}