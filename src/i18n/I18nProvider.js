/* eslint-disable react/prop-types */
import React from "react";
import { useRouter } from "next/router";

import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/pt";

import enMessages from "./messages/en";
import ptMessages from "./messages/ptbr";

const allMessages = {
  en: enMessages,
  ptbr: ptMessages,
};

export default function I18nProvider({ children }) {
  const { locale } = useRouter();
  let messages;
  if (locale === "pt-br") {
    messages = allMessages.ptbr;
  } else {
    messages = allMessages[locale];
  }
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
