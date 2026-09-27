export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#0d1b2a",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginBottom: "1rem" }}>
        Il nostro nuovo sito è in arrivo
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "500px", opacity: 0.85 }}>
        Stiamo lavorando per portarvi qualcosa di nuovo. Torna presto a trovarci!
      </p>
      <p style={{ marginTop: "2rem" }}>
        Nel frattempo scrivici a{" "}
        <a href="mailto:info@associazione.it" style={{ color: "#ffffff", textDecoration: "underline" }}>
          info@associazione.it
        </a>
      </p>
    </div>
  );
}
