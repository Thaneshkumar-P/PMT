"use server"

import axios from "axios"
import { cookies } from "next/headers";

export async function createPhase(phase: any) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/phases`, 
    { phase }, 
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

export async function getAllPhases() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      return { message: 'Unauthorized', status: 401 };
    }

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/phases`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message, status: error.response.status };
    }
    return { message: 'Internal server error', status: 500 };
  }
}

export async function getPhaseById(id: string) {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      return { message: 'Unauthorized', status: 401 };
    }

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/phases/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message, status: error.response.status };
    }
    return { message: 'Internal server error', status: 500 };
  }
}

export async function updatePhase(id: string, phase: any) {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      return { message: 'Unauthorized', status: 401 };
    }

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/phases/${id}`,
      phase,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message, status: error.response.status };
    }
    return { message: 'Internal server error', status: 500 };
  }
}

export async function deletePhase(id: string) {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      return { message: 'Unauthorized', status: 401 };
    }

    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/phases/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return { message: 'Phase deleted successfully', status: response.status };
  } catch (error: any) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message, status: error.response.status };
    }
    return { message: 'Internal server error', status: 500 };
  }
}



