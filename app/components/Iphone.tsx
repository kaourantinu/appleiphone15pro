import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomization } from "../contexts/Customization";
import { useResponsive } from "../contexts/Responsive3D";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
  };
  materials: {
    ["Aluminum_-_Polished"]: THREE.MeshStandardMaterial;
    ["Aluminum_-_Satin"]: THREE.MeshStandardMaterial;
    ["Glass_-_Heavy_Color"]: THREE.MeshStandardMaterial;
    ["Glass_-_Light_Color"]: THREE.MeshStandardMaterial;
    ["Plastic_-_Translucent_Matte_White"]: THREE.MeshStandardMaterial;
    ["Titanium_-_Polished"]: THREE.MeshStandardMaterial;
    ["Titanium_-_Satin"]: THREE.MeshStandardMaterial;
    ["Aluminum_-_Bead_Blasted"]: THREE.MeshStandardMaterial;
  };
};

function Iphone(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("./models/iphone.glb") as GLTFResult;
    const iphoneColor  = useCustomization();

    const { isMobile, isTablet } = useResponsive();

    return (
    <group {...props} dispose={null}>
      <group scale={isMobile ? 0.020 : (isTablet ? 0.025 : 0.035)} rotation={[-1.5, 0, 0.8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
        >
            <meshStandardMaterial {...materials["Aluminum_-_Polished"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
        >
            <meshStandardMaterial {...materials["Aluminum_-_Satin"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Glass_-_Heavy_Color"]}
        >
            <meshStandardMaterial {...materials["Glass_-_Heavy_Color"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Glass_-_Light_Color"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Plastic_-_Translucent_Matte_White"]}
        >
            <meshStandardMaterial {...materials["Plastic_-_Translucent_Matte_White"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Titanium_-_Polished"]}
        >
            <meshStandardMaterial {...materials["Titanium_-_Polished"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
        >
            <meshStandardMaterial {...materials["Titanium_-_Satin"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Aluminum_-_Bead_Blasted"]}
        >
            <meshStandardMaterial {...materials["Aluminum_-_Bead_Blasted"]} color={iphoneColor.iphoneColor.color}/>
        </mesh>
      </group>
    </group>
  );
}

export default Iphone;

useGLTF.preload("./models/iphone.glb");