// Dichiarazione minima per evitare di dover installare @types/node
// solo per leggere una variabile d'ambiente in questo file.
declare const process: { env: Record<string, string | undefined> };

export default function middleware(request: Request) {
  const url = new URL(request.url);

  // Non reindirizzare mai la pagina di manutenzione stessa,
  // altrimenti si creerebbe un loop infinito.
  if (url.pathname === "/coming-soon.html") {
    return;
  }

  const isMaintenance = process.env.MAINTENANCE_MODE === "true";

  if (isMaintenance) {
    return Response.redirect(new URL("/coming-soon.html", request.url), 307);
  }

  // Nessuna azione: la richiesta prosegue normalmente verso il sito React.
}

export const config = {
  // Applica il middleware a tutte le pagine.
  matcher: "/((?!assets|coming-soon.html).*)",
};
