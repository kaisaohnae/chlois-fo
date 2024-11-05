import React, {useState, useEffect} from 'react';
import Script from 'next/script';

/*function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(); // 이미 스크립트가 로드되어 있으면 바로 resolve
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}*/


const Map = () => {


  useEffect(() => {
    const container = document.getElementById('map');
    console.log(window?.Kakao);
    console.log(window?.kakao);
    /*const options = {
      center: new window.kakao.maps.LatLng(37.85793516428404, 127.51808523634688),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);
    const marker = new window.kakao.maps.Marker({
      map,
      position: new window.kakao.maps.LatLng(37.85793516428404, 127.51808523634688),
    });

    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);*/
  }, []);

  return (
    <>

      <div id="map" style={{width: '100%', height: '400px'}}/>
    </>
  );
};

export default Map;
