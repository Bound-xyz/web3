export const mint = async (toAddress: string) => {
  const res = await fetch("/api/mint", {
    method: "post",
    body: JSON.stringify({ toAddress, externalURI: "test" }),
  });

  if (res.status == 200) {
    return true;
  }
  return false;
};
