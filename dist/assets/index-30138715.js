(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();let u=document.querySelector(".searchCity"),y=document.querySelector(".btnForSearchingCity"),g=document.querySelector(".showingResult"),p=document.querySelector(".location"),h=document.querySelector(".temp"),f=document.querySelector(".weatherType");document.querySelector(".iconForWeather");let x=document.querySelector(".pressureData"),w=document.querySelector(".visiblityData"),S=document.querySelector(".humidityData"),D=document.querySelector(".rainData");document.querySelector(".nextDayForecast");let T=document.querySelector(".nextDayTemp"),q=document.querySelector(".nextDayWeatherType"),v=document.querySelector(".sunSetHeading"),b=document.querySelector(".sunRiseHeading"),C=document.querySelector(".fiveDaysForecastData"),m=document.querySelector(".loader"),$="25638fbc218082858b544a5736b166b1";const L=()=>{console.log("1");const e=async o=>{console.log(o);let n=o.coords.latitude,t=o.coords.longitude;console.log("pos fetched");let s=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${n}&longitude=${t}&localityLanguage=en`;const d=await(await fetch(s)).json();console.log(d.city),l(d.city)},r=o=>{console.error(o.message)};console.log("2"),navigator.geolocation.getCurrentPosition(e,r)};L();function W(){m.classList.remove("hidden"),document.querySelector(".allContent").classList.add("hidden")}function k(){m.classList.add("hidden"),document.querySelector(".allContent").classList.remove("hidden")}const H={Clear:"/assets/WeatherConditionsBackground/clearsky.jpg",Clouds:"/assets/WeatherConditionsBackground/clouds.jpg",Mist:"/assets/WeatherConditionsBackground/mist.jpg",Snow:"/assets/WeatherConditionsBackground/snow.avif",Thunderstrom:"/assets/WeatherConditionsBackground/thunderstrom.avif",Rain:"/assets/WeatherConditionsBackground/rain.jpg"};let c="",i=[];const M=e=>{document.querySelector(".cautionDummyData").style.display="none",k(),console.log(e);let r=e.list[0].weather[0].main;f.innerText=r,q.innerText=e.list[1].weather[0].main,g.style.backgroundImage=`url(${H[r]})`,T.innerText=`${e.list[1].main.temp}°C`,p.innerText=e.city.name,h.innerText=`${e.list[0].main.temp}°C`,x.innerText=`${e.list[0].main.pressure}mb`,w.innerText=`${e.list[0].visibility/1e3}Km`,S.innerText=`${e.list[0].main.humidity}%`;let o=Math.round(e.list[0].pop*100);D.innerText=`${o}%`,b.innerText=`${window.moment(e.city.sunrise*1e3).format("HH:mm a")}`,v.innerText=`${window.moment(e.city.sunset*1e3).format("HH:mm a")}`,i.push(e.list[0].dt_txt.slice(0,10)),console.log(i),c="",e.list.map(n=>{n.dt_txt.slice(0,10)==i[i.length-1]||(i.push(n.dt_txt.slice(0,10)),c+=`<div
   class="forecast"
 >
   <img
     src="http://openweathermap.org/img/w/${n.weather[0].icon}.png"
     alt=""
     class="forecastIcon"
   />
   <div class="dateAndWeather">
     <p class="forecastDate">${window.moment(n.dt*1e3).format("MMMM Do")}</p>
     <p class="forecastDescp">${n.weather[0].main}</p>
   </div>
   <p class="forecastTemp">
     <span>${n.main.temp_min}&deg;</span>/<span>${n.main.temp_max}&deg;</span>
   </p>
 </div>`)}),C.innerHTML=c},B=()=>{console.log("in"),console.log(document.getElementsByTagName("body")),document.body.innerHTML="",document.body.innerHTML=`<div class="errormessage m-auto p-4 lg:w-5/12 h-full flex flex-col items-center my-4 space-y-5">
  <h1 class="text-3xl lg:text-5xl font-semibold my-4">Something Went Wrong 🤪</h1>
  <h3 class="text-3xl my-2">Few steps you can take to sove the issue</h3>
  <ul  class="list-disc my-4">
    <li class="text-2xl my-2"> 
      . Confirm that your city not only exist in your imagination 
    </li>
    <li class="text-2xl my-2">
      . Check your internet connection
    </li>
    <li class="text-2xl my-2">
      . Try to reload the website 
    </li>
  </ul>
</div>`},l=async e=>{console.log(e);const r=`https://api.openweathermap.org/data/2.5/forecast?q=${e}&units=metric&appid=${$}`;try{W();const o=await fetch(r);if(!o.ok)throw Error(o.status);const n=await o.json();console.log(n),M(n)}catch(o){B(),console.log(o)}};y.onclick=()=>{console.log(),l(u.value)};window.onkeydown=e=>{e.key=="Enter"&&l(u.value)};
