async function getCat(){
    const cat = await $nuxt.$axios.get("https://catfact.ninja/fact");
return cat.data;
}
export {getCat}