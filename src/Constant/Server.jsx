const protocol = "https://";
const serverIp = "ipf-sql-srv.vbest.local";
const appName =
  process.env.NODE_ENV === "production" ? "/BarcodeApi" : "/BarcodeApiDebug";

// const protocol = "https://";
// const serverIp = "localhost";
// const port = ":44309";
// const appName = "";

export let SERVER = protocol + serverIp + appName + "/api/v1";

export let SERVER_HUB = protocol + serverIp + appName;

export const AUTH_SERVER =
  process.env.NODE_ENV === "production"
    ? "https://ipf-sql-srv.vbest.local/DemandApi/api"
    : "https://ipf-sql-srv.vbest.local/DemandApiDebug/api";
