const Name_alunos0 = [
    "ANA CAROLINA PONTAROLO CARVALHO",
    "ANA HELOISE MONTEIRO DA SILVA",
    "ANA LUIZA DA SILVA NOGUEIRA",
    "ANDRE CARDIN SOARES",
    "BEATRIZ BRANDT VIANA",
    "BHIANCA MULDENBERGER PINTO",
    "CAUÃ JUN KESHINO",
    "ELIÃ GABRIEL VIEIRA",
    "ENZO SAMUEL LISBOA ZORDENUNES",
    "GIOVANNA CALDEIRA",
    "HENRIQUE DUARTE DOS SANTOS",
    "HENRIQUE EMILIO SILVA KRUGER",
    "IAGO DANIEL CALIXTO",
    "IASMIN APARECIDA DA SILVA PEREIRA",
    "ISADORA CRISTINA SILVEIRA",
    "JHENYFER GUIMARÃES DE LARA",
    "JOAO FRANCISCO KUJIV",
    "JOÃO HENRIQUE MORAIS DE ASSIS",
    "LORENZO HENRIQUE BENIN",
    "LUIZ FELIPE DO ROSARIO DE PAULA",
    "LUIZ GUSTAVO BRASIL",
    "MARIA JULIA AMORIM DA SILVA",
    "MARIA LUYZA MENDES DA SILVA LEAL",
    "PAOLA RAFAELA DOS SANTOS AMARAL",
    "PEDRO HENRIQUE LOPES DE LARA",
    "RENATO GABRIEL VIANA STRAUBE",
    "VICTOR DE PAULA",
    "VINICIUS BORTOLI",
    "WILLIAN NOVAES BITTENCOURT"
];

const Number_alunos0 = [1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16,
    17, 18, 19, 21,
    22, 23, 24, 26,
    27, 28, 30,
    31, 32, 33
];

// Clonando as listas
const Name_alunos1 = [...Name_alunos0];
const Number_alunos1 = [...Number_alunos0];

// Substituições na primeira lista
const index32 = Number_alunos0.indexOf(32);
if (index32 !== -1) {
    Number_alunos0[index32] = 35;
    Name_alunos0[index32] = "NEYMAR JUNIOR";
}

// Substituições na segunda lista
const index35 = Number_alunos1.indexOf(35);
if (index35 !== -1) {
    Number_alunos1[index35] = 32;
    Name_alunos1[index35] = Name_alunos0[index8]; // Usando o nome correspondente da primeira lista
}

// Exibindo a primeira lista
console.log("Primeira Lista:");
for (let i = 0; i < Name_alunos0.length; i++) {
    console.log(Name_alunos0[i] + " - " + Number_alunos0[i]);
}

// Exibindo a segunda lista
console.log("\nSegunda Lista:");
for (let i = 0; i < Name_alunos1.length; i++) {
    console.log(Name_alunos1[i] + " - " + Number_alunos1[i]);
}