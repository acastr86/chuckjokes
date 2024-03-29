import { ref } from "vue";
import axios from "axios";

const jokes = ref([]);

const api = axios.create({
    baseURL: "https://api.chucknorris.io/jokes"
});

const getRandomJoke = async () => {
    const response = await api.get("random");
    if (response.status === 200) {
        jokes.value = [response.data.value];
    }
};

export const useJokes = () => {
    getRandomJoke();

    const search = async (searchItem) => {
        const response = await api.get(`search?query=${searchItem}`);
        if (response.status === 200) {
            jokes.value = response.data.result.map(x => x.value);
        }
    };

    return {jokes, search};
};

