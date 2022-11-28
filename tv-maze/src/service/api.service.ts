export type ResultsApi = {
    show: ResultsMapped;
};

export type ResultsMapped = {
    id: number;
    url: string;
    name: string;
    image: {
        medium?: string;
    };
};

export type ResultMapped = {
    name: string;
    id: number;
    type: string;
    image: {
        medium?: string;
    };
    summary: string;
};

export const callToApi = async (textSearch: string) => {
    const urlBaseGenerics = "https://api.tvmaze.com/search/shows?q=";
    const response = await fetch(urlBaseGenerics + textSearch);
    const data: ResultsApi[] = await response.json();
    const mappedData: ResultsMapped[] = data.map((current: ResultsApi) => ({
        id: current.show.id,
        url: current.show.url,
        name: current.show.name,
        image: {
            medium: current.show.image?.medium,
        },
    }));
    return mappedData;
};

export const callToApiDetails = async (id: string) => {
    const urlBaseDetails = "https://api.tvmaze.com/shows/";

    const response = await fetch(urlBaseDetails + id);
    const data: ResultMapped = await response.json();
    return data;
};
