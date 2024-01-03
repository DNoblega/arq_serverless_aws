
export interface IAuthenticationBasicRepository {
    authenticated(usuario:string, password:string):Promise<{usuario:string}>;
}

export const buildBasicAuthenticationMiddleware = (authentication:IAuthenticationBasicRepository) => {
    return async (req:any, res:any, next:any) => {
        const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
        const [usuario, password] = Buffer.from(b64auth, 'base64').toString().split(':')
        let usuarioAuthenticated = null;
        try {
            usuarioAuthenticated = await authentication.authenticated(usuario, password);
        }catch (error) {
            res.set('WWW-Authenticate', 'Basic realm="401"') 
            res.status(401).send('Authentication required.')
        }
        if (usuarioAuthenticated) {
            req.authentication = {
                type: 'basic',
                identificador: usuarioAuthenticated.usuario,
                data: usuarioAuthenticated}
            return next()
        }
    };
}