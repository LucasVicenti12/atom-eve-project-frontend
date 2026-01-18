export function baseURL(): string | undefined {
    if (import.meta.env.PROD) {
        return undefined;
    } else {
        return "http://localhost:8080/";
    }
}