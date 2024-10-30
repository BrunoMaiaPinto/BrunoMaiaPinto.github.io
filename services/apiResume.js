export const getResume = async function () {
  const res = await fetch(
    "https://registry.jsonresume.org/BrunoMaiaPinto.json"
  );
  const data = await res.json();

  return data;
};
