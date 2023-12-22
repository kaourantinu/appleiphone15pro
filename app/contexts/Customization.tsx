import { createContext, useContext, useState, ReactNode } from "react";

interface CustomizationContextProps {
  iphoneColors: { color: string; name: string }[];
  iphoneColor: { color: string; name: string };
  setIphoneColor: React.Dispatch<React.SetStateAction<{ color: string; name: string }>>;
}

const iphoneColors = [
  {
    color: "#b8b2a6",
    name: "Titane naturel",
  },
  {
    color: "#444955",
    name: "Titane bleu",
  },
  {
    color: "#E4E2DB",
    name: "Titane blanc",
  },
  {
    color: "#444442",
    name: "Titane noir",
  },
];

const CustomizationContext = createContext<CustomizationContextProps | undefined>(undefined);

export const CustomizationProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [iphoneColor, setIphoneColor] = useState(iphoneColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        iphoneColors,
        iphoneColor,
        setIphoneColor
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error("useCustomization must be used within a CustomizationProvider");
  }
  return context;
};
