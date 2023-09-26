export const dateExp = (nft) => {
  return new Date(
    new Date(nft?.createdAt).getTime() +
    (new Date(nft?.dExpireAt).getTime() -
      new Date(nft?.createdAt).getTime())
  );
}

export const changeUserAmount = (obj, amount) => {
  return {
    ...obj,
    data: { ...obj.data, nTokenBalance: amount }
  }
}