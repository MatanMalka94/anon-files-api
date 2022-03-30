const fs = require('fs')
const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));
var FormData = require('form-data');



class AnonFiles {

    async getInfo(id) {
        const response = await fetch(`https://api.anonfiles.com/v2/file/${id}/info`);
        return await response.json();
    }

    async upload(path) {
        let data = new FormData();
        data.append('file', fs.createReadStream(path));
        const response = await fetch('https://api.anonfiles.com/upload', {
            method: 'POST',
            body: data
        });
        return (await response.json())

    }

    async download(fileURL, path) {
        if (!/((http|https):\/\/)(www.)?anonfiles\.com\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/.test(fileURL)) {
            fileURL = (await this.get(fileURL))['data']['file']['url']['full'];
        }
        const response = await fetch(fileURL);
        var data = await response.text();
        let url = this.extractRawURL(data);
        path = path || this.extractFileName(data)

        const fileDownload = await fetch(url);
        const fileStream = fs.createWriteStream(path);
        return await new Promise((resolve, reject) => {
            fileDownload.body.pipe(fileStream);
            fileDownload.body.on('error', reject({ status: 'FAILED' }))
            fileStream.on('finish', resolve({ status: 'OK', file_path: path }));
        }).catch(err => { return err });

    }

    extractRawURL(websiteData) {
        return websiteData.match(/https:\/\/cdn-[0-9]{3}.anonfiles.com\/[aA-zZ0-9]+\/[aA-zZ0-9]+-[aA-zZ0-9]+\/[^"]+/)[0];
    }

    extractFileName(websiteData) {
        return websiteData.match(/text-center text-wordwrap">[^<]+/)[0].replace('text-center text-wordwrap">', '');
    }
}

module.exports = new AnonFiles()