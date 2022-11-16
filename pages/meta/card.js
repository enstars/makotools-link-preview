import Layout from "components/Layout";
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
      <img
        width={500}
        height={600}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          filter: "blur(30px)",
          objectFit: "cover",
        }}
        src={`https://assets.enstars.link/assets/${image2}`}
      />

      <div
        style={{
          background: "rgb(25, 28, 39)",
          color: "rgb(211, 214, 224)",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          height: 580,
          width: 730,
          top: 0,
          left: 440 + 32,
          padding: 36,
        }}
      >
        <div style={{ fontSize: 45, fontWeight: 700, fontFamily: "Sora" }}>
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#8e97ad",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 12.8,
            marginBottom: 4.8,
            fontWeight: 700,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Stats
          <span style={{ fontWeight: 500, fontSize: 16, color: "#8e97ad" }}>
            (Da + Vo + Pf)
          </span>
        </div>
        <div style={{ display: "flex", width: "100%", gap: 12 }}>
          <div
            style={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              background: "#212736",
              padding: "8px 11px",
              fontSize: 32,
              fontWeight: 500,
              borderRadius: 8,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div style={{ fontSize: 12.8, color: "#8e97ad", marginRight: 12 }}>
              1x
            </div>
            {stats1}
          </div>
          <div
            style={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              background: "#2c3347",
              padding: "8px 11px",
              fontSize: 32,
              fontWeight: 500,
              borderRadius: 8,
              display: "flex",
            }}
          >
            <div className="card-stat-desc dimmed">3x</div>
            {stats2}
          </div>
          <div
            style={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              background: "#3a4259",
              padding: "8px 11px",
              fontSize: 32,
              fontWeight: 500,
              borderRadius: 8,
              display: "flex",
            }}
          >
            <div className="card-stat-desc dimmed">5x</div>
            {stats3}
          </div>
        </div>
        {/* {(skill1desc || skill2desc || skill3desc) && (
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
        </div> */}
      </div>
      <img
        width={440}
        height={550}
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          borderRadius: 16,
          objectFit: "cover",
          border: "solid 3px #2c3347",
          background: "#212736",
        }}
        src={`https://assets.enstars.link/assets/${image2}`}
      />
      <div
        style={{
          width: 206,
          height: 256,
          position: "absolute",
          top: 313,
          left: 253,
          borderRadius: 8,
          objectFit: "cover",
          border: "solid 3px #2c3347",
          transform: "rotate(4deg)",
          background: "#212736",
        }}
      />
      <img
        width={200}
        height={250}
        style={{
          position: "absolute",
          top: 316,
          left: 256,
          borderRadius: 8,
          objectFit: "cover",
          // border: "solid 3px #2c3347",
          transform: "rotate(4deg)",
          background: "#212736",
        }}
        src={`https://assets.enstars.link/assets/${image1}`}
      />
    </Layout>
  );
}

export default Character;
