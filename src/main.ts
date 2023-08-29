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
  const pediatrics: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") pediatrics.push(pacientes[i]);
  }
  return pediatrics;
};

console.log(
  "Pacientes de pediatria",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Apartado 1.b

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pediatrics: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10)
      pediatrics.push(pacientes[i]);
  }
  return pediatrics;
};

console.log(
  "Menores de 10 años",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  let i = 0;
  while (i < pacientes.length) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
    i++;
  }

  return activarProctolo;
};

console.log("Se activa el protocolo", activarProtocoloUrgencia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes = false;
  let i = 0;
  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientes = true;
      break;
    }
    i++;
  }

  return hayPacientes;
};

console.log("Hay pacientes Pediatria", HayPacientesDePediatria(pacientes));

// Apartado 5

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pediatra: Pacientes[] = [];
  const medicoDeFamilia: Pacientes[] = [];
  const cardiologia: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pediatra.push(pacientes[i]);
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      cardiologia.push(pacientes[i]);
    } else {
      medicoDeFamilia.push(pacientes[i]);
    }
  }
  const numeroPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: medicoDeFamilia.length,
    pediatria: pediatra.length,
    cardiologia: cardiologia.length,
  };
  return numeroPacientes;
};

console.log(
  "Pacientes por especialidad",
  cuentaPacientesPorEspecialidad(pacientes)
);

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra")
      pacientes[i].especialidad = "Medico de familia";
  }
  return pacientes;
};

console.log("Reasignación", reasignaPacientesAMedicoFamilia(pacientes));
