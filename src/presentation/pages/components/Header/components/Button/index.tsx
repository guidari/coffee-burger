import { ButtonAction } from "./style";

export interface IButton {
  title?: string;
  image?: string;
}

export default function Button({ title, image }: IButton) {
  return (
    <ButtonAction disabled>
      <img src={image} alt={title ? title : "Icone"} />
      {title && <span>{title}</span>}
    </ButtonAction>
  );
}
