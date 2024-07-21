export const FetchShowFile = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/file/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch file data");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  