import { readonly, ref } from 'vue';
import { Storage } from '@ionic/storage';

const store = new Storage();
const storage = store.create();

export function useStorageService<T>(name: string, defaultValue: T) {
    const data = ref<T>(defaultValue);
    
    const loadData = async () => {
        const dataFromStorage = (await storage).get(name);
        const dataRaw = await dataFromStorage;
        data.value = dataRaw ? JSON.parse(dataRaw) : defaultValue;
    };
    const setData = async (toSet: T) => {
        data.value = toSet;
        (await storage).set(name, JSON.stringify(toSet));
    }

    loadData();
    return {
        data: readonly(data),
        setData
    };
}