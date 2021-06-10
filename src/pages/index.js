import { injectIntl } from "react-intl";
import React from "react";
import Slider from "react-slick";
import { FaCity } from "react-icons/fa";
import { RiMoneyDollarCircleLine, RiVirusFill } from "react-icons/ri";
import { BsFileEarmark } from "react-icons/bs";
import Layout from "../components/Layout";
import { politians, crowd, law, mapImage } from "../assets/contentImages";
import logoIMS from "../assets/logoIMS.svg";
import {
  ariesLogo,
  gefLogo,
  onuLogo,
  portoDigitalLogo,
  ministerioLogo,
} from "../assets/organizationsLogos";

import {
  twitterIcon,
  facebookIcon,
  youtubeIcon,
  githubIcon,
} from "../assets/socialMediaIcons";

const Home = () => {
  const settings = {
    arrows: false,
    dots: true,
    dotsClass: "slider-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <div className="h-48 grid grid-cols-2 border-b border-gray-100 shadow-xl sticky top-0 z-20 bg-white">
        <div className="w-full ml-2 flex items-start justify-content-center flex-col">
          <h1 className="font-bold text-secondary-green text-4xl">
            Integrated Management System - IMS
          </h1>
          <span className="text-xl text-primary-text">
            Planejamento Urbano e Gerência Integrada das Cidades
          </span>
        </div>
        <div className="mr-4 flex flex-column">
          <div className="ml-auto mt-12 w-50">
            <input
              className="border-gray-500 border w-full p-2 text-primary outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Buscar"
            />
          </div>
          <div className="flex items-stretch justify-between mt-auto mb-2">
            <a
              href="#sobre"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Sobre o IMS
            </a>
            <a
              href="#destaques"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Destaques
            </a>
            <a
              href="#contato"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Contato
            </a>
            <a
              href="#parceiros"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Parceiros
            </a>
          </div>
        </div>
      </div>
      <section
        className="flex"
        style={{
          height: "680px",
          backgroundImage: `url(${mapImage})`,
        }}
      >
        <div className="my-auto ml-48 w-3/6">
          <h1 className="font-bold text-5xl mb-4 text-left text-primary-text">
            Planejamento Urbano Integrado baseado em evidências
          </h1>
          <button
            type="button"
            className="bg-secondary-green px-4 py-3 text-lg uppercase text-white rounded-full hover:bg-secondary-green-darker"
          >
            Explorar o Mapa
          </button>
        </div>
      </section>
      <section
        id="sobre"
        className="container py-8 flex"
        style={{ scrollMarginTop: "14rem" }}
      >
        <img src={logoIMS} height="135px" width="135px" alt="logoIMS" />
        <div className=" ml-5">
          <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
            Sobre o IMS
          </h1>
          <div className="flex flex-col">
            <p className="text-base">
              O Integrated Management System- IMS é um Sistema de Gestão
              Georreferenciada Integrada, ferramenta de apoio ao planejamento e
              à gestão da cidade do Recife. O sistema busca auxiliar na
              elaboração e monitoramento de planos, oferecendo uma base de dados
              unificada da cidade, aberta e atualizada, possibilitando
              cruzamentos e análises georreferenciadas, buscando qualificar as
              tomadas de decisão através da disponibilização dos dados. O IMS
              conta ainda com recursos para acompanhamento dos projetos, sua
              execução e a medição de indicadores globais e metas de longo prazo
              do Plano Recife 500 anos.
            </p>
            <p className="text-base mt-4">
              Este sistema faz parte do CITinova, um projeto multilateral de
              abrangência nacional, com atividades específicas em Recife e
              Brasília, realizado pelo Ministério da Ciência, Tecnologia,
              Inovações e Comunicações (MCTIC), com financiamento do Fundo
              Global para o Meio Ambiente (GEF, na sigla em inglês),
              implementação pelo Programa das Nações Unidas para o Meio Ambiente
              (PNUMA) e execução de instituições parceiras.
            </p>
            <div className="mx-auto mt-8">
              <button
                type="button"
                className="bg-secondary-green px-4 py-3 text-lg uppercase text-white rounded-full hover:bg-secondary-green-darker"
              >
                SAIBA MAIS SOBRE O CITINOVA
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          Para Quem?
        </h1>
        <div className="grid grid-cols-3">
          <div className="flex items-center flex-col">
            <img src={politians} alt="Políticos" className="w-32 h-32" />
            <span className="text-xl font-bold mt-2 font-raleway">
              Poder Executivo
            </span>
            <p className="text-base mt-4 text-justify">
              Prefeitos/as, secretariado, gerentes e técnicos terão seus
              trabalhos facilitados pelo IMS ao atualizar ou acessar dados
              georreferenciados sobre a requalificação de passeios públicos de
              toda cidade de maneira integrada.
            </p>
          </div>
          <div className="flex items-center flex-col ml-4">
            <img src={law} alt="Lei" className="w-32 h-32" />
            <span className="text-xl font-bold mt-2 font-raleway">
              Poder Legislativo
            </span>
            <p className="text-base mt-4 text-justify">
              Vereadores e suas equipes poderão utilizar o IMS em seu trabalho
              de supervisão do executivo, por exemplo.
            </p>
          </div>
          <div className="flex items-center flex-col ml-4">
            <img src={crowd} alt="pessoas" className="w-32 h-32" />
            <span className="text-xl font-bold mt-2 font-raleway">
              Sociedade Civil
            </span>
            <p className="text-base mt-4 text-justify">
              Membros da sociedade civil em geral terão à sua disposição uma
              plataforma de controle social e participação na qual será possível
              acessar de maneira conjunta dados sobre a requalificação de
              passeios públicos em seus territórios.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          MACROÁREAS
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-secondary-green h-48 w-64 rounded-xl flex flex-column items-center justify-center">
            <BsFileEarmark color="white" size="7rem" />
            <p className="text-white text-md font-bold mt-2 font-raleway text-3xl">
              Planos
            </p>
          </div>
          <div className="bg-secondary-green h-48 w-64 rounded-xl flex flex-column items-center justify-center">
            <FaCity color="white" size="7rem" />
            <p className="text-white text-md font-bold mt-2 font-raleway text-3xl">
              Projetos
            </p>
          </div>
          <div className="bg-secondary-green h-48 w-64 rounded-xl flex flex-column items-center justify-center">
            <RiMoneyDollarCircleLine color="white" size="7rem" />
            <p className="text-white text-md font-bold mt-2 font-raleway text-3xl">
              Economia
            </p>
          </div>
          <div className="bg-secondary-green h-48 w-64 rounded-xl flex flex-column items-center justify-center">
            <RiVirusFill color="white" size="7rem" />
            <p className="text-white text-md font-bold mt-2 font-raleway text-3xl">
              Covid-19
            </p>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="container mt-5"
        style={{ scrollMarginTop: "14rem" }}
      >
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          Nossas Redes
        </h1>
        <div className="flex flex-row justify-center space-x-20">
          <img src={twitterIcon} alt="twitter" width="110px" />
          <img src={facebookIcon} alt="facebook" width="110px" />
          <img src={youtubeIcon} alt="youtube" width="155px" />
          <img src={githubIcon} alt="github" width="110px" />
        </div>
      </section>
      <section
        id="destaques"
        className="container bg-primary-gray my-12"
        style={{ scrollMarginTop: "14rem" }}
      >
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          Destaques
        </h1>
        <div className="border-b border-black p-8">
          <Slider {...settings}>
            <div>
              <img
                src="https://via.placeholder.com/1300x450"
                alt="placeholder"
              />
              <span className="text-sm text-primary-text font-bold">
                00 mês, 2021
              </span>
              <p className="font-bold mt-2">
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1300x450"
                alt="placeholder"
              />
              <span className="text-sm text-primary-text font-bold">
                00 mês, 2021
              </span>
              <p className="font-bold mt-2">
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1300x450"
                alt="placeholder"
              />
              <span className="text-sm text-primary-text font-bold">
                00 mês, 2021
              </span>
              <p className="font-bold mt-2">
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1300x450"
                alt="placeholder"
              />
              <span className="text-sm text-primary-text font-bold">
                00 mês, 2021
              </span>
              <p className="font-bold mt-2">
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
          </Slider>
        </div>
        <div className="grid grid-cols-3 my-8 gap-4 p-8">
          <div>
            <img src="https://via.placeholder.com/420x170" alt="placeholder" />
            <span className="text-sm text-primary-text font-bold">
              00 mês, 2021
            </span>
            <p className="font-bold mt-2">
              Slap the dog because cats rule mice yet dead stare with ears
              cocked walk on car leaving trail of paw prints on hood and
              windshield.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/420x170" alt="placeholder" />
            <span className="text-sm text-primary-text font-bold">
              00 mês, 2021
            </span>
            <p className="font-bold mt-2">
              Slap the dog because cats rule mice yet dead stare with ears
              cocked walk on car leaving trail of paw prints on hood and
              windshield.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/420x170" alt="placeholder" />
            <span className="text-sm text-primary-text font-bold">
              00 mês, 2021
            </span>
            <p className="font-bold mt-2">
              Slap the dog because cats rule mice yet dead stare with ears
              cocked walk on car leaving trail of paw prints on hood and
              windshield.
            </p>
          </div>
        </div>
      </section>
      <section
        id="parceiros"
        className="container my-12"
        style={{ scrollMarginTop: "14rem" }}
      >
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-column m-4">
            <p className="font-semibold font-raleway text-primary-text">
              Financiador multilateral
            </p>
            <img src={gefLogo} alt="gef" height="80px" width="94px" />
          </div>
          <div className="flex flex-column m-4">
            <p className="font-semibold font-raleway text-primary-text">
              Agência implementadora
            </p>
            <img src={onuLogo} alt="ONU" height="80px" width="140px" />
          </div>
          <div className="flex flex-column m-4">
            <p className="font-semibold font-raleway text-primary-text">
              Agência executora
            </p>
            <img
              src={ministerioLogo}
              alt="Ministério da Ciência, Tecnologia e Inovações"
              height="100px"
              width="491px"
            />
          </div>
          <div className="flex flex-column m-4">
            <p className="font-semibold font-raleway text-primary-text">
              Parceiros coexecutores em Recife
            </p>
            <div className="flex flex-row flex-nowrap">
              <img src={ariesLogo} alt="Aries" height="80px" width="177px" />
              <img
                className="ml-4"
                src={portoDigitalLogo}
                alt="Porto Digital"
                height="80px"
                width="212px"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default injectIntl(Home);
