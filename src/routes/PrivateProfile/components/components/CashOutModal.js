import React from 'react';

class CashOutModal extends React.Component {
  render() {
    return (
      <div className='modal' id='cashOut'>
        <div className='modal-background' />
        <div className='modal-card Button__Background--SemiRadius'>
          <section className='modal-card-body'>
            <p className='SubHeader__Text Semibold__font Font--Medium has-text-centered Font--Gray'>
              ¿Quieres cobrar tus premio?
            </p>
            <br />
            <table className='table is-fullwidth is-hoverable'>
              <thead>
                <tr>
                  <td>
                    <div className='control'>
                      <label className='radio'>
                        <input type='radio' name='product0' defaultChecked />
                        Reto Swatch
                      </label>
                    </div>
                  </td>
                  <td>15€</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='control'>
                      <label className='radio Font--Gray'>
                        <input type='radio' name='product0' />
                        Reto Nike
                      </label>
                    </div>
                  </td>
                  <td>30€</td>
                </tr>
                <tr>
                  <th className='has-text-centered'>Total</th>
                  <th>45€</th>
                </tr>
              </tbody>
            </table>
            <br />
            <figure className='has-text-centered'>
              <img src='assets/image/paypal.png' width={120} />
            </figure>
            <br />
            <div className='field'>
              <div className='control'>
                <input
                  className='input Input--BorderBottom is-radiusless is-shadowless'
                  type='email'
                  placeholder='Introduce el email'
                />
              </div>
            </div>
            <div className='field has-text-centered'>
              <br />
              <br />
              <button
                type='button'
                className='openCashConfirmationGreetingsModal closeCashOutModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'
              >
                CASHOUT
              </button>
            </div>
          </section>
        </div>
        <button className='modal-close closeCashOutModal Button--Active' />
      </div>
    );
  }
}

export default CashOutModal;
