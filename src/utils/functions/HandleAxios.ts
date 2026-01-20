import {AxiosError, AxiosPromise} from "axios";

const HTTP_STATUS_MESSAGES: Record<number, string> = {
    400: 'exceptions.BAD_REQUEST',
    401: 'exceptions.UNAUTHORIZED',
    403: 'exceptions.FORBIDDEN',
    404: 'exceptions.NOT_FOUND',
    500: 'exceptions.INTERNAL_SERVER_ERROR',
};

const UNEXPECTED_ERROR = "exceptions.UNEXPECTED_ERROR";

export function handleError<T>(e: unknown): T {
    if (e instanceof AxiosError) {
        const status = e.response?.status

        if(status){
            const defaultKey = HTTP_STATUS_MESSAGES[status] as string

            return {
                error: {
                    code: e?.response?.data?.error?.code ?? defaultKey
                }
            } as T;
        }
    }

    return {
        error: {
            code: UNEXPECTED_ERROR
        }
    } as T;
}

export async function handleRequest<T>(f: AxiosPromise<T>): Promise<T> {
    try {
        const r = await f

        return r.data as T
    } catch (e) {
        return handleError(e)
    }
}