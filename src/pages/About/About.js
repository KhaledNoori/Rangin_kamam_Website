import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-4 about-section" id="about">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="fs-1 fw-bold myHeader">بیوگرافی</h1>
          </Col>
        </Row>
        <Row className="gy-4 mt-2">
          <Col lg={5}>
            <img data-aos="slide-up"
              src="./assets/images/5.jpeg"
              alt="photo"
              className="img-fluid rounded about-image"
            />
          </Col>
          <Col lg={7} dir="rtl">
            <h2 className="fw-bold kam-name" data-aos="zoom-in">حمیدالله کامگار</h2>
            <p dir="rtl" className="paragraph">
              تاریخ‌نگار، مقاله‌نویس، شاعر و پژوهش‌گرِ معاصر هرات؛ حمیدالله
              ‌کام‌گار در ۱۳۶۵ خورشیدی در شهرستان غوریان استان هرات متولد شد.
              سند بکلوریا را در سال ۱۳۸۵ خورشیدی از دبیرستان وزیریارمحمدخان
              غوریان به دست آورد، متعاقباً مؤفق شد از رشتۀ انجنیری برق در سال
              1396 خورشیدی هرات فارغ گردد. در بهار ۱۳۸۶ خورشیدی به ادارۀ برق
              غوریان شامل، و در سال ۱۳۸۹ خورشیدی به سب‌استیشن غوریان تبدیل، و در
              یک امتحان آزاد و رقابتی به عنوان سرشیفت این سب استیشن تعیین، و تا
              اکنون در این پست ایفای وظیفه می¬کند. وی به‌خاطر داشتن مهارت در بخش
              انجنیری برق قدرت مدتی نیز به¬طور خدمتی در سب استیشن برق قلعه¬نو،
              مرکز استان بادغیس افغانستان انجام وظیفه نموده است. کام‌گار در
              ادارۀ مورد نظر ضمن ایفای وظیفۀ اصلی‌اش به مطالعه، تحقیق و
              پژوهش¬های تاریخی پرداخته، و کارهای تاریخی و پژوهشی ارزشمند و
              ماندگاری را در زمینۀ هرات‌شناسی و خراسان تاریخی خلق کرده است.
            </p>
            <p dir="rtl" className="paragraph">
              کام‌گار تاریخ‌نگار و محققی است جوان که ادامۀ راه شادروانان؛ استاد
              فکری سلجوقی، مایل هروی، محمد علم غواص، محمد محسن صابر هروی، مسعود
              رجایی و دیگر پژوهش‌گران معاصر هرات را دنبال نموده، سختی‌ها را با
              جان و دل پذیرفته، رنج سفر را تحمل کرده، از سفرۀ همسر و دخترانش جدا
              کرده تا سرانجام گوشه‌های تاریک از تاریخ درخشان هرات را روشنایی
              اندازد، تا هویت فرهنگی و ناشناختۀ این مرز و بوم را به نسل جوان و
              آیندۀ این دیار بشناساند.
            </p>
            <p dir="rtl" className="paragraph">
              فعالیت‌هایش بی‌شمارند و نخستین گام¬هایش را روی راه¬اندازی، چاپ و
              نشر ماه‏نامه¬ای در غوریان تمرکز داد که در حقیقت نخستین ماه‌نامه در
              غوریان گفته می‌شود. این ماه‌نامه در سال 1392 خورشیدی در غوریان
              راه‌اندازی شد. ماه‌نامۀ اتفاق با پوستر رنگی در زمینه‌های فرهنگی،
              هنری، تاریخی و اجتماعی فعالیت داشت. ماه‌نامۀ اتفاق زیر نظر یک تیم
              و هیئت علمی کاربلد به‌طور منظم چاپ و به دسترس عموم قرار می‌گرفت.
              در کنار آن؛ با نشریات آوای زن، صدای جوان، فصل‌نامۀ نوید و دیار
              دارا همکار بوده، چندین مقالۀ تحقیقی و پژوهشی‌اش در نشریات و مجلات:
              روزنامۀ اتفاق اسلام، معرفت، حامیان میراث فرهنگی، صدای جوان، آوای
              زن، مهاجر، دیار دارا، نوید و غیره منتشر شده است.
              <Button variant="Link text-primary" className="learnMore">
                معلومات بیشتر...
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;