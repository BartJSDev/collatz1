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
     

        c.save()
        c.translate(x,y)
        c.beginPath()
        c.strokeStyle = "hsl(" + n % 360 * 10 + ",100%,50%)"
        
        for(var i = 0 ; i < sequence.length ; i++){
    
            c.moveTo(0,0)
    
            if(sequence[i] % 2 === 0){
    
                c.rotate(-Math.PI/7)
                
            }else{
    
                c.rotate(Math.PI/4)
            }
    
            c.lineWidth = lineWidth
            c.lineTo(0 , -len)
            c.stroke()
            c.translate(0 , -len)

            lineWidth *= .9
    
        }
    
        c.closePath()
        c.restore()
    }

   

}

Draw()