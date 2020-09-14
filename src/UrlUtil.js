
class UrlUtil {

  anchorPrefix = 'anchor-';

  getHash = () => {
    return window.location.hash;
  };

  getHashParameter = (index) => {
    const hash = window.location.hash;
    let paramIndex = 0;
    const hashParts = hash.split('/');
    for (let i = 0; i < hashParts.length; i++) {
      const hashPart = hashParts[i];
      if (hashPart.indexOf(':') === 0) {
        if (paramIndex === index) {
          return hashPart.substring(1);
        }
        paramIndex++;
      }
    }
    return undefined;
  };

  getQueryParameter = (key, url) => {
    const href = url ? url : window.location.href;
    const reg = new RegExp('[?&]' + key + '=([^&#]*)', 'i');
    const matches = reg.exec(href);
    const encodedParameter = matches && matches.length > 1 ? matches[1] : null;
    let decodedParameter = null;
    if (encodedParameter) {
      const encodedParameterWithSpaces = encodedParameter.replace(/\+/g, ' ');
      decodedParameter = decodeURIComponent(encodedParameterWithSpaces);
    }
    return decodedParameter;
  };

  // iterateHashParameters = (callback) => {
  //   const hash = window.location.hash;
  //   const hashParts = hash.split('/');
  //   for (let i = 0; i < hashParts.length; i++) {
  //     const hashPart = hashParts[i];
  //     if (hashPart.indexOf(':') === 0) {
  //       const hashParameter = hashPart.substring(1);
  //       callback(hashParameter);
  //     }
  //   }
  // };

  // getPathParameters = (url) => {
  //   // https://www.example.com/foo/bar
  //   let path = window.location.pathname;
  //   if (path) {
  //     if (path.charAt(0) === '/') {
  //       path = path.substring(1);
  //     }
  //     return path.split('/');
  //   } else {
  //     return [];
  //   }
  // };

  // getPathParameter = (index, pathParameters) => {
  //   if (pathParameters && index < pathParameters.length) {
  //     return pathParameters[index];
  //   } else {
  //     return undefined;
  //   }
  // };

  // /**
  //  * This method will scroll the browser to any anchor identified in the URL based on 
  //  * the scheme whereby the anchor is a hash parameter starting with "anchor-". For
  //  * example, calling this for the URL http://abc.com/#/view/:param-a/:anchor-foo would
  //  * result in scrolling to the anchor with ID 'foo'.
  //  * This method should be called after the anchor is rendered.
  //  * e.g. http://localhost:3000/#/view/:pascal-p/:Pascal+Growth%20Profile%20-%20P%20levels/:anchor-c5e2c34d-dfb8-ff51-5cfc-b174a1579ccc
  //  */
  // scrollToAnchor = () => {
  //   this.iterateHashParameters((hashParameter) => {
  //     if (hashParameter && hashParameter.indexOf(this.anchorPrefix) === 0) {
  //       const anchorId = hashParameter.substring(this.anchorPrefix.length);
  //       const element = document.getElementById(anchorId);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }
  //   });
  // };

  // preserveAnchorId = (pathname) => {
  //   let newPathname = pathname;
  //   this.iterateHashParameters((hashParameter) => {
  //     if (hashParameter && hashParameter.indexOf(this.anchorPrefix) === 0) {
  //       newPathname = newPathname + '/:' + hashParameter;
  //     }
  //   });
  //   return newPathname;
  // };

  // appendAnchorReference = (url, anchorId) => {
  //   return url + '/:' + this.anchorPrefix + anchorId;
  // };

}

export default new UrlUtil();
