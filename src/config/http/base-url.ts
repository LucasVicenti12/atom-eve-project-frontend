export function baseUrl(): string | undefined {
    if (import.meta.env.PROD) {
        return undefined;
    } else {
        return "http://localhost:8080/";
    }
}