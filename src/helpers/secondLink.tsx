function importGoogleFont2(fontFamily: any) {
    return `@import url(https://fonts.googleapis.com/css?family=${encodeURIComponent(fontFamily).replace(/%20/g, "+")}:wght@100;200;300;400;500;600;700;800;900&display=swap)`
}


export {importGoogleFont2}