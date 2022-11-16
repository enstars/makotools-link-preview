function Layout({ children, path }) {
  return (
    <div
      className="wrapper type-character"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#12141c",
        width: 1200,
        height: 630,
        fontFamily: "Inter",
      }}
    >
      {children}
      <div
        style={{
          display: "flex",
          background: "#212736",
          width: 1200,
          height: 50,
          position: "absolute",
          top: 580,
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          textTransform: "uppercase",
          fontWeight: 500,
          letterSpacing: "0.1em",
          padding: "15px 25px",
          borderTop: "3px solid rgb(44, 51, 71)",
        }}
      >
        <span style={{ fontFamily: "Sora", fontWeight: 700 }}>MakoTools</span>
        <span style={{ color: "rgb(142, 151, 173)" }}>
          stars.ensemble.moe{path}
        </span>
      </div>
    </div>
  );
}

export default Layout;
