import React from "react";
import { useInView } from 'react-intersection-observer';
import { Container, Button } from "react-bootstrap";
import { BiLogoDiscordAlt, BiLogoGmail, BiLogoTwitter } from "react-icons/bi";
import Logo from "../assets/CS_Logo.png";
import Join_image from "../assets/undraw_welcoming_re_x0qo.svg";

import "../index.css";

function Home() {

    // about animation
    const { ref : RefAboutHeader  , inView : AboutHeaderView } = useInView({
        triggerOnce : true
    });
    const { ref : RefAboutText  , inView : AboutTextView } = useInView({
        triggerOnce : true
    });   
    
    
    // join text animation
    const { ref : RefJoinText  , inView : JoinTextView } = useInView({
        triggerOnce : true,
        delay : 500,
    });
    const { ref : RefJoinImg  , inView : JoinImgView } = useInView({
        triggerOnce : true,
        delay : 500,
    });   
    
    



  return (
    <main>

      <Container className={`main-container  fadeInUp`} >
        <div className="main-clubLogo">
          <span className="main-clubName">
            <h1>نادي الحاسب الآلي</h1>
            <br />
            <h5>و تقنية المعلومات</h5>
          </span>
          <img src={Logo} className="main-logo" alt="logo" />
        </div>

        <h6 className="main-th2">مجتمع الحاسب الآلي في كلية الجبيل الصناعيه</h6>

        <div className="main-social">
          <a href="#" target="_blank">
            <BiLogoDiscordAlt />
          </a>

          <a href="#" target="_blank">
            <BiLogoGmail />
          </a>

          <a href="#" target="_blank">
            <BiLogoTwitter />
          </a>
        </div>

        {/* <span className="main-divider1 css-selector"></span> */}
      </Container>

      <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800" className="main-svg">
      <defs>
        <linearGradient
          id="oooscillate-grad"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="hsl(182, 90%, 47%)"></stop>
          <stop offset="100%" stopColor="hsl(249, 78%, 53%)"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#oooscillate-grad)"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M0 462q355.5-127 711-62t711 62" opacity="1"></path>
        <path d="M0 441q355.5-106 711-41t711 41" opacity="0.95"></path>
        <path d="M0 420q355.5-85 711-20t711 20" opacity="0.91"></path>
        <path d="M0 399q355.5-64 711 1t711-1" opacity="0.86"></path>
        <path d="M0 378q355.5-43 711 22t711-22" opacity="0.82"></path>
        <path d="M0 357q355.5-22 711 43t711-43" opacity="0.77"></path>
        <path d="M0 336q355.5-1 711 64t711-64" opacity="0.73"></path>
        <path d="M0 315q355.5 20 711 85t711-85" opacity="0.68"></path>
        <path d="M0 294q355.5 41 711 106t711-106" opacity="0.64"></path>
        <path d="M0 273q355.5 62 711 127t711-127" opacity="0.59"></path>
        <path d="M0 252q355.5 83 711 148t711-148" opacity="0.55"></path>
        <path d="M0 231q355.5 104 711 169t711-169" opacity="0.5"></path>
        <path d="M0 210q355.5 125 711 190t711-190" opacity="0.46"></path>
        <path d="M0 189q355.5 146 711 211t711-211" opacity="0.41"></path>
        <path d="M0 168q355.5 167 711 232t711-232" opacity="0.37"></path>
        <path d="M0 147q355.5 188 711 253t711-253" opacity="0.32"></path>
        <path d="M0 126q355.5 209 711 274t711-274" opacity="0.28"></path>
        <path d="M0 105q355.5 230 711 295t711-295" opacity="0.23"></path>
        <path d="M0 84q355.5 251 711 316t711-316" opacity="0.19"></path>
        <path d="M0 63q355.5 272 711 337t711-337" opacity="0.14"></path>
        <path d="M0 42q355.5 293 711 358t711-358" opacity="0.1"></path>
      </g>
    </svg>
      </span>

      <Container className="main-sec2">
        <h1 
        className={`sec2-heading ${AboutHeaderView  ? 'fadeInRightBig' : 'hidden'}`}
        ref={RefAboutHeader}>
          عن <span style={{ color: "var(--sec-text)",background: "none"}}>النادي</span>
        </h1>
        <h5 

        className={`sec2-content ${AboutTextView ? 'fadeInLeftBig' : 'hidden' } `}
        ref={RefAboutText} >
          تعد أندية النشاط الطلابي ملتقى مهماً لاكتشاف وتطوير وتنمية المواهب ،
          والعمل على تشجيع الابتكار والإبداع لدى الطلبة ، كما تعد الاندية مركز
          اشعاع علمي وثقافي واجتماعي ورياضي وفني يتيح للطلبة التواصل مع رواد هذه
          الأنشطة داخل الجامعة وخارجها ومصدر رئيس لعرض نتاجهم حتى يكونوا لبنة
          تثري المجتمع ومكتسب نفخر به
        </h5>
      </Container>

      <Container className="main-joinUs">
        <h1 
        className={`joinUs-text ${JoinTextView ?'fadeInRightBig' : 'hidden'}`}
        ref={RefJoinText}
         >
          إذا كنت<span style={{ color: "var(--sec-text)", background : "none", fontWeight : "700"}}> مهتم </span>
          بالأنضمام إلى النادي , لا تتردد بالتواصل معنا  !
          {/* style={{color : "var(--sec-text)", border : "1px solid var(--sec-text)"}} */}
        </h1>

        {/* <Button variant="outline-primary"  onClick={() => {window.location="/join"}}>
            إنضم
          </Button> */}

        <img
        src={Join_image} 
        className={`main-joinImg ${JoinImgView ? 'fadeInLeftBig' : 'hidden'} `}
        ref={RefJoinImg}
        />
      </Container>

    </main>
  );
}

export default Home;
