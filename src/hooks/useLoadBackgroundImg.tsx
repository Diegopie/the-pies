import { useState } from "react";

interface IUseLoadBackgroundImgProps { 
  imgClass: string,
  loadingImgPath: string
}

type LoadBackgroundImgReturnType = [
  string, // loadingImgPath
  string, // backgroundImg
  string, // smallBackImg
  React.Dispatch<React.SetStateAction<string>> // setSmallBackImg
];

export type ImgState = {
  stateValue: string,
  setState: (arg: string) => string | void
}

const useLoadBackgroundImg = (props: IUseLoadBackgroundImgProps): LoadBackgroundImgReturnType => {

  // * Destructure Props
  const { imgClass, loadingImgPath } = props;

  // * Set Data In State
  const [ backgroundImg, ] = useState<string>(imgClass);

  const [ smallBackImg, setSmallBackImg ] = useState<string>(`App-Background-Pulse ${imgClass}-small`);

  // Return as an array for in case multiple hooks need to be used in a component
  return [loadingImgPath, backgroundImg,  smallBackImg, setSmallBackImg];
}

export default useLoadBackgroundImg;