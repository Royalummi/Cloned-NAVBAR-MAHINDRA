import style from "./work2.module.css";
import logo from "./photos/mahindra.svg";

const Work2 = () => {
  return (
    <div>
      <section id={style.nav}>
        <article className={style.nav1}>
          <div className={style.data}>
            <div className={style.met}><a href=""> METAVERSE</a></div>
            <div><a href=""> DEALER LOCATOR</a></div>
            <div><a href=""> CHARGER LOCATIONS</a></div>
            <div><a href=""> SAVINGS CALCULATOR</a></div>
          </div>
        </article>
        <article className={style.nav2}>
          <div className={style.content }>
            <div className={style.content1}><a href="">
              <img src={logo} alt="" width={60} /></a>
            </div>
            <div className={style.content2}>
              <div><a href="">DISCOVER XUV400</a></div>
              <div><a href="">KEY HIGHLIGHTS</a></div>
              <div><a href="">VARIANTS</a></div>
              <div><a href="">FEATURES</a></div>
              <div><a href="">GALLERY</a></div>
              <div><a href="">MEDIA ROOM</a></div>
              <div className={style.button}> <span className={style.own}> OWN XUV400 </span> <span className={style.arrow}> &darr;</span></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Work2;
