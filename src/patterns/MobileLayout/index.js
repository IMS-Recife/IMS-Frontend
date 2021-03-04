import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "react-intl";
import MobileToolbar from "./MobileToolbar";
import { MaterialUISelect } from "../../components/Selects";

const Div = styled.div`
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

function MobileLayout({ show, children }) {
  return (
    <Div>
      {show ? (
        <div>
          <a
            href="http://www.recife.pe.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
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
          >
            <MaterialUISelect />
          </div>

          <div
            style={{
              display: "inline-block",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
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
              03/01/2020 23h59
            </span>
          </div>
          <MobileToolbar />
          {children}
        </div>
      ) : null}
    </Div>
  );
}

export default injectIntl(MobileLayout);

MobileLayout.defaultProps = {
  show: true,
};
MobileLayout.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
