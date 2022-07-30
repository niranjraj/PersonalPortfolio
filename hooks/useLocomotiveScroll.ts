import { useEffect, useRef } from "react";
import  {
  LocomotiveScrollOptions,
  Scroll,
} from "react-locomotive-scroll";


type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
} & Omit<LocomotiveScrollOptions, "el">;

