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
      2,
      "0",
    )}-${now.getFullYear()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(
      2,
      "0",
    )}:${String(now.getSeconds()).padStart(2, "0")} Hrs.`
    setCurrentDate(formattedDate)
  }, [])

  // Datos de ejemplo para la denuncia
  const denunciaData = {
    CLAVE: "u4T+3h9A",
    regionP: "REGPOL - LIMA",
    comisaria: "ALFONSO UGARTE",
    numero: "31953915",
    fechaHecho: "20/09/2024 20:34:00 Hrs.",
    fechaRegistro: "21/09/2024 09:18:00 Hrs.",
    fechaConsulta: "03-05-2025 11:25:23 Hrs.",
    departamento: "AYACUCHO",
    Provincia: "HUAMANGA",
    distrito: "HUAMANGA",
    lugar: "JR. BOLIVAR S/N, AYACUCHO 05002",
    tipoRobo: "PATRIMONIO (DELITO)",
    modalidadRobo: "ROBO",
    subtipoRobo: "ROBO AGRAVADO",
    nombresEdad: "IVÁN DANILO GUEVARA CHINCHAY (22)",
    situacion: "DENUNCIANTE",
    documento: "DNI 70685254",
    fechaNacimiento: "08/07/2002",
    pais: "PERÚ",
    contenido:
      "EN EL DISTRITO DE AYACUCHO, SIENDO LA FECHA DEL DIA 21SEP2024, A LAS 09.18 HORAS, PRESENTE EN ESTA DEPENDENCIA POLICIAL, LA PERSONA DE IVÁN DANILO GUEVARA CHINCHAY (22), NATURAL DE APURIMAC, ESTADO CIVIL SOLTERO, GRADO DE INSTRUCCIÓN SECUNDARIA COMPLETA, OCUPACIÓN INDEPENDIENTE, IDENTIFICADO CON DNI N° 70685254, EL MISMO QUE DENUNCIA HABER SIDO VÍCTIMA DE ROBO, HECHOS SUSCITADOS EL DIA 20SEP2024 A HORAS 20.34 APROX. EN CIRCUNSTANCIA QUE SE ENCONTRABA VIAJANDO A SU HOSPEDAJE EN UN TAXI DE COLOR NEGRO QUE PIDIÓ POR APLICATIVO, CUANDO DE REPENTE SUBEN DOS SUJETOS PESADOS, POSIBLEMENTE VENEZOLANOS POR SU ACENTO, POCO DESPUES, ESTOS SACAN UNA PISTOLA Y LO OBLIGAN A ENTREGAR SU CELULAR MARCA SAMSUNG GALAXY A13, DE LA EMPRESA MOVISTAR, ADEMÁS DE SU BILLETERA, Y ASÍ MISMO AMENAZÁNDOLO PARA QUE DIERA LAS CLAVES DE SU CELULAR Y BANCA MOVIL, PARA QUE LUEGO SE FUERAN A LA FUGA, ASÍ MISMO REFIERE QUE AL ACCEDER A SU CORREO ELECTRÓNICO, RECIBIÓ CONFIRMACIONES DE CUATRO (04) CONSUMOS, TRES (3) DE ELLAS POR S/500 C/U Y OTRA (1) POR S/14.90 CON DESTINO A BIM, LLEGANDO A LA SUMA DE MIL QUINIENTOS CATORCE Y 90/100 SOLES S/. 1514.90, QUE LE FUERON SUSTRAÍDOS. TAMBIÉN, MENCIONA QUE HIZO EL BLOQUEO DE SU TARJETA Y LA ELIMINACIÓN DE SU CUENTA YAPE NI BIEN SE PERCATÓ DE DICHOS MOVIMIENTOS, , Y ADEMÁS REFIERE QUE POR TEMAS DE TRABAJO SE ENCUENTRA EN ESTA CIUDAD, MOTIVO POR EL CUAL PONE LA DENUNCIA EN ESTA DEPENDENCIA POLICIAL. LO QUE DENUNCIA ANTE LA PNP PARA LOS FINES DEL CASO.",
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
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        NÚMERO:
                      </span>
                    </td>
                    <td className="py-1 px-2 w-[35%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.numero}</span>
                    </td>
                    <td className="py-1 px-2 w-[20%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        FECHA Y HORA HECHO:
                      </span>
                    </td>
                    <td className="py-1 px-2 w-[30%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.fechaHecho}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        REGION POLICIAL:
                      </span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.regionP}</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        FECHA Y HORA REGISTRO:
                      </span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.fechaRegistro}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        COMISARÍA:
                      </span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.comisaria}</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        FECHA Y HORA CONSULTA:
                      </span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.fechaConsulta}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        TIPO:
                      </span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>DENUNCIA</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}></td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Lugar del Hecho */}
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
                  LUGAR DEL HECHO
                </span>
              </div>
            </div>
            <div className="w-full">
              <table className="w-full border-collapse text-xs" style={{ borderSpacing: "0" }}>
                <tbody>
                  <tr>
                    <td className="py-2 px-2 w-[15%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        DEPARTAMENTO:
                      </span>
                    </td>
                    <td className="py-2 px-2 w-[35%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.departamento}</span>
                    </td>
                    <td className="py-2 px-2 w-[15%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        PROVINCIA:
                      </span>
                    </td>
                    <td className="py-2 px-2 w-[35%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.Provincia}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        DISTRITO:
                      </span>
                    </td>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.distrito}</span>
                    </td>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        LUGAR:
                      </span>
                    </td>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "175px" }}>{denunciaData.lugar}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tipificación */}
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
                  TIPIFICACION
                </span>
              </div>
            </div>
            <div className="w-full">
              <table className="w-full border-collapse text-xs" style={{ borderSpacing: "0" }}>
                <tbody>
                  <tr>
                    <td className="py-2 px-2 w-[33%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        TIPO
                      </span>
                    </td>
                    <td className="py-2 px-2 w-[33%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        MODALIDAD
                      </span>
                    </td>
                    <td className="py-2 px-2 w-[34%]" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        SUBTIPO
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.tipoRobo}</span>
                    </td>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.modalidadRobo}</span>
                    </td>
                    <td className="py-2 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.subtipoRobo}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Involucrados */}
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
                  INVOLUCRADOS
                </span>
              </div>
            </div>
            <div className="w-full">
              <table className="w-full border-collapse text-xs" style={{ borderSpacing: "0" }}>
                <thead>
                  <tr>
                    <th className="py-1 px-2 text-left" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        NOMBRES COMPLETOS
                      </span>
                    </th>
                    <th className="py-1 px-2 text-left" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        TIPO - NRO DOC
                      </span>
                    </th>
                    <th className="py-1 px-2 text-left" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        F. NACIMIENTO
                      </span>
                    </th>
                    <th className="py-1 px-2 text-left" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        PAIS ORIGEN
                      </span>
                    </th>
                    <th className="py-1 px-2 text-left" style={{ borderBottom: "1px solid transparent" }}>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "8pt",
                          fontFamily: "Helvetica",
                          color: "rgb(7, 0, 103)",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        SITUACION
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.nombresEdad}</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.documento}</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.fechaNacimiento}</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.pais}</span>
                    </td>
                    <td className="py-1 px-2" style={{ borderBottom: "1px solid transparent" }}>
                      <span style={{ display: "inline-block", width: "100%" }}>{denunciaData.situacion}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contenido */}
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
                  CONTENIDO
                </span>
              </div>
            </div>
            <div
              className="text-xs p-2 text-justify max-h-[200px] overflow-auto"
              style={{
                border: "1px solid transparent",
              }}
            >
              <p className="m-0">{denunciaData.contenido}</p>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex justify-between mt-2">
            <button className="text-gray-600">
              <span className="text-2xl">◄</span>
            </button>
            <button className="text-gray-600">
              <span className="text-2xl">►</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
