"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-section1">
        <div>
          <h6 className="fw-600 mb-20">Top Exams</h6>
          <p>JEE Main 2024</p>
          <p>NEET 2024</p>
          <p>Gate 2024</p>
          <p>CAT 2024</p>
          <p>CMAT 2024</p>
          <p>CLAT 2024</p>
        </div>
        <div>
          <h6 className="fw-600 mb-20">Admission</h6>
          <p>B.Tech</p>
          <p>B.E</p>
          <p>B.Sc</p>
          <p>MBBS</p>
          <p>B.Com</p>
          <p>BBA</p>
          <p>B.A</p>
        </div>
        <div>
          <h6 className="fw-600 mb-20">Top Jobs</h6>
          <p>Software Developer</p>
          <p>Data science</p>
          <p>Chartered accountant</p>
          <p>Investment banking</p>
          <p>Product Management</p>
          <p>Machine learning</p>
          <p>Marketing management</p>
        </div>
        <div>
          <h6 className="fw-600 mb-20">Company</h6>
          <p>About</p>
          <p>Contact Us</p>
          <p>Carrers</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
      <div className="Footer-section2">
        <Image
          src="/image/linkedin.svg"
          alt="linkedin-collegetsa"
          title="linkedin-collegetsa"
          width={25}
          height={25}
        />
        <Image
          src="/image/twitter.svg"
          alt="twitter-collegetsa"
          title="twitter-collegetsa"
          width={25}
          height={25}
        />
        <Image
          src="/image/telegram.svg"
          alt="telegram-collegetsa"
          title="telegram-collegetsa"
          width={25}
          height={25}
        />
        <Image
          src="/image/youtube.svg"
          alt="youtube-collegetsa"
          title="youtube-collegetsa"
          width={25}
          height={25}
        />
        <Image
          src="/image/instagram.svg"
          alt="instagram-collegetsa"
          title="instagram-collegetsa"
          width={25}
          height={25}
        />
        <Image
          src="/image/whatsapp.svg"
          alt="whatsapp-collegetsa"
          title="whatsapp-collegetsa"
          width={25}
          height={25}
        />
      </div>
      <div className="mt-20 Footer-section3">
        <a href="tel:8122294222" className="contact mr-30">
          <span className="mr-10">
            <Image
              src="/image/call.png"
              width={25}
              height={25}
              alt="collegetsa-call"
            />
          </span>
          <span className="call-text">8122294222</span>
        </a>
        <a href="mailto:collegetsainfo@gmail.com" className="contact">
          <span className="mr-10">
            <Image
              src="./image/mail.svg"
              width={25}
              height={25}
              alt="collegetsa-email"
            />
          </span>
          <span className="call-text">collegetsainfo@gmail.com</span>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
      <p className="fw-600 text-center mt-10">
        Copyright © 2024 collegetsa.com
      </p>
    </footer>
  );
}
