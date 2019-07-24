import React from 'react';
import './offices.scss';
import { Link } from 'gatsby';

const Offices = () => {
  return (
    <div className='offices'>
      <div className='offices__buttons'>
        <div className='offices__buttons__item'>
          Wynajmij biuro
        </div>
        <div className='offices__buttons__item'>
          Wynajmij cały lokal
        </div>
      </div>

      <div className='offices__presentation'>
        <div className='presentation__img'>
        </div>
        <div className='presentation__desc'>
          <div className='presentation__desc__indicator'>
            1 z 6
          </div>
          <div className="presentation__desc__col-l">
            <Link className='presentation__desc__button-top resentation__desc__button-top--l'>
              Poprzednie biuro
            </Link>
            <p className="presentation__desc__col-l__text">
              Powierzchnia:
            </p>
            <p className="presentation__desc__col-l__text">
              Cena:
            </p>
            <p className="presentation__desc__col-l__text">
              Ulica:
            </p>
            <p className="presentation__desc__col-l__text">
              Piętro:
            </p>
            <p className="presentation__desc__col-l__text">
              Szybki internet:
            </p>
            <p className="presentation__desc__col-l__text">
              Kącik socjalny:
            </p>
            <Link className="resentation__desc__button-botom resentation__desc__button-botom--l">
              svg-> Zobacz więcej
            </Link>

          </div>
          <div className="presentation__desc__col-r">
            <Link className='presentation__desc__button-top presentation__desc__button-top--r'>
              Następne biuro
          </Link>
            <p className='presentation__desc__col-r__values'></p>
            <p className='presentation__desc__col-r__values'></p>
            <p className='presentation__desc__col-r__values'></p>
            <p className='presentation__desc__col-r__values'></p>
            <p className='presentation__desc__col-r__values'></p>
            <p className='presentation__desc__col-r__values'></p>
            <Link className="presentation__desc__button-botom resentation__desc__button-botom--r">
              Wszystkie biura
            </Link>
          </div>




        </div>
      </div>
    </div>
  );
}
export default Offices;