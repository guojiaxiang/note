function ajax(option={}) {
    let {
        url = null,
        method = 'get',
        async = true,
        cache = true,
        data = null,
        dataType = 'json',
        success = new Function(),
        error = new Function(),
    }=option;
    if (Object.prototype.toString.call(data)==='[object Object]') {
        var str = ``;
        for (var key in data) {
            str += `${key}=${data[key]}&`
        }
        str = str.slice(0,str.length-1);
        //str = str.replace(/&$/g,'');
        if (method === 'get') {
            url += '?'+str;
        }
    }
    if (cache === false && method === 'get') {
        if (url.includes('?')) {
            url += `&_=${Math.random()}`
        }else {
            url += `?_=${Math.random()}`
        }
    }
    let xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.open(method,url,async);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (/^(2|3)\d{2}$/.test(xhr.status)) {
                    var newData = null;
                    if (dataType === 'json') {
                        try{
                            newData = JSON.parse(xhr.responseText);
                        }catch (e) {
                            newData = xhr.responseText;
                        }
                    }else if (dataType === 'xml') {
                        newData = xhr.responseXML;
                    }
                    resolve(newData);
                }else if (/^[45]\d{2}$/.test(xhr.status)) {
                    reject(xhr.statusText);
                }
            }
        };
        if (method === 'post' && data instanceof Object) {
            data = JSON.stringify(data);
            xhr.send(data);
            return;
        }
        xhr.send(data);
    });

}