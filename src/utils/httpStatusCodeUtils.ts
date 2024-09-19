export const isInformationalResponse = (responseStatusNumber: number) => {
    return (responseStatusNumber >= 100 && responseStatusNumber < 200);
}

export const isSuccessResponse = (responseStatusNumber: number) => {
    return (responseStatusNumber >= 200 && responseStatusNumber < 300);
}

export const isRedirectionResponse = (responseStatusNumber: number) => {
    return (responseStatusNumber >= 300 && responseStatusNumber < 400);
}

export const isClientErrorResponse = (responseStatusNumber: number) => {
    return (responseStatusNumber >= 400 && responseStatusNumber < 500);
}

export const isServerErrorResponse = (responseStatusNumber: number) => {
    return (responseStatusNumber >= 500 && responseStatusNumber < 600);
}