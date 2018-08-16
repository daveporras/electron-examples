const constraints = {
  audio: false,
  video: {
    mandatory: {
      minWidth: 853,
      minHeight: 480,
      maxWidth: 853,
      maxHeight: 480
    }
  }
}

function handleSuccess (videoEl, stream) {
  videoEl.src = window.URL.createObjectURL(stream);
}

function handleError (error) {
  console.log('Camera error: ', error);
}

exports.init = (nav, videoEl) => {
  nav.getUserMedia = nav.webkitGetUserMedia;
  nav.getUserMedia(constraints, stream => handleSuccess(videoEl, stream), handleError)
}