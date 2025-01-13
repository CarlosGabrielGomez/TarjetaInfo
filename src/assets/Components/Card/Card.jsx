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
          description="estoy ciego"
        />

        <Body title={"ShadowX Pro"} description={"La ShadowX Pro es una zapatilla deportiva diseñada para ofrecer un rendimiento superior, sin sacrificar estilo. Su color negro elegante y su tecnología avanzada la convierten en la opción ideal para deportistas y personas activas que buscan comodidad, durabilidad y un diseño moderno."} />

        <Button
          text="Presione para más información "
          link="https://www.youtube.com/"
        />
      </div>
    </div>
  );
};

export { Card };
