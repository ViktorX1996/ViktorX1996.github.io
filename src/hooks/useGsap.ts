import { useEffect } from 'react'
import { gsap } from 'gsap';
import { useRef } from 'react';

function useGsap(isScrolled: boolean ) {
    const tempRef = useRef<HTMLDivElement>(null);
    const contRef = useRef<HTMLDivElement>(null);
    const infoCityRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isScrolled) {
          gsap.to(tempRef.current, {
            opacity: 0,
            duration: 0.5,
            fontSize: "25px",
            x: '-50px',
            y: '10px',
           
          });
          gsap.to(contRef.current, {
            opacity: 1,
            duration: 0.5,
            // border: "1px solid red",
            height: "110px",
            backgroundSize: "100px 100px"
          });
          gsap.to(infoCityRef.current, {
            duration: 0.5,
            fontSize: "20px",
          });
        }
        else {
          gsap.to(tempRef.current, {
            opacity: 1,
            duration: 0.5,
            fontSize: "102px",
            x: 0,
            y: 0,
          });
          gsap.to(contRef.current, {
            opacity: 1,
            duration: 0.5,
            // border: "1px solid blue",
            height: "220px",
            backgroundSize: "150px 150px"
          });
          gsap.to(infoCityRef.current, {
            duration: 0.5,
            fontSize: "37px",
          });
     
        }
      }, [isScrolled]);

  return [tempRef, contRef, infoCityRef];
}

export default useGsap