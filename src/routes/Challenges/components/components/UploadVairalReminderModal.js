import React from 'react';

class UploadVairalReminderModal extends React.Component {
  render() {
    return (
      <div className='modal' id='uploadImage'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/vairals.png' />
            </figure>
            <br />
            <p className='Regular__font Font--Medium has-text-centered Font--Gray'>
              TE RECORDAMOS QUE NO PUEDES USAR IMÁGENES QUE NO SEAN TUYAS.
            </p>
            <br />
            <p className='Regular__font Font--Small has-text-centered Font--Gray'>
              Aquí puedes encontrar algunas
              <a
                href='www.unplash.com'
                target='_blank'
                className='Text__Colored'
              >
                www.unplash.com
              </a>
            </p>
            <br />
            <p className='Regular__font Font--SemiMedium has-text-centered Font--Gray'>
              Puedes usar alguna de estas aplicaciones para editar, montar y
              preparar tus Vairals
            </p>
            <br />
            <div className='columns is-mobile is-marginless is-paddingless'>
              <div className='column is-3 has-text-centered Position--Relative'>
                <div className='has__Border--Colored ApplicationBox' />
              </div>
              <div className='column is-3 has-text-centered Position--Relative'>
                <div className='has__Border--Colored ApplicationBox' />
              </div>
              <div className='column is-3 has-text-centered Position--Relative'>
                <div className='has__Border--Colored ApplicationBox' />
              </div>
              <div className='column is-3 has-text-centered Position--Relative'>
                <div className='has__Border--Colored ApplicationBox' />
              </div>
            </div>
            <div className='LoginForm'>
              <div className='field'>
                <div className='control'>
                  <label className='checkbox'>
                    <input type='checkbox' />
                    No volver a mostrar
                  </label>
                </div>
              </div>
              <div className='field has-text-centered'>
                <br />
                <button className='closeUploadImageModal openConfirmUploadModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'>
                  YA TENGO MI VAIRAL
                </button>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeUploadImageModal Button--Active' />
      </div>
    );
  }
}

export default UploadVairalReminderModal;
