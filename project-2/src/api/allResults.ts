export type ResultsApi = {
    show: ResultsMapped
};

export type ResultsMapped = {
    url: string;
    name: string;
    image: {
        medium?: string;
    };
}

export const callToApi = async (textSearch: string) => {
    const urlBase = "https://api.tvmaze.com/search/shows?q=";
    const response = await fetch(urlBase + textSearch);
    const data: ResultsApi[] = await response.json();
    const mappedData: ResultsMapped[] = data.map((current: ResultsApi) => ({
        url: current.show.url,
        name: current.show.name,
        image: {
            medium: current.show.image?.medium,
        },
    }));
    return mappedData;
};
