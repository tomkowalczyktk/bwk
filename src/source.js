import sadowa from "./images/offers/1/sadowa.png";
import fullScreenSadowa from './images/offers/1/fullScreenSadowa.png';
import chopina from "./images/offers/2/chopina.png";
import fullScreenChopina from './images/offers/2/fullScreenChopina.png';
import lipowa from "./images/offers/3/lipowa.png";
import fullScreenLipowa from "./images/offers/3/fullScreenLipowa.png";
import okopowa from "./images/offers/4/okopowa.png";
import fullScreenOkopowa from './images/offers/4/fullScreenOkopowa.png';
import marzena from "./images/testimonials/1/marzena.png";
import piotr from "./images/testimonials/2/piotr.png";
import mietek from "./images/testimonials/3/piotr.png";
import grazyna from "./images/testimonials/4/marzena.png";

export const offers = [
  {
    "id": 1,
    "street": "Sądowa",
    "mainPhoto": sadowa,
    "photos": [
      {
        "title": "office",
        "original": sadowa,
        "fullScreen": fullScreenSadowa,
      },
      {
        "title": "office2",
        "original": lipowa,
        "fullScreen": fullScreenLipowa
      },
      {
        "title": "office3",
        "original": chopina,
        "fullScreen": fullScreenChopina,
      }
    ],

    "area": "20",
    "price": "1300",
    "floor": "1",
    "internet": true,
    "social": true,
    "availableOn": "10/10/2019"
  },
  {
    "id": 2,
    "street": "Chopina",
    "mainPhoto": chopina,
    "photos": [
      {
        "title": "office",
        "original": chopina,
        "fullScreen": fullScreenChopina
      }
    ],
    "area": "21",
    "price": "1400",
    "floor": "1",
    "internet": true,
    "social": true,
    "availableOn": "10/10/2019"

  },
  {
    "id": 3,
    "street": "Lipowa",
    "mainPhoto": lipowa,
    "photos": [
      {
        "title": "office",
        "original": lipowa,
        "fullScreen": fullScreenLipowa
      }
    ],
    "area": "27",
    "price": "2000",
    "floor": "1",
    "internet": true,
    "social": true,
    "availableOn": "10/10/2019"

  },
  {
    "id": 4,
    "street": "Okopowa",
    "mainPhoto": okopowa,
    "photos": [
      {
        "title": "office",
        "original": okopowa,
        "fullScreen": fullScreenOkopowa
      }
    ],
    "area": "21",
    "price": "1500",
    "floor": "1",
    "internet": true,
    "social": true,
    "availableOn": "10/10/2019"

  }
]

export const testimonials = [
  {
    "id": 1,
    "name": "Marzena",
    "image": marzena,
    "content": "Jestem bardzo zadowolona ze współpracy z BwK. Proces wynajmu oraz obsługi przebiegł bez zarzutu. Szczerze polecam."
  },
  {
    "id": 2,
    "name": "Piotr",
    "image": piotr,
    "content": "Biuro w Kamienicy to rewelacyjne rozwiązanie dla naszej firmy. Rewelacyjna obsługa, elastyczność i relatywnie niski koszt. Super oferta, polecam."
  },
  {
    "id": 3,
    "name": "Mieczysław",
    "image": mietek,
    "content": "Polecam tym wszystkim, którzy potrzebują reprezentatywnego lokalu w centrum miasta. Rewelacyjne rozwiązanie, niewymagające angażowania dużych śro dków finansowych oraz czasu. Profesjonalna obsługa, oszczędność czasu i pieniędzy."
  },
  {
    "id": 4,
    "name": "Grażyna",
    "image": grazyna,
    "content": "Bardzo wygodne i przyjemne miejsce. Minimum formalności, pełny profesjonalizm i wygoda."
  }
]