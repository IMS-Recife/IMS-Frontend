import { injectIntl } from "react-intl";
import React from "react";
import Slider from "react-slick";
import Layout from "../components/Layout";

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
      <div className="h-48 grid grid-cols-2 border-b border-gray-100 shadow-xl">
        <div className="w-full ml-2 flex items-start justify-content-center flex-col">
          <h1 className="font-bold text-secondary-green">
            Integrated Management System - IMS
          </h1>
          <span className="text-lg text-primary-text">
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
              href="#"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Sobre o IMS
            </a>
            <a
              href="#"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Destaques
            </a>
            <a
              href="#"
              className="font-medium font-bold uppercase text-gray-500 hover:text-gray-900 hover:no-underline"
            >
              Contato
            </a>
            <a
              href="#"
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
          backgroundImage: `url("https://via.placeholder.com/1836x672")`,
        }}
      >
        <div className="my-auto ml-48 w-3/6">
          <h1 className="font-bold text-5xl mb-4 text-left text-primary-text">
            Planejamento Urbano Integrado baseado em evidências
          </h1>
          <button className="bg-secondary-green px-4 py-3 text-lg font-semibold uppercase text-white rounded-full hover:bg-secondary-green-darker">
            Explorar o Mapa
          </button>
        </div>
      </section>
      <section className="container py-8 flex">
        <div className="w-full h-96 mr-16 flex items-center border border-red-300"></div>
        <div className="border border-red-300">
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
              <button className="bg-secondary-green px-4 py-3 text-lg font-semibold uppercase text-white rounded-full hover:bg-secondary-green-darker">
                SAIBA MAIS SOBRE O CITINOVA
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container border border-red-300">
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          Para Quem
        </h1>
        <div className="grid grid-cols-3 border border-red-300">
          <div className="flex items-center flex-col">
            <div className="w-32 h-32 bg-red-300" />
            <span className="text-lg">Poder Executivo</span>
            <p className="text-base">
              Prefeitos/as, secretariado, gerentes e técnicos terão seus
              trabalhos facilitados pelo IMS ao atualizar ou acessar dados
              georreferenciados sobre a requalificação de passeios públicos de
              toda cidade de maneira integrada.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="w-32 h-32 bg-red-300" />
            <span className="text-lg">Poder Legislativo</span>
            <p className="text-base">
              Vereadores e suas equipes poderão utilizar o IMS em seu trabalho
              de supervisão do executivo, por exemplo.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="w-32 h-32 bg-red-300" />
            <span className="text-lg">Sociedade Civil</span>
            <p className="text-base">
              Membros da sociedade civil em geral terão à sua disposição uma
              plataforma de controle social e participação na qual será possível
              acessar de maneira conjunta dados sobre a requalificação de
              passeios públicos em seus territórios.
            </p>
          </div>
        </div>
      </section>
      <section className="container border border-red-300">
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          MACROÁREAS
        </h1>
        <div className="grid grid-cols-4 border border-red-300 gap-4">
          <div className="bg-secondary-green h-48 rounded-lg">Planos</div>
          <div className="bg-secondary-green h-48 rounded-lg">Projetos</div>
          <div className="bg-secondary-green h-48 rounded-lg">Economia</div>
          <div className="bg-secondary-green h-48 rounded-lg">Covid</div>
        </div>
      </section>
      <section className="container border border-red-300">
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          Nossas Redes
        </h1>
        <div className="grid grid-cols-4 border border-red-300 gap-4">
          <div className="bg-secondary-green h-48 rounded-lg">Twitter</div>
          <div className="bg-secondary-green h-48 rounded-lg">Facebook</div>
          <div className="bg-secondary-green h-48 rounded-lg">Youtube</div>
          <div className="bg-secondary-green h-48 rounded-lg">Github</div>
        </div>
      </section>
      <section className="container border border-red-300 bg-primary-gray my-12">
        <h1 className="font-bold text-4xl uppercase mb-4 text-left text-primary-text">
          Destaques
        </h1>
        <div className="border-b border-black p-8">
          <Slider {...settings}>
            <div>
              <img src="https://via.placeholder.com/1300x450" />
              <span>00 mês, 2021</span>
              <p>
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
            <div>
              <img src="https://via.placeholder.com/1300x450" />
              <span>00 mês, 2021</span>
              <p>
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
            <div>
              <img src="https://via.placeholder.com/1300x450" />
              <span>00 mês, 2021</span>
              <p>
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
            <div>
              <img src="https://via.placeholder.com/1300x450" />
              <span>00 mês, 2021</span>
              <p>
                Slap the dog because cats rule mice yet dead stare with ears
                cocked walk on car leaving trail of paw prints on hood and
                windshield.
              </p>
            </div>
          </Slider>
        </div>
        <div className="grid grid-cols-3 border border-red-300 my-8 gap-4 p-8">
          <div>
            <img src="https://via.placeholder.com/420x170" />
            <span>00 mês, 2021</span>
            <p>
              Slap the dog because cats rule mice yet dead stare with ears
              cocked walk on car leaving trail of paw prints on hood and
              windshield.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/420x170" />
            <span>00 mês, 2021</span>
            <p>
              Slap the dog because cats rule mice yet dead stare with ears
              cocked walk on car leaving trail of paw prints on hood and
              windshield.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/420x170" />
            <span>00 mês, 2021</span>
            <p>
              Slap the dog because cats rule mice yet dead stare with ears
              cocked walk on car leaving trail of paw prints on hood and
              windshield.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default injectIntl(Home);
