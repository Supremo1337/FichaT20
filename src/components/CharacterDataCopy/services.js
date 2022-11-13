export const PushUserById = (request, accountId) => {
  const resposta = request
    .get(`/ficha/character/accountId=${accountId}`)
    .then((res) => {
      console.log("EU TO AQ", res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("IMPRIME O ERRO", error);
      if (error) return {};
    });
  return resposta;
};
