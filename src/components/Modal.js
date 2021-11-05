import React, { useState } from 'react';
import './Modal.css';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              ✌️ Правила хуков Хуки — это функции JavaScript, которые налагают
              два дополнительных правила: Хуки следует вызывать только на
              верхнем уровне. Не вызывайте хуки внутри циклов, условий или
              вложенных функций. Хуки следует вызывать только из функциональных
              компонентов React. Не вызывайте хуки из обычных
              JavaScript-функций. Есть только одно исключение, откуда можно
              вызывать хуки — это ваши пользовательские хуки. Мы расскажем о них
              далее. Мы разработали специальный плагин для линтера, который
              помогает обеспечивать соблюдение этих правил. Мы понимаем, что эти
              правила могут показаться немного непонятными и накладывать
              определённые ограничения, но они очень важны для правильной работы
              хуков.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
