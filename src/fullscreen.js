const STATICS = {
  isFSE: ['fullscreenElement', 'mozFullscreenElement', 'webkitFullscreenElement', 'msFullscreenElement'],
  FSE: ['fullscreenEnabled', 'mozFullScreenEnabled', 'webkitFullscreenEnabled', 'msFullscreenEnabled'],
  FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
  RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
  EFS: ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
}

const isFullscreen = () => {
  let isFSE = STATICS.isFSE, result = false

  isFSE.forEach(item => {
    if(item in document) {
      return document[item] ? result = true : result = false
    }
  })

  return result
}

const isFullscreenEnabled = () => {
  let FSE = STATICS.FSE, result = false

  FSE.forEach(item => {
    if(item in document) {
      return document[item] ? result = true : result = false
    }
  })

  return result
}

const listenFullScreen = (callback) => {
  let FSC = STATICS.FSC

  FSC.forEach((item) => {
    if(('on' + item ) in document){
      document.addEventListener(tmp, callback, false)
    }
  })
}

const requestFullScreen = (selector = null) => {
  let docElm, RFS = STATICS.RFS

  if(selector)
    docElm = document.querySelector(selector)
  else
    docElm = document.documentElement;

  RFS.forEach((item) => {
    if(item in docElm){
      return docElm[item]()
    }
  })

}

const exitFullScreen = () => {
  let EFS = STATICS.EFS

  EFS.forEach((item) => {
    if(item in document){
      return document[item]();
    }
  })
}

var fullscreen = {
  is: isFullscreen,
  enabled: isFullscreenEnabled,
  listen: listenFullScreen,
  request: requestFullScreen,
  exit: exitFullScreen
}

export default fullscreen