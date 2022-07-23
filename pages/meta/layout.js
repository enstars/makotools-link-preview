function Layout({ children, path }) {
  return (
    <>
      <div className="wrapper type-character">
        {children}
        <div className="footer">
          <span className="makotools">MakoTools</span>
          <span className="url dimmed">stars.ensemble.moe{path}</span>
        </div>
      </div>
    </>
  );
}

export default Layout;
