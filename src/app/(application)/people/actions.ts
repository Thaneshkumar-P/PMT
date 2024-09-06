'use server'

import { cookies } from "next/headers";
import axios from "axios";
import { User } from "../../lib/definition";

export async function getUsers() {
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
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

export async function getUser(userId: string | any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
      // body: JSON.stringify({ userId: userId })
    });

    const data = await response.json();
    
    return data;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function lockUser(userId: string | any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/lock/${userId}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    });
    
    return response.status;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function unlockUser(userId: string | any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/unlock/${userId}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    });
    
    return response.status;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function resetPassword(userId: string | any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/reset/${userId}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    });
    
    return response.status;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function deleteUser(userId: string | any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    });
    
    return response.status;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}

export async function customFields(fieldName: string, fieldType: string, fieldFor: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/custom-fields`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
      body: JSON.stringify({ fieldName, fieldType, fieldFor })
    });

    const data = await response.json()

    data['ok'] = response.ok
    
    return data;
  } catch (error) {
    return { message: 'Internal server error', status: 500 }
  }
  
}


export async function getCustomFields(fieldFor: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/custom-fields`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
      data: { fieldFor }
    })

    return response.data
  } catch (error) {
    return { message: error, status: 500 }
  }
  
}

export async function createUser(userData: User) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, userData,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    })

    return response.data
  } catch (error) {
    return { message: error, status: 500 }
  }
}

export async function getUsed(fields: any) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/custom-fields/used`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
      data: {
        fields
      }
    })

    return response.data
  } catch (error) {
    return { message: error, status: 500 }
  }
  
}

export async function editUser(userData: User, id: string | any) {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, userData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      },
    })

    return response.data
  } catch (error) {
    return { message: error, status: 500 }
  }
}





