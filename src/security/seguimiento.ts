

export const seguimientoMiddleware = async (req:any, res:any, next:any) => {
    var codigoSeguimiento = req.headers['codseguimiento']; 
    let data = codigoSeguimiento? JSON.parse(Buffer.from(codigoSeguimiento, 'base64').toString()):{
        urlinit:req.host+req.url,
        date:Date.now()
    };
    console.log('nueva peticion:', req.host+req.url)
    console.log('seguimiento:', data)
    let codigoBase64 = Buffer.from(JSON.stringify(data)).toString('base64');
    req.seguimiento = codigoBase64;
    return next();
}
