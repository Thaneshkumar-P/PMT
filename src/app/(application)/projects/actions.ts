"use server"

import axios from "axios"
import { cookies } from "next/headers";

export async function createProject(project: any) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/teams`, 
    { project }, 
    { headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    })

    return response.data
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
}

