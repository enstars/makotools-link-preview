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
        // width={540}
        width={1240}
        height={600}
        style={{
          position: "absolute",
          top: -20,
          left: 0,
          objectFit: "cover",
          filter: "blur(30px) saturate(140%)",
        }}
        src={`https://assets.enstars.link/assets/${image2}`}
      />

      <div
        style={{
          background: "rgb(25, 28, 39, 0.75)",
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
            // justifyContent: "space-between",
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          Stats
          <span style={{ fontWeight: 500, fontSize: 16, color: "#8e97ad" }}>
            (Da + Vo + Pf)
          </span>
        </div>
        <div style={{ display: "flex", width: "100%", gap: 12 }}>
          {[
            { count: 1, stat: stats1, color: "rgb(255, 255, 255, 0.2)" },
            // { count: 3, stat: stats2, color: "#2c3347" },

            { count: 5, stat: stats2, color: "rgb(255, 255, 255, 0.2)" },
          ].map((s) => (
            <div
              key={s.count}
              style={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                background: s.color,
                padding: "8px 11px",
                fontSize: 40,
                fontWeight: 500,
                borderRadius: 8,
                display: "flex",
                alignItems: "flex-end",
                marginLeft: s.count === 5 ? 12 : 0,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  color: "#8e97ad",
                  marginRight: 12,
                  display: "flex",
                }}
              >
                {s.count}x
              </div>
              <span style={{ fontWeight: 700 }}>{s.stat}</span>
            </div>
          ))}
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
