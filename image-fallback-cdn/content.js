let imgs = document.getElementsByTagName('img');
let sourceTags = document.getElementsByTagName('source');

  postloadImages = () =>{
    chrome.storage.sync.get(['isImageFallbackPluginEnabled'], function(items) {
      if(items && (items.isImageFallbackPluginEnabled !== undefined && items.isImageFallbackPluginEnabled !== false)) {
        // get currrent host and map to fallback host
        let fallbackHosturl = '';
        // const currentHosturl = `${window.location.protocol}//${window.location.hostname}`;
        // let currentHosturlArray = currentHosturl.split('.');
        
        // for (i = 0; i < currentHosturlArray.length; i++) {
        //   if(currentHosturlArray[i].includes('stream')) {
        //     currentHosturlArray[i] = 'uat-2';
        //   }
        // }

        // let indexQa = currentHosturlArray.indexOf('qa');
        // if (indexQa !== -1) currentHosturlArray.splice(indexQa, 1);
        // let indexUat = currentHosturlArray.indexOf('uat');
        // if (indexUat !== -1) currentHosturlArray.splice(indexUat, 1);
        // fallbackHosturl = currentHosturlArray.join('.');

        // if (fallbackHosturl === '') {
        //   console.log("No image fallback host found for ", currentHosturl);
        //   return;
        // }

        // here delete
        fallbackHosturl = 'https://cdn-europe.uat-2.heliosnissan.net';
        // here delete end

        // for img tag
        for (imgItem of imgs) {
          let hostname = '';
          let pathname = '';
          let url = '';
          if(imgItem && imgItem.src !== '') {
            url = new URL(imgItem.src);
            hostname = url.hostname === '' ? `${window.location.protocol}//${window.location.hostname}` : `${url.protocol}//${url.hostname}`;
            pathname = url.pathname;
            // const response = await fetch(`${hostname}${pathname}`);
            // if(!response.ok) { // image not available, so fetch from imageFallbackHost
              const fallbackImageResponse = fetch(`${fallbackHosturl}${url.pathname}`);
              imgItem.src = `${fallbackHosturl}${url.pathname}`;
            // }
          }
        }
        // for source tag
        for (sourceItem of sourceTags) {
          let hostname = '';
          let pathname = '';
          let url = '';
          if(sourceItem && sourceItem.srcset !== '') {
            const temppath = sourceItem.srcset.includes(',') ? sourceItem.srcset.split(',')[0] : sourceItem.srcset.split(' ')[0];
            url = new URL(temppath, `${window.location.protocol}//${window.location.hostname}`);
            hostname = url.hostname === '' ? `${window.location.protocol}//${window.location.hostname}` : `${url.protocol}//${url.hostname}`;
            pathname = url.pathname;
            // response = await fetch(`${hostname}${pathname}`);
            // if(!response.ok) { // image not available, so fetch from imageFallbackHost
              const fallbackImageResponse = fetch(`${fallbackHosturl}${url.pathname}`);
              sourceItem.srcset = `${fallbackHosturl}${url.pathname}`;
            // }
          }
        }
      }
      // else {
      //   console.log('image fallback plugin not enabled');
      // }
    });
  }

  postloadImages();
