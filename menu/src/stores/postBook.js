import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {



  const postData = async (data)=>{
    try {
      const result = await fetch(`http://localhost:3000/bookings`,{
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
