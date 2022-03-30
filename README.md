# anon-files-api
### AnonFiles Unofficial API
This unofficial Nodejs API was created to make uploading and downloading files from &lt;anonfiles.com> simple and effective for programming in Nodejs. The goal of the project is to create an intuitive library for anonymous file sharing.

### Installing

To install the library is as simple as running

```js
npm install anon-files-api
```
```js
const AnonFiles = require('anon-files-api')
```

# Usage
### get(id)
Gets info about a file.
### Example:
```js
var info = await getInfo(id);
```
### upload(file_path)
Uploads a file to AnonFiles
### Example:
```js
var response = await AnonFiles.upload(file_path);
```
#### response:
```json
{"status":true,
    "data":{
    "file":{"url":
    {"full":"https://anonfiles.com/fileID/fileName","short":"https://anonfiles.com/fileID"}
    ,"metadata":{"id":"fileID","name":"fileName",
    "size":{"bytes":458820,"readable":"458.82 KB"}
    }}}}
```

### download(id, fullPath)
Downloads a file from AnonFiles
use full path you want include filename
### Example:
```js
var response = await AnonFiles.download(id, './Downloads/photo.jpg');
```
#### response:
```json
{"status":"OK","file_path":"./Downloads/photo.jpg"}
error:
{ status: 'FAILED', message: 'error message' }
```

## License
```
The MIT License (MIT)
Copyright (c) 2022 anon-files.github.io developers
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```