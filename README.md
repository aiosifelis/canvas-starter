### HTML5 Canvas game starter

HTML5 Canvas game starter is a helper to start an HTML5 Canvas game.

### Prerequisites

-   A styled `<canvas />` element in the `<body />`

### Features

-   Mouse tracking
-   Key press detection (Arrows and Spacebar)
-   Automatic resize of canvas
-   Game loop
-   Access to context drawing API

### Usage

```
var game  = Game()

game.setFrame(function () {
    //draw stuff
})


game.start()
```

#### Reference (Game function)

##### Params

| Param      | Default                               | Description                        |
| ---------- | ------------------------------------- | ---------------------------------- |
| screen     | `document.querySelector('canvas')`    | The `<canvas />` element           |
| width      | document.documentElement.clientWidth  | The canvas width                   |
| height     | document.documentElement.clientHeight | The canvas height                  |
| background | `#ffffff`                             | The background color of the canvas |

##### Returns

The `Game` function returns a reference to the [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) API. Additionally a few helper params and methods are attached.

| Param    | Type    | Value                        | Description                                        |
| -------- | ------- | ---------------------------- | -------------------------------------------------- |
| mouse    | Object  | `{ down: false, x: 0, y: 0}` | The mouse state                                    |
| UP       | Boolean | `false`                      | If the UP Arrow key is pressed                     |
| DOWN     | Boolean | `false`                      | If the DOWN Arrow key is pressed                   |
| LEFT     | Boolean | `false`                      | If the LEFT Arrow key is pressed                   |
| RIGHT    | Boolean | `false`                      | If the RIGHT Arrow key is pressed                  |
| SPACE    | Boolean | `false`                      | If the SPACE Arrow key is pressed                  |
| setFrame | method  |                              | What is going to happen in each frame of animation |
| start    | method  |                              | start the game loop                                |

#### [Examples](https://github.com/aiosifelis/game-starter/tree/master/examples)

-   Fullscreen

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Canvas Starter Fullscreen</title>

        <style>
            * {
                margin: 0;
                padding: 0;
            }

            canvas {
                position: fixed;
                width: 100%;
                height: 100%;
            }
        </style>
    </head>
    <body>
        <canvas></canvas>
        <script src="../lib/game.js"></script>

        <script>
            var game = Game({
                background: '#000000'
            })

            game.setFrame(function() {
                game.fillStyle = '#007700'
                game.rect(20, 20, 100, 100)
                game.fill()
            })

            game.start()
        </script>
    </body>
</html>
```

-   Fixed Size

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Canvas Starter Fixed Screen</title>

        <style>
            * {
                margin: 0;
                padding: 0;
            }

            canvas {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                width: 640px;
                height: 480px;
            }
        </style>
    </head>
    <body>
        <canvas></canvas>
        <script src="../lib/game.js"></script>

        <script>
            var game = Game({
                background: '#000000',
                width: 640,
                height: 480
            })

            game.setFrame(function() {
                game.fillStyle = '#007700'
                game.rect(20, 20, 100, 100)
                game.fill()
            })

            game.start()
        </script>
    </body>
</html>
```
