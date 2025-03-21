export function getDateComplete(): string {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0'); 
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = dataAtual.getFullYear(); 
    return `${dia}/${mes}/${ano}`;
}

export function getHour():string {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, '0'); 
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0'); 
    return `${horas}:${minutos}:${segundos}`;
}