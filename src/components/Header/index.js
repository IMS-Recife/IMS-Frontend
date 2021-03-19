import React from "react";
import { FormattedMessage } from "react-intl";
import useLayout from "../../contexts/layout";

const Header = () => {
  const { lastTimeUpdated } = useLayout();

  return (
    <>
      <div id="header">
        <a href="http://www.recife.pe.gov.br/" target="_blank" rel="noreferrer">
          <img
            src="/prefeiturarecife.png"
            alt="prefeitura do recife"
            width="70px"
            height="70px"
            className="rounded"
            style={{
              marginTop: "20px",
              marginLeft: "40px",
              display: "inline-block",
            }}
          />
        </a>
        <div
          style={{
            position: "absolute",
            marginTop: "25px",
            marginLeft: "20px",
            display: "inline-block",
          }}
        />
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "25px",
          }}
          className="mt-5 mt-sm-3"
        >
          <span
            style={{
              font: "700 10px Roboto, sans-serif",
              color: "#87c2ff",
              display: "block",
              textAlign: "center",
            }}
            className="mt-5 mt-sm-3"
          >
            <FormattedMessage id="LAST_UPDATE" />
          </span>
          <span
            style={{
              marginTop: "5px",
              font: "500 18px Roboto, sans-serif",
              display: "block",
              textAlign: "center",
            }}
          >
            {lastTimeUpdated.toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
