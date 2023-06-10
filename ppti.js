function eljuego(jugador1,jugador2){

    switch(jugador1 + jugador2){
        case "piedratijeras":
            return "P-T piedra rompe tijeras gana el jugador 1 ";
        case "papelpiedra":
            return "P-P papel cubre piedra gana el jugador 1";
        case "tijeraspapel":
            return "T-P tijeras rompen papel gana el jugador 1";
         case "tijeraspiedra":
             return "T-P piedra rompe tijeras gana el jugador 2 ";
        case "piedrapapel":
             return "P-P papel cubre piedra gana el jugador 2";
         case "papeltijeras":
            return "P-T tijeras rompen papel gana el jugador 2";
        case "piedrapiedra":
            return "P-P los jugadores empataron ";
        case "papelpapel":
             return "P-P los jugadores empataron ";
        case "tijerastijeras":
            return "T-T los jugadores empataron";
            
    }
}