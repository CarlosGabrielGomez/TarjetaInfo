import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Body } from "../Body/Body";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="Card">
        <Image
          source="/src/assets/images/zapatilla.jpg"
          description="zapatilla negra"
        />

        <Body title={"ShadowX Pro"} description={"La ShadowX Pro es una zapatilla deportiva diseñada para ofrecer un rendimiento superior, sin sacrificar estilo. Su color negro elegante y su tecnología avanzada la convierten en la opción ideal para deportistas y personas activas que buscan comodidad, durabilidad y un diseño moderno."} />

        <Button
          text="Leer más"
          link="https://www.nike.com.ar/"
        />
      </div>
    </div>
  );
};

export { Card };
