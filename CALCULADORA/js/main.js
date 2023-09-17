const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => { //PARA CADA VES QUE SE PRESIONE EL CLICK
    boton.addEventListener("click", () =>{ // crear variable boton 
        const botonApretado= boton.textContent; //Declarar como constante cuando se ejecuta el click
        if (boton.id==="C") {//evaluar si el boton bresionado ha sido el C
            pantalla.textContent="0"; // vovler todo el contenido de la pantalla a 0
            return; // finalizar todo el for
        }
        if(boton.id==="borrar"){ // if para borrar el ultimo número
            if (pantalla.textContent.length===1 || pantalla.textContent==="Error!") { // mide si solo hay un numero para borrar
                pantalla.textContent=0;
            }else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if (boton.id==="igual") {
            try {
                pantalla.textContent=eval(pantalla.textContent)//ESTA FUNCION EVALUARA EL CONTENIDO DE LA PANTALLA Y LA PROCESARA COMO UNA OPERACIÓN PARA LUEGO IMPRIMIRLA COMO UN NUMERO RESULTANTE DEL CÁLCULO
            } catch (error) {
                pantalla.textContent="Error!";
            }
            return;
        }

        if (pantalla.textContent==="0" || pantalla.textContent==="Error!"){ //Para reemplazar el 0 al inicio de cualquier iteración
            pantalla.textContent=botonApretado;
        }else{
            pantalla.textContent+=botonApretado;//acumular lo numeros en pantalla
        }

    })
});