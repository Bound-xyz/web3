export const mint = async (toAddress: string) => {
  const res = await fetch("/api/mint", {
    method: "post",
    body: JSON.stringify({ toAddress, externalURI: "test" }),
  });

  console.log(res);

  if (res.status == 201) {
    return true;
  }
  return false;
};
