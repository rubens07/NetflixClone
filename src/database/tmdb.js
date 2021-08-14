import KEYS from "src/keys";


const basicFetch = async (endpoint, params) => {
    const url = `${KEYS.link}${endpoint}${new URLSearchParams({
        ...params,
        api_key: KEYS.api_key,
        language: "pt-BR"
    })}`
    const result = await fetch(url);
    const json = await result.json();

    return json;
}

const HomeList =  {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: await basicFetch("/discover/tv?", {with_network: 213})
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFetch("/trending/all/week?", {})
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch("/movie/top_rated?", {})
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch("/discover/movie?", {with_genres: 28})
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch("/discover/movie?", {with_genres: 35})
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch("/discover/movie?", {with_genres: 27})
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch("/discover/movie?", {with_genres: 10749})
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch("/discover/movie?", {with_genres: 99})
            },
        ];
    }
}

export default HomeList;
