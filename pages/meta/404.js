import Layout from "./layout";
function Character({
  title = "Work and the Musketeer",
  name = "Tsukasa Suou",
  image1 = "card_rectangle4_2198_normal.png",
  image2 = "card_rectangle4_2198_evolution.png",
  stats1 = "12345",
  stats2 = "23456",
  stats3 = "345678",
  path = "/cards/1234",
}) {
  console.log(title);
  return (
    <Layout path={path}>
      <div className="card-info">
        <div className="card-title sora">{title}</div>
        <div className="card-name sora dimmed">{name}</div>
        <div className="card-section-title">
          Stats{" "}
          <span
            className="dimmed"
            style={{ fontWeight: 500, fontSize: "0.8em" }}
          >
            (Da + Vo + Pf)
          </span>
        </div>
        <div className="card-stats">
          <div className="card-stat card-stat-1">
            <div className="card-stat-desc dimmed">1 copy</div>
            {stats1}
          </div>
          <div className="card-stat card-stat-2">
            <div className="card-stat-desc dimmed">3 copies</div>
            {stats2}
          </div>
          <div className="card-stat card-stat-3">
            <div className="card-stat-desc dimmed">5 copies</div>
            {stats3}
          </div>
        </div>
        <div class="soon dimmed">more info coming soon!</div>
      </div>
      <img
        className="card-image1"
        src={`https://assets.ensemble.link/assets/${image1}`}
      />
      <img
        className="card-image2"
        src={`https://assets.ensemble.link/assets/${image2}`}
      />
      <img
        className="card-image-bg"
        src={`https://assets.ensemble.link/assets/${image2}`}
      />
    </Layout>
  );
}

export default Character;
