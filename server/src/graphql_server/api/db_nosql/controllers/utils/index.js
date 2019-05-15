export const errorHttp = status => {
    switch (status) {
        case 301:
            return 'se está haciendo una redirección de una página a otra';
            break;
        case 302:
            return 'se está haciendo una redirección de una página a otra';
            break;
        case 400:
            return 'la solicitud tiene una sintaxis incorrecta';
            break;
        case 403:
            return 'se ha denegado el acceso a la solicitud';
            break;
        case 404:
            return 'la página que se está tratando de cargar no se ha encontrado';
            break;
        case 500:
            return 'error interno del servidor';
            break;
        case 504:
            return 'el tiempo de espera para devolver la página web se ha agotado';
            break;
        case 509:
            return 'se ha superado el límite de ancho de banda disponible';
            break;
        default:
            return null;
            break;
    }
};