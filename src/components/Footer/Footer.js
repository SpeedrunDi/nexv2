import React from 'react'
import './Footer.css'
import Logo from '../Logo/Logo'

const Footer = () => (
  <>
    <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" width="1440" height="2" viewBox="0 0 1440 2" fill="none">
      <path d="M0 1L1440 1" stroke="url(#paint0_linear_11_683)"/>
      <defs>
        <linearGradient id="paint0_linear_11_683" x1="0" y1="0.5" x2="1440" y2="0.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D6DFFF" stopOpacity="0"/>
          <stop offset="0.546875" stopColor="#1741D8"/>
          <stop offset="1" stopColor="#D6DFFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
    <footer className="footer">
      <div className="container footer-con">
        <div className="footer-column">
          <Logo />
          <p className="copyright">Copyright
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 11C8.7105 11 11 8.7105 11 6C11 3.2895 8.7105 1 6 1C3.2895 1 1 3.2895 1 6C1 8.7105 3.2895 11 6 11ZM6 2C8.1685 2 10 3.8315 10 6C10 8.1685 8.1685 10 6 10C3.8315 10 2 8.1685 2 6C2 3.8315 3.8315 2 6 2Z" fill="#FCFCFC"/>
              <path d="M6 8.5C6.4505 8.5 7.2905 8.416 7.8535 7.854L7.1465 7.146C6.925 7.3675 6.496 7.5 6 7.5C5.187 7.5 4.5 6.813 4.5 6C4.5 5.187 5.187 4.5 6 4.5C6.4965 4.5 6.9255 4.6325 7.1465 4.8535L7.8535 4.1465C7.291 3.584 6.4505 3.5 6 3.5C4.6215 3.5 3.5 4.6215 3.5 6C3.5 7.3785 4.6215 8.5 6 8.5Z" fill="#FCFCFC"/>
            </svg>
          </p>
          <p>Все права защищены</p>
          <div className="social-block">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 6C17 5.73478 17.1054 5.48043 17.2929 5.29289C17.4804 5.10536 17.7348 5 18 5C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6C19 6.26522 18.8946 6.51957 18.7071 6.70711C18.5196 6.89464 18.2652 7 18 7C17.7348 7 17.4804 6.89464 17.2929 6.70711C17.1054 6.51957 17 6.26522 17 6Z" fill="#FCFCFC"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM8.57895 12C8.57895 11.0927 8.93938 10.2225 9.58095 9.58095C10.2225 8.93938 11.0927 8.57895 12 8.57895C12.9073 8.57895 13.7775 8.93938 14.419 9.58095C15.0606 10.2225 15.4211 11.0927 15.4211 12C15.4211 12.9073 15.0606 13.7775 14.419 14.419C13.7775 15.0606 12.9073 15.4211 12 15.4211C11.0927 15.4211 10.2225 15.0606 9.58095 14.419C8.93938 13.7775 8.57895 12.9073 8.57895 12Z" fill="#FCFCFC"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.5687 2.30722C13.8676 1.89759 10.1324 1.89759 6.43122 2.30722C4.30031 2.54513 2.57928 4.22107 2.32933 6.35908C1.89022 10.107 1.89022 13.8933 2.32933 17.6412C2.57928 19.7792 4.29925 21.4552 6.43122 21.6931C10.1324 22.1023 13.8675 22.1023 17.5687 21.6931C19.6996 21.4552 21.4207 19.7792 21.6706 17.6412C22.1098 13.8933 22.1098 10.107 21.6706 6.35908C21.4207 4.22107 19.7007 2.54513 17.5687 2.30722ZM6.60703 3.88271C10.1913 3.48606 13.8086 3.48606 17.3929 3.88271C18.8015 4.04131 19.9295 5.1505 20.0936 6.54412C20.5183 10.1691 20.5183 13.8312 20.0936 17.4562C20.0087 18.1383 19.696 18.7718 19.2059 19.2545C18.7159 19.7372 18.0771 20.0409 17.3929 20.1166C13.8086 20.5132 10.1913 20.5132 6.60703 20.1166C5.92279 20.0409 5.28406 19.7372 4.79402 19.2545C4.30397 18.7718 3.99124 18.1383 3.90633 17.4562C3.48168 13.8312 3.48168 10.1691 3.90633 6.54412C3.99124 5.86207 4.30397 5.22851 4.79402 4.74579C5.28406 4.26307 5.92279 3.95832 6.60703 3.88271Z" fill="#FCFCFC"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 8L5 12.5L9.5 14M18 8L9.5 14M18 8L14 18.5L9.5 14" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h6>Компания</h6>
          <a href="#" className="footer-link">О нас</a>
          <a href="#" className="footer-link">Курсы</a>
        </div>

        <div className="footer-column">
          <h6>Проектный офис</h6>
          <a href="#" className="footer-link">Наши проекты</a>
          <a href="#" className="footer-link">Правила оферты</a>
          <a href="#" className="footer-link">Связаться с нами</a>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
