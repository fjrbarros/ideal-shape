import * as Styles from "./CheckList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ICheckListProps {
  text: string;
}

export const CheckList = ({ text }: ICheckListProps) => (
  <Styles.ChecklistItem>
    <FontAwesomeIcon icon={faCheck} />
    {text}
  </Styles.ChecklistItem>
);
