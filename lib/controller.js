function Controller(game) {
    this.game = game
    this.pointer = {
        down: false,
        x: 0,
        y: 0
    }

    this.keyState = {}

    this.keys = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32
    }

    document.body.addEventListener(
        'mousedown',
        function() {
            this.pointer.down = true
        }.bind(this)
    )

    document.body.addEventListener(
        'mouseup',
        function() {
            this.pointer.down = false
        }.bind(this)
    )

    document.body.addEventListener(
        'mousemove',
        function(e) {
            var gameRect = this.game.getScreen().getBoundingClientRect()
            this.pointer.x = this.game.fullScreen
                ? e.clientX
                : Math.round(e.pageX - gameRect.left)
            this.pointer.y = this.game.fullScreen
                ? e.clientY
                : Math.round(e.pageY - gameRect.top)
        }.bind(this)
    )

    document.body.addEventListener(
        'keydown',
        function(e) {
            this.keyState[e.keyCode] = true
        }.bind(this)
    )

    document.body.addEventListener(
        'keyup',
        function(e) {
            delete this.keyState[e.keyCode]
        }.bind(this)
    )
}

Controller.prototype.keyPressed = function(key) {
    return this.keyState[key] !== undefined
}

Controller.prototype.UP = function() {
    return this.keyState[this.keys.UP]
}

Controller.prototype.DOWN = function() {
    return this.keyState[this.keys.DOWN]
}

Controller.prototype.LEFT = function() {
    return this.keyState[this.keys.LEFT]
}

Controller.prototype.RIGHT = function() {
    return this.keyState[this.keys.RIGHT]
}

Controller.prototype.SPACE = function() {
    return this.keyState[this.keys.SPACE]
}
