import React, {useState} from 'react';
import axios from "axios";
import './Feedback.css'
import Swal from "sweetalert2";

const Feedback = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  })
  const [loader, setLoader] = useState(false)
  
  const onChange = e => {
    const {name, value} = e.target
    
    setState(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  
  const onSubmit = async e => {
    e.preventDefault()

    const data = {
      clientName: state.name,
      phoneClient: state.phone,
    }

    setLoader(true)

    try {
      await axios.post('https://nex-production-4ac3.up.railway.app/connection/add', data)

      setState({
        name: '',
        phone: '',
      })
      setLoader(false)

      Swal.fire({
        toast: false,
        icon: 'success',
        title: `Ваша заявка отправлена!`,
        text: 'В ближайшее время с вами свяжется специалист!',
        position: "center",
        showConfirmButton: true,
        confirmButtonText: "Закрыть",
        confirmButtonColor: '#F55B25',
        iconColor: "#F55B25",
        color: "black",
        background: "#FCFCFC",
      })
    } catch (e) {
      setLoader(false)
      Swal.fire({
        toast: false,
        icon: 'error',
        title: `Что то пошло не так!`,
        position: "center",
        showConfirmButton: true,
        confirmButtonText: "Закрыть",
        confirmButtonColor: '#F55B25',
        iconColor: "red",
        color: "black",
        background: "#FCFCFC",
      })
    }
  }
  
  return (
    <div className="feedback" id="feedback">
      <div className="container">
        <h3>ОСТАЛИСЬ ВОПРОСЫ?</h3>
        <p>Оставьте ваши контактные данные и наш менеджер свяжется
          с вами в течение 15 минут!</p>
        <form onSubmit={onSubmit}>
          <div className="input-block">
            <label htmlFor="name">Имя</label>
            <input 
              type="text" 
              id="name"
              name="name"
              onChange={onChange} 
              value={state.name} 
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="name">Номер телефона</label>
            <input 
              type="text" 
              id="phone"
              name="phone"
              onChange={onChange} 
              value={state.phone} 
              placeholder="Ваш номер телефона"
              required
            />
          </div>
          <div className="form-btn">
            <button disabled={loader}>{loader ? 'Загрузка...' : 'Отправить'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;