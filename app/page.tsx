"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { useState, useEffect } from "react"

// Definir la fuente Helvetica
const helvetica = localFont({
  src: [
    {
      path: "../fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
})

export default function Home() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const now = new Date()
    const formattedDate = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(
      2, "0"
    )}-${now.getFullYear()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(
      2, "0"
    )}:${String(now.getSeconds()).padStart(2, "0")} Hrs.`
    setCurrentDate(formattedDate)
  }, [])

  // Datos modificados de acuerdo al PDF
  const denunciaData = {
    CLAVE: "9PZgTk7e",
    regionP: "REGPOL - AYACUCHO",
    comisaria: "DIVINCRI AYACUCHO",
    numero: "73794304",
    fechaHecho: "02/05/2025 17:10:00 Hrs.",
    fechaRegistro: "03/05/2025 10:15:00 Hrs.",
    fechaConsulta: "03-05-2025 11:25:23 Hrs.",
    departamento: "AYACUCHO",
    Provincia: "HUAMANGA",
    distrito: "AYACUCHO",
    lugar: "JR. SAN MARTIN 272, AYACUCHO 05003",
    tipoRobo: "PATRIMONIO (DELITO)",
    modalidadRobo: "ROBO",
    subtipoRobo: "ROBO AGRAVADO",
    nombresEdad: "FIDEL ANGEL CHIPANA BAUTISTA (21)",
    situacion: "DENUNCIANTE",
    documento: "DNI 70470563",
    fechaNacimiento: "14/07/2003",
    pais: "PERÚ",
    contenido:
      "SIENDO LA FECHA DEL DIA 03MAY2025, A LAS 10:15 HORAS, PRESENTE EN LA OFICINA DE SEINCRI DE ESTA DEPENDENCIA POLICIAL, LA PERSONA DE FIDEL ANGEL CHIPANA BAUTISTA (21), NATURAL DE AYACUCHO, ESTADO CIVIL SOLTERO, GRADO DE INSTRUCCION SECUNDARIA COMPLETA, OCUPACION ESTUDIANTE, IDENTIFICADO CON DNI N° 70470563 Y CON DIRECCION ACTUAL EN SAN JUAN BAUTISTA. ÑAHUIN PUQUIO LOTE 6A; EL MISMO DENUNCIA HABER SIDO VÍCTIMA DE ROBO, HECHOS OCURRIDOS EL DÍA 02MAY2025, A LAS 18:20 HORAS APROX. AL RESPECTO, EL DENUNCIANTE MANIFIESTA QUE SE ENCONTRABA CAMINANDO POR EL JR. SAN MARTIN 272, AYACUCHO 05003, EN INSTANTES EN QUE EL DENUNCIANTE SE ENCONTRABA CAMINANDO, DOS HOMBRES DE APARIENCIA VENEZOLANA SE LE ACERCARON Y LE PREGUNTARON LA HORA, A LO QUE EL DENUNCIANTE SE NEGÓ A RESPONDER. UNO DE ELLOS, SORPRENDIENDO AL DENUNCIANTE, LE MOSTRÓ UNA PISTOLA Y LE DIJO: \"NO TE MUEVAS O TE VUELO LA CABEZA\". EL OTRO LE REVISTÓ LOS BOLSILLOS Y LE SUSTRAJERON UNA BILLETERA CON CUATRO MIL CIEN SOLES (S/ 4100), QUE HABÍA RETIRADO RECIÉN DE UNA VENTANILLA DE CAJA AREQUIPA EN JR. LIMA Nº 133, AYACUCHO 05003. LOS ASALTANTES SE APODERARON DE SU TARJETA DE DÉBITO Y UN CELULAR REDMI NOTE 13 PRO. AL INTENTAR DEFENDERSE, LOS DELINCUENTES LE GOLPEARON EN EL ESTÓMAGO, LO QUE LE HIZO CAER AL SUELO. LUEGO, SE DIERON A LA FUGA EN UNA MOTO HACIA UNA RUTA NO ESPECIFICADA. MOTIVO POR EL CUAL PONE LA DENUNCIA EN ESTA DEPENDENCIA POLICIAL LO QUE DENUNCIAANTE LA PNP PARA LOS FINES DEL CASO.",
  }

  return (
    <main
      className={`min-h-screen flex justify-center items-center ${helvetica.variable} font-helvetica`}
      style={{
        backgroundImage: 'url("/fondo-mosaico.jpg")',
        backgroundRepeat: "repeat",
        padding: "0",
      }}
    >
      <div className="w-full max-w-4xl bg-white relative overflow-hidden">
        {/* Fondo con patrón de seguridad */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/fondo.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Marca de agua */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <Image
            src="/solo-valido-para-consulta.png"
            alt="Solo válido para consulta"
            width={600}
            height={400}
            className="opacity-30"
          />
        </div>

        {/* Contenido del documento */}
        <div className="relative z-10 px-4 py-2">
          {/* Encabezado */}
          <div className="flex items-start justify-between mb-2">
            <div className="w-28 h-28 relative">
              <Image
                src="/escudo.png"
                alt="Escudo Policía Nacional del Perú"
                width={112}
                height={112}
                className="object-contain"
              />
            </div>
            <div className="text-right">
              <p className="text-red-600 text-sm font-bold">Clave =&gt; {denunciaData.CLAVE}</p>
            </div>
          </div>

          {/* Título */}
          <div className="text-center mb-2">
            <h1
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18pt",
                fontFamily: "Helvetica",
                color: "#000000",
                margin: "0",
                padding: "0",
              }}
            >
              POLICÍA NACIONAL DEL PERÚ
            </h1>
            <h2
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18pt",
                fontFamily: "Helvetica",
                color: "#000000",
                margin: "0",
                padding: "0",
              }}
            >
              DENUNCIA POLICIAL
            </h2>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "11pt",
                fontFamily: "Helvetica",
                color: "#000000",
                marginTop: "8px",
                textAlign: "center",
                padding: "0",
              }}
            >
              (LA POLICÍA NACIONAL DEL PERÚ, CERTIFICA QUE EN EL SISTEMA INFORMÁTICO DE
              <br />
              DENUNCIAS EXISTE UNA CUYO TENOR ES EL SIGUIENTE)
            </p>
          </div>

          {/* Datos Generales */}
          <div className="mb-1">
            <div className="relative" style={{ height: "0.29in" }}>
              <Image src="/cuadrado-de-cuadro.png" alt="Fondo encabezado" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "8pt",
                    fontFamily: "Helvetica",
                    color: "rgb(7, 0, 103)",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  DATOS GENERALES
                </span>
              </div>
            </div>
            <div className="w-full">
              <table className="w-full border-collapse text-xs" style={{ borderSpacing: "0" }}>
                <tbody>
                  <tr>
                    <td className="py-1 px-2 w-[15%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                         
