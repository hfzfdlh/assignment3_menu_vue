import  {ref} from 'vue'

export async function useFetch(url){
    const data = ref([])
    const error = ref('')

    try {
        const result = await fetch(url)
        // console.log(result)
        data.value = await result.json()
        // console.log(data)
    } catch (error) {
        error.value = error
    }

    return {data, error}
}