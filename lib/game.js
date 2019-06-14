function Game(_config) {
    this.config = Object.assign(
        {
            screen: document.querySelector('canvas'),
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            background: '#ffffff',
            frame: function() {}
        },
        _config
    )

    this.fullScreen =
        _config.width === undefined && _config.height === undefined

    this.ctx = this.config.screen.getContext('2d')
    this.fit(this.config.width, this.config.height)
}

Game.prototype.start = function() {
    window.requestAnimationFrame(Game.prototype.start.bind(this))
    var w = this.fullScreen
        ? document.documentElement.clientWidth
        : this.config.width
    var h = this.fullScreen
        ? document.documentElement.clientHeight
        : this.config.height
    this.fit(w, h)
    this.config.frame()
}

Game.prototype.setFrame = function(frame) {
    this.config.frame = frame
}

Game.prototype.fit = function(w, h) {
    this.config.screen.width = w
    this.config.screen.height = h

    this.ctx.fillStyle = this.config.background
    this.ctx.fillRect(0, 0, w, h)
}

Game.prototype.getScreen = function() {
    return this.config.screen
}
