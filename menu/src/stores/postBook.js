import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {

const URL = 'http://localhost:3000'

  const postData = async (data)=>{
    try {
      const result = await fetch(`${URL}/bookings`,{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return { postData}
})
