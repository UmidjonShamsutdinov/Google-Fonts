function importGoogleFont(data:any) {
    const fragment = document.createDocumentFragment()
    data.slice(200, 400).map((e:any)=>{
        var link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css?family=' + e.family;
        link.rel = 'stylesheet';
        fragment.appendChild(link)
    })
    document.head.appendChild(fragment);
}



export {importGoogleFont}