export const getVersion = (v?: string) => v || "0.0.0-dev";
export const version = getVersion(process.env.PKG_VERSION);
