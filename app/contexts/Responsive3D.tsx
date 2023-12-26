import { createContext, useContext, ReactNode } from "react";

interface ResponsiveContextProps {
  isMobile: boolean;
  isTablet: boolean;
  ViewportHeight : number | false  ;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1024;
const ViewportHeight = typeof window !== 'undefined' && window.innerHeight

const ResponsiveContext = createContext<ResponsiveContextProps | undefined>(undefined);

export const ResponsiveProvider: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <ResponsiveContext.Provider
      value={{
        isMobile,
        isTablet,
        ViewportHeight
      }}
    >
      {props.children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};
