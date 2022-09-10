import Layout from "./layout";
function Character({
  title = "Unknown",
  name = "Unknown",
  image1 = "",
  image2 = "",
  stats1 = "???",
  stats2 = "???",
  stats3 = "???",
  path = "",
  skill1desc,
  skill2desc,
  skill3desc,
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
            <div className="card-stat-desc dimmed">1x</div>
            {stats1}
          </div>
          <div className="card-stat card-stat-2">
            <div className="card-stat-desc dimmed">3x</div>
            {stats2}
          </div>
          <div className="card-stat card-stat-3">
            <div className="card-stat-desc dimmed">5x</div>
            {stats3}
          </div>
        </div>
        {(skill1desc || skill2desc || skill3desc) && (
          <div className="card-section-title">Skills</div>
        )}{" "}
        <div className="card-skills">
          {skill1desc && (
            <div className="card-skill card-skill-center">
              <div className="card-skill-name dimmed">Center</div>
              {skill1desc}
            </div>
          )}
          {skill2desc && (
            <div className="card-skill card-skill-live">
              <div className="card-skill-name dimmed">Live</div>
              {skill2desc}
            </div>
          )}
          {skill3desc && (
            <div className="card-skill card-skill-support">
              <div className="card-skill-name dimmed">Support</div>
              {skill3desc}
            </div>
          )}
        </div>
        {/* <div class="soon dimmed">more info coming soon!</div> */}
      </div>
      <img
        className="card-image1"
        src={`https://assets.enstars.link/assets/${image1}`}
      />
      <img
        className="card-image2"
        src={`https://assets.enstars.link/assets/${image2}`}
      />
      <img
        className="card-image-bg"
        src={`https://assets.enstars.link/assets/${image2}`}
      />
    </Layout>
  );
}

export default Character;
