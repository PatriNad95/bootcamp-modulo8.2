import { NumeroPacientesPorEspecialidad, Pacientes } from "./model";
import "./style.css";

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1.a

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log(
  "Pacientes de pediatria",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Apartado 1.b

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(
  "Menores de 10 años",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return (
    pacientes.filter(
      (paciente) =>
        paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
    ).length > 0
  );
};

console.log("Se activa el protocolo", activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesModificados: Pacientes[] = pacientes.map((paciente) => {
    return {
      ...paciente,
      especialidad:
        paciente.especialidad === "Pediatra"
          ? "Medico de familia"
          : paciente.especialidad,
    };
  });
  return pacientesModificados;
};

console.log("Reasignación", reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return (
    pacientes.filter((paciente) => paciente.especialidad === "Pediatra")
      .length > 0
  );
};

console.log("Hay pacientes Pediatria", HayPacientesDePediatria(pacientes));

// Apartado 5

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const numeroPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: pacientes.filter(
      (paciente) => paciente.especialidad === "Pediatra"
    ).length,
    pediatria: pacientes.filter(
      (paciente) => paciente.especialidad === "Medico de familia"
    ).length,
    cardiologia: pacientes.filter(
      (paciente) => paciente.especialidad === "Cardiólogo"
    ).length,
  };
  return numeroPacientes;
};

console.log(
  "Pacientes por especialidad",
  cuentaPacientesPorEspecialidad(pacientes)
);
