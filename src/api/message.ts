import { api } from ".";

async function postMessage(message: string) {
  try {
    const response = await api.post("/message", {
      body: JSON.stringify(message),
    });
    return response.data;
  } catch (error: any) {
    console.error("Error posting message:", error);
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
}

export default postMessage;
