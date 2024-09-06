'use server'

import axios from "axios";
import { cookies } from "next/headers";

export async function getTeams() {
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    });
    
    const data = await response.json();

    if(data.statusCode === 401)
      return [];

    return data;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function createTeam(teamName: string, users: string[]) {
  
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
      teamName,
      users
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    }
    )

    const data = response.data
    
    return data
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function getTeam(_id:string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teams/${_id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    }
    )

    const data = response.data

    return data
  } catch (error) {
    return { message: 'Internal server error', status: 500 }

  }
}

export async function updateTeam(teamName: string, users: string[], id: string) {
  
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
      teamName,
      users,
      id
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    }
    )

    const data = response.data
    
    return data
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function deleteTeam(id:string) {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/teams`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies().get('token')?.value}`
        },
        data: {
          id
        }
      }
     )

     const data = response.data
     return data
  }catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
}
