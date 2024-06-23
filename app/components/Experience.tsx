import {
    OrbitControls,
  } from "@react-three/drei";
import IphoneCustomization from "./IphoneCustomization";
import { ResponsiveProvider } from "../contexts/Responsive3D";
  
  const Experience = () => {
    return (
      <ResponsiveProvider>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} autoRotate={true}/>
        <IphoneCustomization rotation={[0, 0, 0]}/>
      </ResponsiveProvider>
    );
  };
  
  export default Experience;