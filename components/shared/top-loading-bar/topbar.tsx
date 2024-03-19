import style from "./topbar.module.scss";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopLoadingbar = () => {
  return (
    <div>
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};

export default TopLoadingbar;
