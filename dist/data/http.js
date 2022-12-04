locGet(url, param = {}, x_api);
{
    delete param._rowKey;
    delete param._index;
    return new Promise((resolve, reject) => {
        service({
            method: 'get',
            url,
            x_api,
            params: param,
            cancelToken: new CancelToken((c) => {
            cancel = c;
        })}).then((res) => {
            if (res.status === 200) {
                resolve(res.data);
            } else {
            reject(res.data);
            }
            }).catch((error) => {
            reject(error)
        })
    })
}