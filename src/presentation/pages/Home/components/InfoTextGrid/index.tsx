import { InfoTextGridDiv } from "./style";

interface IInfoTextGrid {
  title: string;
  image: string;
}

export default function InfoTextGrid({ title, image }: IInfoTextGrid) {
  return (
    <InfoTextGridDiv>
      <img src={image} alt={title} />
      <span>{title}</span>
    </InfoTextGridDiv>
  );
}
