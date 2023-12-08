// "use server";

// const fetchAnime = async () => {
//     const response = await fetch("https://shikimori.one/api/animes");
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

const fetchAnime = async (page: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
    const data = await response.json();
    console.log(data);
   	return data;
}