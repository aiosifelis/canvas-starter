### HTML5 Canvas game starter

HTML5 Canvas game starter is a helper to start an HTML5 Canvas game.

### Prerequisites

-   A styled `<canvas />` element in the `<body />`

### Features

-   Mouse tracking
-   Key press detection (Arrows and Spacebar)
-   Automatic resize of canvas
-   Game loop
-   Access to [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/) API

### Basic Usage

```
var game  = Game()

game.setFrame(function () {
    //draw stuff
    // game.fillStyle
})


game.start()
```

### Reference (Game function)

The `Game` function accepts the following configuration parameters and returns a full reference to the [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) API along side with some additional properties and methods.

##### Accepts

| Param      | Default Value                         | Description                        |
| ---------- | ------------------------------------- | ---------------------------------- |
| screen     | `document.querySelector('canvas')`    | The `<canvas />` element           |
| width      | document.documentElement.clientWidth  | The canvas width                   |
| height     | document.documentElement.clientHeight | The canvas height                  |
| background | `#ffffff`                             | The background color of the canvas |

##### Returns

| Prop      | Type    | Default Value | Description                           |
| --------- | ------- | ------------- | ------------------------------------- |
| mouseX    | Boolean | false         | The x coordinate of the mouse pointer |
| mouseY    | Boolean | false         | The y coordinate of the mouse pointer |
| mouseDown | Boolean | false         | If the mouse is pressed               |
| UP        | Boolean | false         | If the UP Arrow key is pressed        |
| DOWN      | Boolean | false         | If the DOWN Arrow key is pressed      |
| LEFT      | Boolean | false         | If the LEFT Arrow key is pressed      |
| RIGHT     | Boolean | false         | If the RIGHT Arrow key is pressed     |
| SPACE     | Boolean | false         | If the SPACE key is pressed           |

| Method    | Accepts  | Returns /Default | Description                                                |
| --------- | -------- | ---------------- | ---------------------------------------------------------- |
| setFrame  | Function | void             | What is going to happen in each frame of animation         |
| start     |          | void             | Start the game loop                                        |
| isPressed | Number   | Boolean          | Pass the keyCode from an event to check is this is pressed |

#### Examples

-   [Fullscreen](https://github.com/aiosifelis/game-starter/blob/master/examples/fullscreen.html)
-   [Fixed Size](https://github.com/aiosifelis/game-starter/blob/master/examples/fixed-size.html)
-   [Mouse Detection](https://github.com/aiosifelis/game-starter/blob/master/examples/mouse-detection.html)
-   [Arrows Pressed](https://github.com/aiosifelis/game-starter/blob/master/examples/arrows-pressed.html)
