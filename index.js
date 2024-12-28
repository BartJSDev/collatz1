var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")


let len = canvas.width/50

function Collatz(n) {

    let sequence = [n]

    do {

        if (n % 2 === 0) {

            n = n / 2

        } else {

            n = n * 3 + 1
        }

        sequence.push(n)


    } while (n !== 1)

    return sequence

}

function Draw(){

    for(var n = 1 ; n < 500 ; n++){

        let sequence = Collatz(n)
        let x = canvas.width/2
        let y = canvas.height/2
        let lineWidth = 8
        let angle = -Math.PI/2
        let nx = 0
        let ny = 0
     

        c.beginPath()
        c.strokeStyle = "hsl(" + n % 360 * 10 + ",100%,50%)"
        
        for(var i = 0 ; i < sequence.length ; i++){
    
            c.moveTo(x,y)
    
            if(sequence[i] % 2 === 0){
    
               angle = angle + Math.PI/7
                
            }else{
    
                angle = angle - Math.PI/4
            }

            nx = x + len * Math.cos(angle)
            ny = y + len * Math.sin(angle)
    
            c.lineWidth = lineWidth
            c.lineTo(nx , ny)
            c.stroke()

            x = nx 
            y = ny

            lineWidth *= .9
    
        }
    
        c.closePath()
        c.restore()
    }

   

}

Draw()