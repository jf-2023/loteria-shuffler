"use client";
import Image from "next/image";
import { useState } from "react";

export function Deck () {
    const [count, setCount] = useState(0);
    const [isPlay, setIsPlay] = useState(false);

    const cards = [
        {"number": 1, "name": "El Gallo", "image": "el-gallo.webp"},
        {"number": 2, "name": "El Diablo", "image": "el-diablito.webp"},
        {"number": 3, "name": "La Dama", "image": "la-dama.webp"},
        {"number": 4, "name": "El Catrín", "image": "el-catrin.webp"},
        {"number": 5, "name": "El Paraguas", "image": "el-paraguas.webp"},
        {"number": 6, "name": "El Corazón", "image": "el-corazon.webp"},
        {"number": 7, "name": "La Bandera", "image": "la-bandera.webp"},
        {"number": 8, "name": "El Candelabro", "image": "el-candelabro.webp"},
        {"number": 9, "name": "La Bota", "image": "la-bota.webp"},
        {"number": 10, "name": "La Muerte", "image": "la-muerte.webp"},
        {"number": 11, "name": "La Pera", "image": "la-pera.webp"},
        {"number": 12, "name": "El Árbol", "image": "el-arbol.webp"},
        {"number": 13, "name": "El Melón", "image": "el-melon.webp"},
        {"number": 14, "name": "El Valiente", "image": "el-valiente.webp"},
        {"number": 15, "name": "La Estrella", "image": "la-estrella.webp"},
        {"number": 16, "name": "El Soldado", "image": "el-soldado.webp"},
        {"number": 17, "name": "La Mano", "image": "la-mano.webp"},
        {"number": 18, "name": "La Luna", "image": "la-luna.webp"},
        {"number": 19, "name": "El Pino", "image": "el-pino.webp"},
        {"number": 20, "name": "El Cielo", "image": "el-cielo.webp"},
        {"number": 21, "name": "La Sirena", "image": "la-sirena.webp"},
        {"number": 22, "name": "La Corona", "image": "la-corona.webp"},
        {"number": 23, "name": "El Barril", "image": "el-barril.webp"},
        {"number": 24, "name": "El Lobo", "image": "el-lobo.webp"},
        {"number": 25, "name": "La Chalupa", "image": "la-chalupa.webp"},
        {"number": 26, "name": "El Nopal", "image": "el-nopal.webp"},
        {"number": 27, "name": "La Balsa", "image": "la-balsa.webp"},
        {"number": 28, "name": "El Borracho", "image": "el-borracho.webp"},
        {"number": 29, "name": "La Balanza", "image": "la-balanza.webp"},
        {"number": 30, "name": "El Alacrán", "image": "el-alacran.webp"},
        {"number": 31, "name": "La Palma", "image": "la-palma.webp"},
        {"number": 32, "name": "El Gato", "image": "el-gato.webp"},
        {"number": 33, "name": "La Rata", "image": "la-rata.webp"},
        {"number": 34, "name": "El Gavilán", "image": "el-gavilan.webp"},
        {"number": 35, "name": "La Maceta", "image": "la-maceta.webp"},
        {"number": 36, "name": "El Cotorro", "image": "el-cotorro.webp"},
        {"number": 37, "name": "El Camarón", "image": "el-camaron.webp"},
        {"number": 38, "name": "La Cazuela", "image": "la-cazuela.webp"},
        {"number": 39, "name": "El Pájaro", "image": "el-pajaro.webp"},
        {"number": 40, "name": "La Bici", "image": "la-bici.webp"},
        {"number": 41, "name": "El Pez", "image": "el-pez.webp"},
        {"number": 42, "name": "La Jarra", "image": "la-jarra.webp"},
        {"number": 43, "name": "El Pan", "image": "el-pan.webp"},
        {"number": 44, "name": "La Jirafa", "image": "la-jirafa.webp"},
        {"number": 45, "name": "El Hombre", "image": "el-hombre.webp"},
        {"number": 46, "name": "La Mula", "image": "la-mula.webp"},
        {"number": 47, "name": "El Barrilito", "image": "el-barrilito.webp"},
        {"number": 48, "name": "La Guitarra", "image": "la-guitarra.webp"},
        {"number": 49, "name": "El Pito", "image": "el-pito.webp"},
        {"number": 50, "name": "La Cuna", "image": "la-cuna.webp"},
        {"number": 51, "name": "El Trompo", "image": "el-trompo.webp"},
        {"number": 52, "name": "La Pinta", "image": "la-pinta.webp"},
        {"number": 53, "name": "El Cuchillo", "image": "el-cuchillo.webp"},
        {"number": 54, "name": "La Virgen", "image": "la-virgen.webp"}
      ];
    
      function handleClick() {
        for (let i=0; i < cards.length - 1; i++) {
            if (count === cards.length - 1) {
                setCount(0);
            } else {
                changeCard();
            } 
        }
        setIsPlay(!isPlay);
      };

      function changeCard() {
        setCount(count + 1);
        setTimeout(handleClick, 2000)
      }

    return (
        <div>
            <div className="cardsContainer" >
                <Image 
                src={"/loteria-cards/" + cards[count].image}
                alt={cards[count].name}
                width={309}
                height={447}
                priority
                />
            </div>

            <button className="playButton" onClick={handleClick}>
                {isPlay ? "Pause" : "Play"}
            </button>
        </div>
    );
};