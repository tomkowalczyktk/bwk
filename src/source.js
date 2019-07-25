import sadowa from "./images/offers/1/sadowa.png";
import sadowa2 from "./images/offers/1/sadowa2.png";
import chopina from "./images/offers/2/chopina.png";
import lipowa from "./images/offers/3/lipowa.png";
import okopowa from "./images/offers/4/okopowa.png";

import marzena from "./images/testimonials/1/marzena.png";
import piotr from "./images/testimonials/2/piotr.png";

export const offers = [
  {
    "id": 1,
    "street": "Sądowa",
    "image": [{ sadowa }, { sadowa2 }],
    "area": "20",
    "price": "1300",
    "floor": "1",
    "internet": true,
    "social": true
  },
  {
    "id": 2,
    "street": "Chopina",
    "image": [{ chopina }],
    "area": "20",
    "price": "1300",
    "floor": "1",
    "internet": true,
    "social": true
  },
  {
    "id": 3,
    "street": "Lipowa",
    "image": [{ lipowa }],
    "area": "20",
    "price": "1300",
    "floor": "1",
    "internet": true,
    "social": true
  },
  {
    "id": 4,
    "street": "Okopowa",
    "image": [okopowa],
    "area": "20",
    "price": "1300",
    "floor": "1",
    "internet": true,
    "social": true
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
    "image": "",
    "content": "Polecam tym wszystkim, którzy potrzebują reprezentatywnego lokalu w centrum miasta. Rewelacyjne rozwiązanie, niewymagające angażowania dużych śro dków finansowych oraz czasu. Profesjonalna obsługa, oszczędność czasu i pieniędzy."
  },
  {
    "id": 4,
    "name": "Grażyna",
    "image": "",
    "content": "Bardzo wygodne i przyjemne miejsce. Minimum formalności, pełny profesjonalizm i wygoda."
  }
]