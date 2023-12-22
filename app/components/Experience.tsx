import {
    OrbitControls,
    PresentationControls,
  } from "@react-three/drei";
import IphoneCustomization from "./IphoneCustomization";
import { ResponsiveProvider } from "../contexts/Responsive3D";
  
  const Experience = () => {
    return (
      <ResponsiveProvider>
        <OrbitControls autoRotate={true}/>
        <IphoneCustomization/>
      </ResponsiveProvider>
    );
  };
  
  export default Experience;