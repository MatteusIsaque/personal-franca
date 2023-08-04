"use client";

import Image from "next/image";
import Personal from "./../../img/personal-frança.png";
import antes from "./../../img/antes-depois.jpg";

import { ImWhatsapp } from "react-icons/im";
import { VscPreview } from "react-icons/vsc";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GiLeg, GiMuscleUp } from "react-icons/gi";
import { FiActivity } from "react-icons/fi";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

import { TbTargetArrow } from "react-icons/tb";
import { useState } from "react";

import Whatsapp from "./../../img/icons8-whatsapp-96.png";

import prova1 from "./../../img/prova-1.jpeg";
import prova2 from "./../../img/prova-2.jpeg";
import prova3 from "./../../img/prova-3.jpeg";
import prova4 from "./../../img/prova-4.jpeg";
import Link from "next/link";

export default function Index() {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const [questionFive, setQuestionFive] = useState(false);
  const [questionSix, setQuestionSix] = useState(false);
  const [politics, setPolitics] = useState(false);

  return (
    <main>
      <section
        id="inicio"
        className="grid grid-cols-2 px-[5%] min-h-[90vh] bg-black-800 gap-x-10 tablet:grid-cols-1 tablet:flex tablet:flex-col-reverse tablet:justify-center tablet:gap-y-20 mobile:gap-y-10"
      >
        <div className="text-white-900 flex items-center justify-center flex-col">
          <h1 className="text-5xl font-semibold mobile:text-4xl">
            <span id="yellow">Personal Online</span>, no horário que preferir,
            em <span id="yellow">qualquer lugar</span> que{" "}
            <span id="yellow">esteja</span>, gerando{" "}
            <span id="yellow">grandes resultados</span>!
          </h1>
          <p className="mt-2 text-2xl">
            Seus treinos <span id="yellow">não</span> estão{" "}
            <span id="yellow">gerando resultados?</span> pode ser causa de
            vários problemas impedindo seu crescimento e fazendo{" "}
            <span id="yellow">você perder tempo</span>, caso esse problema
            esteja te afetando, <span id="yellow">eu</span> estou pronto para{" "}
            <span id="yellow">te ajudar!</span>
          </p>

          <Link
            href="https://api.whatsapp.com/send?phone=558185092664"
            className="w-full"
            id="callToAction"
          >
            <button
              id="callToAction"
              // id="whatsapp"
              className="zapCall"
            >
              <ImWhatsapp className="mr-2" />
              Fale comigo agora mesmo!
            </button>
          </Link>
          <p className="text-white mt-2">
            Faça uma primeira chamada de vídeo/voz grátis!
          </p>
        </div>

        <div className=" flex justify-center items-center h-full w-full">
          <iframe
            className="w-[560px] tablet:w-full"
            height="515"
            src="https://www.youtube.com/embed/uic-GdWEgrg"
            title="YouTube video player"
          ></iframe>
        </div>
      </section>

      <section id="beneficios" className="bg-white py-14 my-20">
        <h3 className="text-center mb-20 text-5xl font-bold">
          EU VOU TE TRAZER RESULTADOS!
        </h3>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5 max-w-[90%] m-auto tablet:grid-cols-2 mobile:grid-cols-1">
          <div className="flex flex-col justify-center mobile:text-center mobile:items-center">
            <VscPreview className="text-6xl" />
            <h2 className="text-xl font-semibold py-1">
              Avaliação física completa
            </h2>
            <p>
              Ao se tornar um aluno(a), você receberá uma{" "}
              <span id="black"> avaliação física completa no início </span> e{" "}
              <span id="black">avaliações gratuitas a cada 3 meses</span>. Essas
              avaliações são essenciais para acompanhar seu progresso,
              personalizar seu treinamento e garantir que você alcance seus
              objetivos de maneira segura e eficaz.
            </p>
          </div>

          <div className="flex flex-col justify-center mobile:text-center mobile:items-center">
            <FaPeopleRobbery className="text-6xl" />
            <h2 className="text-xl font-semibold py-1">Correção postural</h2>
            <p>
              A postura que você adota no seu dia a dia pode ter um{" "}
              <span id="black">impacto significativo</span> no alinhamento do
              seu corpo. Ao corrigir adequadamente a sua postura, você poderá{" "}
              <span id="black">desfrutar de uma série de benefícios</span> tanto
              durante quanto fora dos treinos.
            </p>
          </div>

          <div className="flex flex-col justify-center mobile:text-center mobile:items-center">
            <FiActivity className="text-6xl" />
            <h2 className="text-xl font-semibold py-1">
              Treino adptado para individualidades biológicas
            </h2>
            <p>
              Nossos treinos são{" "}
              <span id="black">adaptados às suas necessidades</span>, levando em
              consideração <span id="black">deficiências</span> ou{" "}
              <span id="black">lesões</span> até{" "}
              <span id="black">condromalacia patelar</span>. Cuidados
              específicos são essenciais para evitar agravamentos e{" "}
              <span id="black">complicações irreversíveis</span>. Nosso objetivo
              é proporcionar um ambiente seguro e personalizado, cuidando de
              você de forma adequada para promover sua recuperação.
            </p>
          </div>

          <div className="flex flex-col justify-center mobile:text-center mobile:items-center">
            <FaWhatsappSquare className="text-6xl" />
            <h2 className="text-xl font-semibold py-1">
              Total disponibilidade para duvídas
            </h2>
            <p>
              Um <span id="black">diferencial</span> que ofereço é a
              disponibilidade do meu número para que você possa me{" "}
              <span id="black">fazer perguntas a qualquer momento do dia</span>.
              Estarei prontamente disponível para responder suas dúvidas e
              esclarecer qualquer pergunta que você tenha assim que possível.{" "}
              <span id="black">
                Sua satisfação e compreensão são prioridades para mim.
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-center mobile:text-center mobile:items-center">
            <BsCalendar3 className="text-6xl" />
            <h2 className="text-xl font-semibold py-1">
              Período e tempo dos treinos
            </h2>
            <p>
              Você terá exercícios estrategicamente distribuídos ao longo da
              semana, bem como dentro de cada treino. A{" "}
              <span id="black">
                distribuição correta dos exercícios é crucial
              </span>
              , pois erros nesse aspecto podem comprometer seus resultados.
              Estou aqui para garantir que sua rotina de exercícios seja
              adequadamente planejada,{" "}
              <span id="black">
                maximizando seu progresso e evitando quaisquer efeitos
                prejudiciais
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col justify-center mobile:text-center mobile:items-center">
            <GiMuscleUp className="text-6xl" />
            <h2 className="text-xl font-semibold py-1">
              Vantagens de personal online
            </h2>
            <p>
              Treine nos <span id="black">horarios que preferir</span>,
              independente do local onde você está, caso se mude, seus treinos
              continuam o mesmo, você não terá problemas pois todos os seus
              treinos <span id="black">estão no aplicativo</span>.
            </p>
          </div>
        </div>
      </section>

      <section
        id="testemunhos"
        className="bg-black-800 px-[5%] pt-24 flex gap-x-10 tablet:flex-col"
      >
        <div className="col-span-4 bg-black-100 h-full min-w-[50%]">
          <Image src={antes} alt="antes e depois" />
        </div>
        <div className="text-white-900 col-span-5 tablet:mt-10">
          <h4 className="text-5xl font-semibold mb-4">
            <span id="yellow">Tenha resultados</span> como eu tive!
          </h4>
          <p>
            Até 2019, eu enfrentava o desafio de ser muito magro,{" "}
            <span id="yellow">sendo alvo de piadas</span> como{" "}
            <span id="yellow">"se ficar de lado some"</span>. Mesmo praticando
            judô há 10 anos, eu tinha força, mas faltava o volume muscular que é
            tão importante para nossa <span id="yellow">autoestima</span>. Nos
            primeiros quatro meses de academia,{" "}
            <span id="yellow">consegui passar de 57 kg para 80 kg</span>.
            Comecei a me alimentar adequadamente, a dormir bem, a me hidratar e
            a treinar diariamente, sem faltar nenhum dia. Com seis meses de
            treino, a pandemia chegou e tudo parou. No entanto, eu tinha um saco
            de boxe em casa, o qual utilizei para fazer meus exercícios
            cardiovasculares.
            <br />
            <br /> Durante esse período, também{" "}
            <span id="yellow">
              montei pesos de cimento para continuar treinando e manter uma
              rotina
            </span>{" "}
            de exercícios durante o isolamento. Ao final da pandemia, eu estava
            pesando 75 kg e pude retornar à academia, onde consegui aumentar a
            carga e obter ainda mais resultados. Desde então, nunca parei de
            treinar e sempre cuidei da minha rotina de treino, alimentação e
            descanso. Hoje, estou com 88 kg, quase o dobro do meu peso anterior,
            e me sinto muito mais forte e volumoso. As pessoas muitas vezes nem
            me reconhecem, pois ficam surpresas com minha transformação.
            <br />
            <br />
            Dessa maneira, segui a carreira de personal, onde me especializei e
            estou disposto a <span id="yellow">ajudar você</span> que também{" "}
            <span id="yellow">deseja passar por uma transformação</span>,{" "}
            <span id="yellow">independente do seu ponto de partida</span> .
          </p>
        </div>
      </section>

      <section className="bg-black-800 px-[5%] py-24 mobile:py-12">
        <h5 className="text-center text-white-900 text-4xl font-semibold mb-8">
          Veja alguns <span id="yellow">resultados</span> dos{" "}
          <span id="yellow" className="underline">
            meus alunos
          </span>
        </h5>
        <div className="grid grid-cols-4 gap-x-10 tablet:grid-cols-2 tablet:gap-y-10 mobile:grid-cols-1">
          <div>
            <Image src={prova1} alt="prova 1" />
          </div>
          <div>
            <Image src={prova2} alt="prova 2" />
          </div>
          <div>
            <Image src={prova3} alt="prova 3" />
          </div>
          <div>
            <Image src={prova4} alt="prova 4" />
          </div>
        </div>

        <h5 className="text-center text-4xl text-white-900 mt-24 mb-4 font-semibold">
          Você está{" "}
          <span id="yellow" className="underline">
            extremamente perto
          </span>{" "}
          de alcançar essa{" "}
          <span id="yellow" className="underline">
            mudança de vida!
          </span>
        </h5>
        <Link
          href="https://api.whatsapp.com/send?phone=558185092664"
          className="w-full"
          id="callToAction"
        >
          <button id="callToAction" className="zapCall">
            <ImWhatsapp className="mr-2" />
            Passar pelo projeto de mudança
          </button>
        </Link>
      </section>

      <section
        id="duvidas"
        className="bg-white-900 px-[5%] py-24 mobile:px-[5%]"
      >
        <h6 className="text-3xl text-white font-bold mb-4 mobile:2">
          Perguntas frequentes
        </h6>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionFour === true ? "text-yellow-800" : "text-white"
            }`}
            onClick={() => {
              setQuestionFour(!questionFour);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionFour === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Como funciona o pagamento ?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionFour === true ? "block" : "hidden"
            }`}
          >
            O Pagamento pode ser feito mensalmente, mas caso contrate serviços
            com maior prazo, haverá um grande desconto, temos planos a partir de
            1 mês, 3 messes, 6 messes e 1 ano, planos personalizados podem ser
            feito entrando em contato conosco através do whatsapp.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionOne === true ? "text-yellow-800" : "text-white"
            }`}
            onClick={() => {
              setQuestionOne(!questionOne);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionOne === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Como funciona a supervisão do personal ?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionOne === true ? "block" : "hidden"
            }`}
          >
            Pelo aplicativo, será possivel supervisionar os dias em que o aluno
            realiza os treinos, sendo assim, caso necessário ele entrará em
            contato com o aluno para conversar sobre. As analises de postura e
            física podem ser feito por vídeo e por foto, assim conseguimos
            fornecer uma informação precisa do que deve ser feito
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionTwo === true ? "text-yellow-800" : "text-white"
            }`}
            onClick={() => {
              setQuestionTwo(!questionTwo);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionTwo === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            Personal Online funciona mesmo ?
          </h6>
          <p
            className={`mb-4 text-white ${
              questionTwo === true ? "block" : "hidden"
            }`}
          >
            SIM! personal online funciona perfeitamente, e ainda te trás alguns
            benefícios extra, veja alguns exemplos. <br />
            1- Caso você teja trabalhando conosco e precisa se mudar, o seu
            treino continua o mesmo! você poderá seguir com os treinos assim que
            estiver pronto. <br />
            2- Você pode treinar de manhã, a tarde ou até mesmo pela noite, não
            precisa ter um horario fixo! <br />
            3- O Valor da contratação é menor do que um personal presencial.
            <br />
            <br />
            Veja mais benefícios entrando em contato conosco.
          </p>
        </div>

        <div className="border-b-[2px] border-white pt-4 mb-4">
          <h6
            className={`text-2xl font-semibold flex items-center cursor-pointer pb-4 ${
              questionThree === true ? "text-yellow-800" : "text-white"
            }`}
            onClick={() => {
              setQuestionThree(!questionThree);
            }}
          >
            <BiSolidRightArrow
              size={18}
              className={`mr-2 ${
                questionThree === true ? "rotate-90" : "rotate-0"
              } `}
            />{" "}
            A partir de quanto tempo irei ver ou sentir os resultados dos
            treinos
          </h6>
          <p
            className={`mb-4 text-white ${
              questionThree === true ? "block" : "hidden"
            }`}
          >
            Os benefícios do exercício físico podem ser notados nas primeiras
            semanas de treino, abrangendo o condicionamento físico, emocional e
            mental. Seguindo as instruções adequadas, é importante ressaltar que
            a estética pode variar dependendo do bíotipo de cada indivíduo. No
            entanto, independentemente da situação e das características
            pessoais, a ciência comprova que, em aproximadamente 120 dias, é
            possível sentir uma significativa diferença em relação à estética.
          </p>
        </div>
      </section>

      <div className="fixed bottom-5 right-5" id="zap">
        <Link href="https://api.whatsapp.com/send?phone=558185092664" id="zap">
          <Image src={Whatsapp} alt="whatsapp" width={60} id="zap" />
        </Link>
      </div>
    </main>
  );
}
