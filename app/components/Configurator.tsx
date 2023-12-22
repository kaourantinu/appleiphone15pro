import { useState } from "react";
import { CustomizationProvider, useCustomization } from "../contexts/Customization";
import styles from '../styles/configurator.module.css'

function Configurator(){
  const {
    iphoneColors,
    iphoneColor,
    setIphoneColor
  } = useCustomization();

  const stockageQuantities = [
        {
          name: "128Go",
          price: 1229,
        },
        {
          name: "256Go",
          price: 1359,
        },
        {
          name: "512Go",
          price: 1609,
        },
        {
          name: "1To",
          price: 1859,
        },
      ];

  const [stockageQuantity, setStockageQuantity] = useState(stockageQuantities[0])

  return (
    <CustomizationProvider>
    <h4 className={styles.itemtitle}>Choisissez votre coloris</h4>
    <div id={styles.configurator}>
          {iphoneColors.map((item: any, index: any) => (
            <div
              key={index}
              className={`${styles.color} ${
                item.color === iphoneColor.color ? `${styles.coloractive}` : ""
              }`}
              onClick={() => setIphoneColor(item)}
            >
              <div
                className={styles.colordot}
                style={{ backgroundColor: item.color }}
              />
              <div className={styles.colorlabel}>{item.name}</div>
            </div>
          ))}
    </div>
    <h4 className={styles.itemtitle}>Choisissez la quantité de stockage</h4>
    <div id={styles.configurator2}>
    {stockageQuantities.map((item, index) => (
            <div
              key={index}
              className={`${styles.stockagequantity} ${
                item.name === stockageQuantity.name ? `${styles.quantityactive}` : ""
              }`}
              onClick={() => setStockageQuantity(item)}
            >
            <div className={styles.colorlabel}>{item.name}</div>
            </div>
          ))}
    </div>
    <div id={styles.responsivebuyingoptions}>
        <div id={styles.buyingoptions}>
                <p id={styles.priceannonce}>Prix</p>
                <p id={styles.price}>{stockageQuantity.price} €</p>
        </div>
        <button id={styles.buyingbutton}>Acheter</button>
    </div>
    </CustomizationProvider>
  );
};

export default Configurator;