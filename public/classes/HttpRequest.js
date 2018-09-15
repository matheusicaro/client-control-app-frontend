class HttpRequest {

    static get(url, params = {}){
        return this.request('GET', url, params);
    }
    static post(url, params = {}){
        return this.request('POST', url, params);
    }
    static put(url, params = {}){
        return this.request('PUT', url, params);
    }
    static delete(url, params = {}){
        return this.request('DELETE', url, params);
    }

    static request(method, url, params = {} ){

        return new Promise( (resolve, reject)=> {
            
            let ajax = new XMLHttpRequest();
            ajax.open(method, url);

            ajax.onerror = event => {
                reject(e);
            }

            ajax.onload = event => {
                let obj = {};
    
                try{
                    obj = JSON.parse(ajax.responseText);
                }catch(e){
                    reject(e);
                }

                resolve(obj);
            }
            ajax.setRequestHeader('Content-Type', 'application/json');
            ajax.send(JSON.stringify(params));
        });
    }
}