"use client";
import Image from "next/image";
import React from "react";

export default function HomeContent() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mt-50 mb-50">
        <div className="home-content-group-field">
          <div>
            <h6 className="fw-600 mb-15">
              Why it is important to choose the Right College for your
              professional carrier?
            </h6>
            <p>
              Choosing a quality college is one of the significant decisions
              that every student will make in life. It's true where we attend
              our college will have a lasting impact on our professional and
              personal lifestyles. On that note, most students should go to good
              colleges; instead of choosing random ones for their further
              education. A good and reputable college will offer impressive
              employment opportunities that matches your skills and expertise.
              Moreover, the combination of student's skills and the college's
              best opportunity will become a successful career for the student.
            </p>
          </div>
          <Image
            src="/image/step-by-step.png"
            alt="step-by-step"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-50">
        <div className="home-content-group-field">
          <Image src="/image/think.png" alt="think" width={300} height={200} />
          <div>
            <h6 className="fw-600 mb-15">
              Why it is important to choose the Right College for your
              professional carrier?
            </h6>
            <p>
              Choosing a quality college is one of the significant decisions
              that every student will make in life. It's true where we attend
              our college will have a lasting impact on our professional and
              personal lifestyles. On that note, most students should go to good
              colleges; instead of choosing random ones for their further
              education. A good and reputable college will offer impressive
              employment opportunities that matches your skills and expertise.
              Moreover, the combination of student's skills and the college's
              best opportunity will become a successful career for the student.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
