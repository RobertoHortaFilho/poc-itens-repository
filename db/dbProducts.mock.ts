const DBproducs: Record<string, number> = {
    "Abacaxi Vip cx 2 und": 4,
    "Abobrinha Italiana cx 10 und": 8,
    "Acelga cx 6 und": 2,
    "Alface Americana cx 12 und": 7,
    "Alface Crespa cx 10 und": 3,
    "Alho Roxo cx 5 kg": 9,
    "Banana Nanica cx 10 kg": 6,
    "Banana Prata cx 10 kg": 5,
    "Batata Doce Roxa saco 20 kg": 10,
    "Batata Inglesa saco 25 kg": 1,
    "Berinjela cx 8 kg": 4,
    "Beterraba cx 12 kg": 7,
    "Brócolis Ninja cx 10 und": 3,
    "Cebola Branca saco 20 kg": 8,
    "Cebola Roxa saco 15 kg": 5,
    "Cenoura Especial cx 10 kg": 6,
    "Chuchu cx 10 kg": 2,
    "Couve-Flor cx 8 und": 9,
    "Goiaba Vermelha cx 4 kg": 1,
    "Jiló cx 5 kg": 0,
    "Kiwi Verde cx 3 kg": 3,
    "Laranja Lima cx 10 kg": 6,
    "Laranja Pera Rio cx 6 und": 4,
    "Limão Siciliano cx 5 kg": 8,
    "Limão Tahiti cx 8 kg": 2,
    "Maçã Fuji cx 5 kg": 9,
    "Maçã Gala cx 6 kg": 7,
    "Mamão Formosa cx 4 und": 5,
    "Mamão Papaya cx 6 und": 1,
    "Manga Palmer cx 6 und": 3,
    "Maracujá Azedo cx 5 kg": 0,
    "Melancia Baby und 1": 6,
    "Melão Amarelo cx 6 kg": 4,
    "Melão Pele de Sapo cx 5 kg": 8,
    "Morango Premium cx 12 und": 2,
    "Pepino Japonês cx 6 kg": 7,
    "Pera Williams cx 4 kg": 5,
    "Pimentão Amarelo cx 4 kg": 9,
    "Pimentão Verde cx 5 kg": 3,
    "Uva Thompson cx 3 kg": 10,
  };
  
  export function GetAll() {
    return {...DBproducs}
  }

  export function getOneProductQtd(key: string): number {
    return DBproducs[key] || 0
  }

  export function addProductQtd(key: string, qtd: number): boolean {
    if (DBproducs[key] == undefined) {
        return false
    }
    DBproducs[key] += qtd
    return true
  }

  export function removeProductQtd(key: string, qtd: number):boolean {
    if (DBproducs[key] == undefined || DBproducs[key] < qtd) {
        return false
    }
    DBproducs[key] -= qtd
    return true
  }
  