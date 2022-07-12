function jsonp({url, params, cb}) {
    function urlParse() {
        let src = '';
        for(let param of params) {
            // 仅遍历 params 独有的属性
            if(params.hasOwnProperty(param)) {
                src += `${param}=${params[key]}`;
            }
        }
        src += `&cb=${cb}`;
        return `${url}?${src}`;
    }
    return new Promise((resolve, reject) => {
        const scriptFile = document.createElement('script');
        scriptFile.src = urlParse();
        // document.body.appendChild(scriptFile); 之后，服务端会返回 cb(data) 来执行 window 上的 cb
        window[cb] = (data) => {
            resolve(data);
            document.removeChild(scriptFile);
        }
        document.body.appendChild(scriptFile);
    })
}