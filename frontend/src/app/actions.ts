"use server";

export async function searchMovie(formData: FormData) {
  console.log("teste: ", process.env.API_URL);
  const res = await fetch(`${process.env.API_URL}`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    if (res.status === 404) throw new Error("Filme não encontrado");
    else throw new Error("Ocorreu um erro ao buscar o filme");
  }

  return await res.json();
}
