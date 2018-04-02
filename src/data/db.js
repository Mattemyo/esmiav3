import tjockskinka from '../images/tjockskinka.jpg';
import redondoIglesias from '../images/redondoIglesias.jpg';
import korvis from '../images/korvis.jpg';
import korv from '../images/korv.jpg';
import ost from '../images/ost.jpg';
import mahon from '../images/mahon.jpg';
import altoBello from '../images/altoBello.jpg';
import mancebo from '../images/mancebo.jpg';
import paellaValenciana from '../images/paellaValenciana.JPG';
import mariscoPaella from '../images/mariscoPaella.JPG';
import idiazabal from '../images/idiazabal.jpg';

const products = [
  // {
  //   name: "Iberico ben, 30 mån",
  //   image: 'tapasJamon',
  //   price: "330kr/kg",
  //   description:
  //     "Ibericoskinkan är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st."
  // },
  {
    type: 'skinka',
    name: 'Iberico vac., 30 mån',
    image: tjockskinka,
    price: '550kr/kg',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    type: 'skinka',
    name: 'Serranoskinka reserva 14 mån',
    image: tjockskinka,
    price: '175kr/kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'skinka',
    name: 'Serranoskinka 500g skivad',
    image: tjockskinka,
    price: '235kr/kg',
    description:
      'Serranoskinka skivad 500g. Lätt att dra varje skiva med mellanlägg. Skinkan kommer från grishona med 11 månaders lufttorkning. Serveras med med oliver eller dadlar. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  },
  {
    type: 'skinka',
    name: 'Redondo Iglesias 500g skivad',
    image: redondoIglesias,
    price: '235kr/kg',
    description:
      'Serranoskinka skivad 500g. Lätt att dra varje skiva med mellanlägg. Skinkan från grishona med 11 månaders lufttorkning. Linda den med dadlar, runt getjockskinka servera med oliver. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  },
  {
    type: 'chorizo',
    name: 'Chorizo och salami Iberico',
    image: korvis,
    price: '175kr/kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'chorizo',
    name: 'Chorizo färsk grill',
    image: korv,
    price: '89kr/kg',
    description:
      'Chorizo färsk 70 gram. Paprikakorv för Bbq och stekning. Chorizo casero lagrad 350 gram. Picante smak som är mild eftersom det innehåller söt paprika & bitter paprikapulver. Perfekt till grytan eller som kallskuret. Serveras med tomatsås, lök, potatis.6,5kg per kolli.'
  },
  // KOLONIAL
  {
    type: 'kolonial',
    name: 'Olivolja',
    image: korv,
    price: '330kr/kg',
    description:
      'Ibericoskinkan är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st.'
  },
  {
    type: 'kolonial',
    name: 'Piquillo Paprika',
    image: korv,
    price: '450kr/kg',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    type: 'kolonial',
    name: 'Chorizo och Salami Iberico',
    image: korv,
    price: '175kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'kolonial',
    name: 'Serranoskinka reserva 14 mån',
    image: korv,
    price: '160kr/kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'kolonial',
    name: 'Serranoskinka 500g skivad',
    image: korv,
    price: '235kr/kg',
    description:
      'Serranoskinka skivad 500gr. Lätt att dra varje skiva med mellanlägg. Skinkan från grishona med 11 månaders lufttorkning. Linda den med dadlar, runt getost, servera med oliver. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  },
  // OSTAR
  {
    type: 'ostar',
    name: 'Manchego fårost 6 mån',
    image: ost,
    price: '195kr/kg',
    description:
      'Fårost med ursprungsbeteckning Altobello. Skär upp den i trianglar, fyrkantiga pinnar eller tärningar. Fikon, druvor, passionsfrukt, guayaba och kvittens gelé kan passa bra till manchego. Förpackning: 3,5 kg per st, 2 stycken i kolli. = 7kg.'
  },
  {
    type: 'ostar',
    name: 'Getost färsk, 1 mån utan skal',
    image: ost,
    price: '155kr/kg',
    description:
      'Getost färsk med enbart getmjölk 1 månad lagrad. Går att marinera med olivolja, dragon och timjan. Täck den med piquillo paprika och spetsa med en oliv. Linda in den med serranoskinka och värm i salamander. Förpackning: 1 kg/st. 6 st/kolli = 7 kilo.'
  },
  {
    type: 'ostar',
    name: 'Mahon komjölksost mellanl.',
    image: mahon,
    price: '175kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'ostar',
    name: 'Idiazabal',
    image: idiazabal,
    price: '175kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'ostar',
    name: 'Mancebo',
    image: mancebo,
    price: '155kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'ostar',
    name: 'Manchego fårost 6 mån',
    image: altoBello,
    price: '195kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  // PAELLA
  {
    type: 'paella',
    name: 'Paella från Valencia',
    image: paellaValenciana,
    price: '330kr/kg',
    description:
      'Ibericoskinka är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st.'
  },

  {
    type: 'paella',
    name: 'Skaldjurspaella',
    image: mariscoPaella,
    price: '175kr/kg',
    description: 'Paella gjord på skaldjur'
  },
  {
    type: 'paella',
    name: 'Tilltugg - Spansk Tortilla',
    image: 'paellaSmiley',
    price: '',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    type: 'paella',
    name: 'Serranoskinka 500g skivad',
    image: 'paellaspecialistenbgr',
    price: '',
    description: 'Ni är även välkomna att hyra utrustning för att laga paella'
  }
];

export default products;