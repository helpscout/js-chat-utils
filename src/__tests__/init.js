// Mock MediaElement methods to stop JSDOM from complaining
window.HTMLMediaElement.prototype.load = () => {}
window.HTMLMediaElement.prototype.play = () => {}
window.HTMLMediaElement.prototype.pause = () => {}
window.HTMLMediaElement.prototype.addTextTrack = () => {}
