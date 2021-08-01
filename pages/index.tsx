import CustomButton from "../components/CustomButton/CustomButton";

import { Appearances } from "../constants/appearances";
import { IconPositions } from "../constants/icons";

export default function Home(): JSX.Element {
  return (
    <div>
      <CustomButton appearance={Appearances.PRIMARY} arrow={IconPositions.DOWN}>
        {" "}
        TEXT{" "}
      </CustomButton>
    </div>
  );
}
