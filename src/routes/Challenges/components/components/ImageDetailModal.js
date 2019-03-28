import React from 'react';

class ImageDetailModal extends React.Component {
  render() {
    return (
      <div className='modal' id='viewImage'>
        <div className='modal-background' />
        <div className='modal-card openSwipeImageModal'>
          <section className='modal-card-body'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img
                    src='assets/image/mobile-chalange.png'
                    alt='Placeholder image'
                  />
                </figure>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeViewImageModal' />
      </div>
    );
  }
}

export default ImageDetailModal;
