import Layout from "./layout";
function Character({ title = "Morisawa Chiaki", image, color }) {
  console.log(title);
  return (
    <Layout>
      <div class="background"></div>
      <div class="content">
        <div class="character__name">{title}</div>
      </div>
      <img
        class="character-image"
        alt="Generated Image"
        src="https://uchuu.ensemble.moe/file/ensemble-square/render/character_full1_25.png"
      />
    </Layout>
  );
}

export default Character;
