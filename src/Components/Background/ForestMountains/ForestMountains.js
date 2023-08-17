import React from "react";
import PropTypes from "prop-types";
import "./ForestMountains.scss";

/**
 * @function ForestMountains
 * @description A responsive background image that adjusts for the time of day.
 * @see https://codepen.io/cssinate/pen/rNaozEV
 * @author Paul Grant
 * @author Alexander Burdiss
 * @since 6/5/21
 * @version 1.0.2
 * @param {object} props The JSX props passed to this React component
 * @param {String} [props.timeOfDay] An optional prop that will force the
 * background to render either day or night.
 */
export default function ForestMountains({ timeOfDay }) {
  /**
   * @function ForestMountains~getClassForTimeOfDay
   * @description Checks the current hour, and if it is between 7am and 7pm,
   * will show a daytime scene, but will show a nighttime scene otherwise.
   * If the timeOfDay prop is passed to this component, it will override the
   * day/night functionality.
   * @author Alexander Burdiss
   * @since 6/5/21
   * @version 1.0.0
   * @returns {String} "image-light" or "image-dark" depending on the current
   * time of day
   */
  function getClassForTimeOfDay() {
    if (timeOfDay) {
      if (timeOfDay == "day") {
        return "image-light";
      } else {
        return "image-dark";
      }
    } else {
      let currentDate = new Date();
      let time = currentDate.getHours();
      if (time > 7 && time < 19) {
        return "image-light";
      } else {
        return "image-dark";
      }
    }
  }

  return (
    <div className="ForestMountains-Container">
      <div className={`image ${getClassForTimeOfDay()}`}>
        <svg className="section_sky" preserveAspectRatio="none">
          <defs>
            <linearGradient
              className="gradient"
              id="gradient-sky"
              gradientTransform="rotate(90)"
            >
              <stop offset="0%" stopColor="var(--sky-top)" />
              <stop offset="40%" stopColor="var(--sky-mid)" />
              <stop offset="100%" stopColor="var(--sky-bottom)" />
            </linearGradient>

            <linearGradient
              className="gradient"
              id="gradient-fog"
              gradientTransform="rotate(90)"
            >
              <stop offset="5%" stopColor="#000000" />
              <stop offset="90%" stopColor="var(--fog)" />
            </linearGradient>

            <linearGradient
              className="gradient"
              id="gradient-sun"
              gradientTransform="rotate(90)"
            >
              <stop offset="5%" stopColor="#000000" />
              <stop offset="90%" stopColor="var(--sun)" />
            </linearGradient>
          </defs>
          <rect height="100%" width="100%" fill="url(#gradient-sky)" />
        </svg>

        <svg className="section_sun screen" viewBox="0 0 27 27">
          <circle
            id="sun"
            className="screen"
            fill="url(#gradient-sun)"
            cx="50%"
            cy="50%"
            r="13"
          />
          <g className="moon">
            <polygon
              className="moon-grey1"
              points="15.37 23.8 15.37 23.8 15.37 23.8 15.37 23.8"
            />
            <path
              className="moon-grey1"
              d="M15.22,23.81s0,.06-.06.11h0s0,0,.2-.11h0Z"
            />
            <path
              className="moon-grey1"
              d="M19.05,14.34a2.34,2.34,0,0,1,.1.4A.9.9,0,0,0,19.05,14.34Z"
            />
            <path
              className="moon-grey1"
              d="M9.81,3.24h0a2.65,2.65,0,0,1-.33.24l-.14.19c-.23.34-.47.66-.68.94v0a.58.58,0,0,1,.43.13c-.07-.06-.1-.12.11.08l0-.1,0,.1c2.25-.75,1.38.3,1.57,1a1.47,1.47,0,0,1,.2-.4c-.17-.45.14-.83.57-1.15a.63.63,0,0,1-.32-.06A1.39,1.39,0,0,1,9.81,3.24ZM9.2,4.72v0ZM9.61,4c0-.05,0-.09.19-.29C10.08,3.82,10,4.45,9.61,4Zm.89.31s-.11,0,0,0Z"
            />
            <path
              className="moon-grey1"
              d="M19.64,16.88c-.24-.11-.09-.79-.65-.68h0c-1,.78-.93.76-.62.36h0l0,0a2.07,2.07,0,0,0,.36-2.39H18.6q0-.11-.06-.24a3.13,3.13,0,0,0-.84-.55c-.62.62-.69.46-2.33.12l-.16,0c-.11,1.35-.6.28-1.11,1.13-.74.79-.59.95-1.77-.22-.78-.48,1-1.75-.78-1.93-.68,2.67-2.27,1.24-1.19-1.18-.16-.61-1.69-.84-1.65-1.6,1.73-.19,2.41-.5,3-2.07a2.11,2.11,0,0,0,0-.25l.09-.08a.17.17,0,0,0,0-.05h.09a.3.3,0,0,1,.16,0c1.05-.06,1.15-1-.32-1l.4,0a5.56,5.56,0,0,1-1.05-.17L10.86,6h0c.13.2.39.35.92.39A2.9,2.9,0,0,1,8,9.28c.13,0-.4,1.28.2,1.11.2-.18.95.37.19.47C6.1,10.59,10.83,12,5.92,12.35c-1.95-.27-1.61-.82-1-2.72-.72.13-.21-.73.74-1.46a.47.47,0,0,0,0-.16h0l0,0V8h0a.89.89,0,0,0-.4.36c-.26.33-.51.73-1,.45.44-.4.42-1.62-.64-.54.13.13.12.42.07.75,0,0,0,0,0,.05l0,.06c-.16,1-.57,2.13.69.94.15.9-.8,1.83,1,2.41C2.43,15.93,2.51,15,4,18.9c.18.26.38.53.61.81.53.35,1.09.43,1.16,1.26C5.5,22.2,4,19.82,3.68,20.46c.1.29.95,1.56,0,1,.37.45,1.74,1.85,1.76,1.63A1.41,1.41,0,0,1,5.22,22c0-.34-.55-.82.6-.49.44.15.84,0,.58-.78s-1.48-.91-2-1.41a4.44,4.44,0,0,0-1.13-2.34c.28-.16.86-1,.59-1.26-.16-.62.71-.36,1.36-.5.68-1.43,1.2,1.43,2.08,0,1.15-2.9,1.08,2.37,2,2.66.3.61-1.22-.22.13,1.45.27,1.1.86.42,1.78.36.68-.73,1.58-.29-1.84,1.85-.28.43-2.06-1-1.26.31-1.82-.34,1.15,1.81,1.43.94-.47-2.32,2.16-.74,3.61-1.57-1.13-.4,1.29-.42-.71-1,.11,0-.47-.09.05-.3.7-.12.19-.89,1.46-1.52-.06-.21-.58-.13-.73-1.43,1.26.47,1,.7,1.88-.77.11-.35,1.15-.58.58-1-.4-.25-.43-.5-1.11.26-.38.08-1.48,0-.43-.56,1-.85,5.49-2.25,4.47.83-.75.66-1.46,0-1.5,1.21-.06.05-2.36-.05-.35,1.06h.06s0,0,0,.06c.3.16.66.33,1.13.54.7-.73,1.58-.93,1.88.51-.07,1.37-2.2,1.56-1.95.74l-.19-.22a7.94,7.94,0,0,0-1.09.22c-.57.33-.53.64-.33.94l.15.05a.45.45,0,0,0,0,.11c.38.45,1,.89,0,1.34,1.23.58-.19,1-1.09,1.54h0c-.06.06,0,0-.2.12,0,0,0,0,0,0l-.11.1a.59.59,0,0,0-.17,0l.17,0c-.51.48-4.53,2-5.32.74l0-.05-.13.05,0,0-.07,0a.71.71,0,0,1,0,.48l-.3-.11c.33.63,4.85,1.06,9.19-3.31,0-.61-1.25-1-.94-1.87,1.14,1.69,4.61-1.13,1.95-2.31-.2-.37,1.32.53,1.21-.93l0-.24C20.22,17.09,19.65,14.73,19.64,16.88ZM3.55,16.44s-.11-.15,0,0a.14.14,0,0,1,0-.06A.14.14,0,0,0,3.55,16.44ZM12.12,13c.07.06.23.08-.1.24C12,13.16,11.77,13.15,12.12,13ZM8,12.54l0,0,0,0S7.88,12.37,8,12.54ZM4.43,14.32c.05-.05.07-.19.23.08C4.57,14.44,4.55,14.6,4.43,14.32Zm4.21.56c-1.39-2.5-2.19,2.71-1.74-1.55-.53-.61-.32-.18-1,.66-.36.15-1.42-.31-.55-.36C6.22,12,9.19,12.67,8.64,14.88Zm.7,0c-.67.28.59-1.46-.38-1.6s-.51-1.8.33-2.13c-.24-.36-.31-.8.41-.12s-1.22,4.59,2.11,2.66C12.87,16.66,11.38,14.68,9.34,14.93Zm2.57,1.53c-.61.48-.92-1.06-.24-.67.32.6.12.25.78-.17C12.81,15.74,12.22,16.44,11.91,16.46Zm3.44-2.69s-.09-.29,0,0q.06-.07.06-.06S15.39,13.72,15.35,13.77ZM18,17.31c-.06-.33.44-.52.84-.81C19.05,16.77,18.55,17.64,18,17.31Zm2-.11c-.09,0,.07.13-.34.2C19.08,17.21,20.25,16.74,20,17.2Z"
            />
            <path
              className="moon-grey1"
              d="M3.71,21.45l0-.08C3.62,21.32,3.64,21.36,3.71,21.45Z"
            />
            <path className="moon-grey1" d="M16.65,13.65l0,0-.15,0Z" />
            <path
              className="moon-grey2"
              d="M18,18.56c-.47-.21-.83-.38-1.13-.54l-.1-.05c-2-1.11.29-1,.35-1.06,0-1.17.75-.55,1.5-1.21,1-3.08-3.47-1.68-4.47-.83-1.05.53,0,.64.43.56.68-.76.71-.51,1.11-.26.57.43-.47.66-.58,1-.88,1.47-.62,1.24-1.88.77.15,1.3.67,1.22.73,1.43-1.27.63-.76,1.4-1.46,1.52-.52.21.06.27-.05.3,2,.54-.42.56.71,1-1.45.83-4.08-.75-3.61,1.57-.28.87-3.25-1.28-1.43-.94-.8-1.35,1,.12,1.26-.31,3.42-2.14,2.52-2.58,1.84-1.85-.92.06-1.51.74-1.78-.36-1.35-1.67.17-.84-.13-1.45-.91-.29-.84-5.56-2-2.66-.88,1.45-1.4-1.41-2.08,0-.65.14-1.52-.12-1.36.5.27.25-.31,1.1-.59,1.26a4.44,4.44,0,0,1,1.13,2.34c.51.5,1.61.77,2,1.41s-.14.93-.58.78c-1.15-.33-.62.15-.6.49a1.41,1.41,0,0,0,.27,1.14c.7.95,2.46,1.58,3.7,2l.3.11a.71.71,0,0,0,0-.48.39.39,0,0,0-.1-.16,1.77,1.77,0,0,1,.17.14l0,0,.13-.05,0,.05c.79,1.26,4.81-.26,5.32-.74l-.17,0a.59.59,0,0,1,.17,0l.11-.1s0,0,0,0h0c.05-.05.07-.08.06-.11l.15,0h0c-.18.08-.19.1-.2.11.19-.11.14-.06.2-.12h0c.9-.57,2.32-1,1.09-1.54.93-.45.35-.89,0-1.34l-.12-.16c-.2-.3-.24-.61.33-.94a7.94,7.94,0,0,1,1.09-.22l.19.22c-.25.82,1.88.63,1.95-.74C19.57,17.63,18.69,17.83,18,18.56Zm-9.53.6c.26-.21.35-.12.75.27C9.16,19.78,8,19.64,8.46,19.16ZM4.71,16.3s-.1-.14,0,0l0,0Zm2.2-.38a1.7,1.7,0,0,1,.35.29C7.2,16.68,6.47,16.34,6.91,15.92Zm3.47,8.7a.51.51,0,0,1,0-.13.26.26,0,0,0,0,.11Zm2.77-3.46c0-.07.31-.16,0,0Zm.17-1.75s-.11.05,0,0Zm.57-.12c0-.05-.25-.08,0-.18C14,19.14,14.14,19.19,13.89,19.29Zm1.48,4.51h0Zm-.18-4.72c-1,0-1.47-1.36.21-.83C15.63,18.31,15.74,18.49,15.19,19.08Zm1.48,3.72Zm-.46-1.67,0,0L16.11,21A.65.65,0,0,1,16.21,21.13Z"
            />
            <path
              className="moon-grey3"
              d="M25.21,8.75c.06.16.12.31.17.47A4.61,4.61,0,0,0,25.21,8.75Z"
            />
            <path
              className="moon-grey3"
              d="M10,.93l.12.08C9.27.93,7.91,1.73,7.2,2.07c.17,0,0,0,.4,0C6.65,2,4.23,5.65,6.11,4.31c.4-.09-1,.9.06,1.52.85,0,.27,0,.31-1.16.88-.32,4.37-2.86,2-.44C8.17,4.3,6.3,6,7.26,5.74L7.07,6c-.05,0-.2,0-.35.13C6,7,5.67,8.7,4.41,7.33,2.62,8.7,3.11,7.24,2.65,9.08c-.25,1.66-1-.14-1.21,2.1C1,14.81,2.86,18.88,3.68,21.37l0,.08v0h0c.9.55,0-.72,0-1C4,19.82,5.5,22.2,5.78,21c-.07-.83-.63-.91-1.16-1.26a1.74,1.74,0,0,1-.46-.41L4,18.9c-1.5-3.92-1.58-3,1.35-6.43-1.81-.58-.86-1.51-1-2.41-1.26,1.19-.85,0-.69-.94,0,0,0-.07,0-.11,0-.33.06-.62-.07-.75,1.06-1.08,1.08.14.64.54.49.28.74-.12,1-.45A.89.89,0,0,1,5.65,8h0l.11,0L5.66,8l0,0h0L6,7.94c2.85-.66.89-1.55,1.22-1.77A11.78,11.78,0,0,0,8.59,4.64h0l0,0c.21-.28.45-.6.68-.94l.14-.19a2.65,2.65,0,0,0,.33-.24h0a.17.17,0,0,1,0-.05A2.26,2.26,0,0,1,11.49,1.9a.21.21,0,0,1,.19,0A2.28,2.28,0,0,1,13.34,3c-.09.57-.88,1.09-1.7,1.23l-.12.09c-.43.32-.74.7-.57,1.15l0,.08c.62-.93.88-.62,1-.27.67-1.32,1.73-1,2-2.43.4-.33.46.23.62.4,1.39,0,.34.28.16.45-.75.73.9,0,.9,0,.59-1.79-.53-1-.6-1.51,2-2.86,8.74,3.46,10.09,6.55-.05-.12-.09-.25-.14-.37C22.65,2.63,16-.81,10,.93ZM7.18,2.5a.86.86,0,0,1,.67-.2,1.23,1.23,0,0,1,.78.51L8.76,3h0C6.29,5.12,6.34,3.19,7.18,2.5ZM6.7,6.57s0,0,0-.09l.08-.06A1,1,0,0,0,6.7,6.57Z"
            />
            <path
              className="moon-grey4"
              d="M2.73,20.17c-1-2-1.14-4.13-1.66-6.22C-.26,11.48,1.68,19.55,2.73,20.17Z"
            />
            <path
              className="moon-grey4"
              d="M.81,11.09c.48.06.79-1.55,1-1.91C1.4,8.24.8,10.84.81,11.09Z"
            />
            <path
              className="moon-grey3"
              d="M19.05,14.34a1.74,1.74,0,0,0-.88-1h0a1.34,1.34,0,0,0-1.47.32l0,0-.12-.05c-1.83-.74-2,.51-3.17,1.4-.81-.92-.6-1.72-.75-2.65-3.69-.22-1-.27-2.55-1.84-.72.16-.09-.27-.26-.57.33-.47,1,.07,1.24-.47A2.33,2.33,0,0,0,11.63,8a1.08,1.08,0,0,1,0-.21c.09-.31.31-.46,1.12-.3.35-.09.44-.11.44-.27.81-2.83.47-.06,2.14-1.33.81-.15.47-.32.36-.83,1-1.81-.87-.19-1.65-.49C13,4.8,13.84,6,12.16,6.26l-.4,0c1.47,0,1.37.89.32,1h-.25a.17.17,0,0,1,0,.05,3.19,3.19,0,0,1-.11.33c-.58,1.57-1.26,1.88-3,2.07,0,.76,1.49,1,1.65,1.6-1.08,2.42.51,3.85,1.19,1.18,1.8.18,0,1.45.78,1.93,1.18,1.17,1,1,1.77.22.51-.85,1,.22,1.11-1.13v-.07l.16,0c1.64.34,1.71.5,2.33-.12a3.13,3.13,0,0,1,.84.55,1.41,1.41,0,0,1,.2.24,2.07,2.07,0,0,1-.36,2.39l0,0c-.31.4-.41.42.62-.36h0a2.69,2.69,0,0,0,.16-1.46A2.34,2.34,0,0,0,19.05,14.34ZM9.56,9.85a.11.11,0,0,1-.05,0,.11.11,0,0,0,.05,0C9.57,9.92,9.31,10,9.56,9.85Z"
            />
            <path
              className="moon-grey3"
              d="M11,5.52c-.4.47-.07.51,0,.53C10.78,5.92,10.82,5.73,11,5.52Z"
            />
            <path className="moon-grey3" d="M11,6.05l0,0S11.06,6.06,11,6.05Z" />
            <path
              className="moon-grey2"
              d="M10.82,6a.87.87,0,0,1-.07-.17c-.19-.71.68-1.76-1.57-1,0,0-.07,0-.11-.08a.58.58,0,0,0-.43-.13H8.59A11.78,11.78,0,0,1,7.23,6.17C6.9,6.39,8.86,7.28,6,7.94a2.75,2.75,0,0,0-.33.23c-.95.73-1.46,1.59-.74,1.46-.63,1.9-1,2.45,1,2.72,4.91-.35.18-1.76,2.49-1.49.76-.1,0-.65-.19-.47-.6.17-.07-1.12-.2-1.11A2.9,2.9,0,0,0,11.74,6.4C11.21,6.36,11,6.21,10.82,6Z"
            />
            <path
              className="moon-grey2"
              d="M9.7,11.08c-.72-.68-.65-.24-.41.12-.84.33-1.34,2-.33,2.13s-.29,1.88.38,1.6c2-.25,3.53,1.73,2.47-1.19C8.48,15.67,10.5,11.89,9.7,11.08Z"
            />
            <path
              className="moon-grey2"
              d="M11.68,1.9h-.19A2.26,2.26,0,0,0,9.78,3.17a.17.17,0,0,0,0,.05v0a1.39,1.39,0,0,0,1.39,1l.44,0c.82-.14,1.61-.66,1.7-1.23A2.28,2.28,0,0,0,11.68,1.9Z"
            />
            <path
              className="moon-grey3"
              d="M5.34,13.63c-.87,0,.19.51.55.36.69-.84.48-1.27,1-.66-.45,4.26.35-.95,1.74,1.55C9.19,12.67,6.22,12,5.34,13.63Z"
            />
            <path
              className="moon-grey2"
              d="M12.45,15.62c-.66.42-.46.77-.78.17-.68-.39-.37,1.15.24.67C12.22,16.44,12.81,15.74,12.45,15.62Z"
            />
            <path
              className="moon-grey2"
              d="M18,17.31c.53.33,1-.54.84-.81C18.46,16.79,18,17,18,17.31Z"
            />
            <path
              className="moon-grey2"
              d="M19.64,17.4c.41-.07.25-.19.34-.2C20.25,16.74,19.08,17.21,19.64,17.4Z"
            />
            <path
              className="moon-grey3"
              d="M9.8,3.7c-.17.2-.18.24-.19.29C10,4.45,10.08,3.82,9.8,3.7Z"
            />
            <path className="moon-grey3" d="M9.2,4.72c0-.08,0-.06,0,0Z" />
            <path className="moon-grey3" d="M9.18,4.83l0-.1Z" />
            <path
              className="moon-grey3"
              d="M9.07,4.75s.1.1.11.08C9,4.63,9,4.69,9.07,4.75Z"
            />
            <path
              className="moon-grey2"
              d="M12,13.26c.33-.16.17-.18.1-.24C11.77,13.15,12,13.16,12,13.26Z"
            />
            <path
              className="moon-grey3"
              d="M4.43,14.32c.12.28.14.12.23.08C4.5,14.13,4.48,14.27,4.43,14.32Z"
            />
            <path className="moon-grey2" d="M15.35,13.77c-.09-.29,0,0,0,0Z" />
            <path className="moon-grey2" d="M15.35,13.77c.08-.07.08-.1,0,0Z" />
            <path className="moon-grey3" d="M3.55,16.44c0-.07,0-.09,0,0Z" />
            <path className="moon-grey3" d="M3.55,16.44c-.11-.15,0,0,0,0Z" />
            <path className="moon-grey2" d="M8,12.54c-.08-.17,0,0,0,0Z" />
            <path className="moon-grey2" d="M8,12.54Z" />
            <path className="moon-grey3" d="M10.5,4.3c-.11,0,0,0,0,0Z" />
            <path
              className="moon-grey1"
              d="M15.4,18.25c-1.68-.53-1.2.81-.21.83C15.74,18.49,15.63,18.31,15.4,18.25Z"
            />
            <path
              className="moon-grey1"
              d="M8.46,19.16c-.49.48.7.62.75.27C8.81,19,8.72,19,8.46,19.16Z"
            />
            <path
              className="moon-grey1"
              d="M7.26,16.21a1.7,1.7,0,0,0-.35-.29C6.47,16.34,7.2,16.68,7.26,16.21Z"
            />
            <path
              className="moon-grey1"
              d="M13.89,19.29c.25-.1.07-.15,0-.18C13.64,19.21,13.85,19.24,13.89,19.29Z"
            />
            <path className="moon-grey1" d="M13.15,21.16c.31-.16,0-.07,0,0Z" />
            <path className="moon-grey1" d="M4.71,16.3c-.1-.14,0,0,0,0Z" />
            <path className="moon-grey1" d="M4.71,16.3Z" />
            <path className="moon-grey1" d="M13.32,19.41c-.11.05,0,0,0,0Z" />
            <path
              className="moon-grey3"
              d="M2.65,6.83c-.76,1.91.45,0,.55-.64C2.7,5.65,2.83,6.82,2.65,6.83Z"
            />
            <path className="moon-grey1" d="M9.56,9.85c-.25.14,0,.07,0,0Z" />
            <path className="moon-grey1" d="M9.56,9.85Z" />
            <path
              className="moon-grey2"
              d="M8.63,2.81a1.23,1.23,0,0,0-.78-.51.86.86,0,0,0-.67.2c-.84.69-.89,2.62,1.58.48h0Z"
            />
          </g>
        </svg>

        <svg
          className="section_rl"
          viewBox="0 0 67 90"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--rear_highlight)"
            d="M63.62,43.23H59.33l-6.25,0-5.89,1.37s-3.32.32-4.57.33-2.93-1.7-2.93-1.7S31.94,46,29.32,45.76c-4.94-.37-8.38-.69-10-.95s-6.66-4.63-9-4.49S.29,40.93,0,41.2V51.94l67.1.06V42.93A14,14,0,0,0,63.62,43.23Z"
          />
          <path
            fill="var(--rear_shadow)"
            d="M63.62,43.94H59.33l-6.25,0-5.89,1.38s-3.32.32-4.57.33-2.93-1.71-2.93-1.71-7.88,2.92-10.5,2.72c-4.94-.37-7.57-3.76-9.17-4S12.68,40.88,10.36,41,.29,41.64,0,41.91V64.28l67.1,0V43.64A14,14,0,0,0,63.62,43.94Z"
          />
        </svg>

        <svg className="section_rm" viewBox="0 0 100 90">
          <path
            fill="var(--rear_highlight)"
            d="M-1,42.93 h1 a16,16,0,0,1,4.5.76C5.07,43.87,11,45,11,45l7.71.88,7.5,2.08s7,.52,8.63-.15a12.34,12.34,0,0,1,6-.67c2.61.2,6.3.8,6.3.8l6.53.52,5.24-.56,5.88-1,.73,5.17L0,52Z"
          />
          <path
            fill="var(--rear_shadow"
            d="M-1,43.64V64.33 h1 l66.62,0-1.85-16.8-5.88,1-5.24.56-6.53-.51s-3.69-.6-6.3-.8a12.23,12.23,0,0,0-6,.66c-1.63.68-8.63.16-8.63.16l-7.5-2.08L11,45.67S5.07,44.58,4.5,44.39A16,16,0,0,0,0,43.64Z"
          />
        </svg>

        <svg
          className="section_ml"
          viewBox="0 0 67 90"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--mid_highlight)"
            d="M60.61,50.07a24.2,24.2,0,0,0-5-1.85,41.65,41.65,0,0,1-7.46-3.08c-1.06-.62-5-2.29-5-2.29l-2.94-.28-5.7-4.23-3.88,1.4-6.15,4.08c-.69-.43-1.61-.9-1.61-.9l-6.12-5.14-4.58-1.89-6.12-4.7L-.06,26.67V62.08H67.06v-9.4C64.73,51.93,61.58,50.51,60.61,50.07Z"
          />
          <path
            fill="var(--mid_shadow)"
            d="M60.76,52a26.6,26.6,0,0,0-5.14-2c-1.71-.32-6.41-1.4-7.47-2s-5-2.29-5-2.29l-2.94-.28-5.77-6.45-3.81.8-6.15,4.08L23,44.09,16.75,40.6l-4.58-1.89L6.05,34-.06,29.5V68.38H67.06V53.66A46.25,46.25,0,0,1,60.76,52Z"
          />
        </svg>

        <svg className="section_mm" viewBox="0 0 100 90">
          <path
            fill="var(--mid_highlight)"
            d="M0,52.68h-1v9.4H101V40.2h-1l-3.38,1L94.52,40l-1.06-6.51-5.07-1.86-1-1.44L86,22.72,83.26,20.4h0l-.69-.6L77,36.15,73.73,33h0l-1-.43-6,9.45-1-.24-2.29,6-2.63-.14L52,51v1.48L46.46,56l-4.7,2.09-1.35.65c-2.33-.33-6.18-1-7.37-1.3-1.42-.4-3.24-.18-4.66-1s-6.05-.28-7.2-.48-3.42-.94-5.41-.5c-1.11.24-5.62-1.35-6.4-.87-2.62-.1-5.72-1.15-7.71-1.48A10.94,10.94,0,0,1,0,52.68Z"
          />
          <path
            fill="var(--mid_shadow)"
            d="M0,53.66h-1V68.38H101V40.59h-1l-3.38.6L94.52,40l-1.06-6.51-5.07-1.86-1-1.44L86,22.72,82.56,19.8,79.81,34.08,77,36.15l-2.07-2L73.74,33l-.44,0-5.79,9.4L66,42l-1.68,6-3.41-.27-8.33,5L52,55.33l-5.56,2.35-4.77,1.45a6,6,0,0,0-1.67.36c-2.33-.33-5.93-1-7.11-1.31-1.43-.39-3.78-.1-5.19-.94s-5.85-.39-7-.6-2.94,1.21-4.93,1.65c-1.11.24-5.51-3.7-6.3-3.22A64.22,64.22,0,0,1,1.73,54C1.26,53.91.66,53.8,0,53.66Z"
          />
        </svg>

        <svg
          className="section_mr"
          viewBox="0 0 32 90"
          preserveAspectRatio="none"
        >
          <polygon
            fill="var(--mid_highlight)"
            points="31.99 37.99 30.07 38.89 22.17 37.09 14.15 34.87 6.14 38.34 -0.01 40.2 -0.01 62.08 31.99 62.08 31.99 37.99"
          />
          <polygon
            fill="var(--mid_shadow)"
            points="31.99 38.54 30.07 38.89 22.53 37.32 15.6 35.44 6.6 39.38 -0.01 40.59 -0.01 68.38 31.99 68.38 31.99 38.54"
          />
        </svg>

        <svg className="section_mfog screen" preserveAspectRatio="none">
          <rect className="screen fog" width="100%" height="100%" />
        </svg>

        <svg
          className="section_fl"
          viewBox="0 0 67 90"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--fore_highlight)"
            d="M63.62,61.05a17.18,17.18,0,0,1-4.29,0c-2.68-.28-5-1.38-6.25-1.52s-4.82-1.29-5.89-1.5-3.58-2-4.82-2a9.19,9.19,0,0,0-2.68.57s-7.39-1.35-10-1.56c-4.94-.4-10.56,1.93-12.17,1.66s-4.82-1.8-7.14-1.65S.29,55.67,0,56v9.59h67.1V61.26Z"
          />
          <path
            fill="var(--fore_shadow)"
            d="M63.79,62.54a12.3,12.3,0,0,1-4.59.33c-2.68-.27-4.87-.38-6.12-.52s-4.7-2.84-5.77-3a34.91,34.91,0,0,0-4.94-.48c-1.26,0-2.89-1.72-2.89-1.72l-9.75-.76c-4.94-.39-10.07,1.17-11.68.9a36.75,36.75,0,0,0-7.28-.55c-2.32.15-10.49-.5-10.83-.21L0,90h67.1V62.3Z"
          />
        </svg>

        <svg className="section_fm" viewBox="0 0 100 90">
          <path
            fill="var(--fore_highlight)"
            d="M0,61.26h-1v4.29H101V56.77h-1c-2.75-.15-5.19-.52-6.78-.52-6,0-6,2.23-10.27,3.45-1.27.36-3.36,2.39-5.86,3.46-.9-.29-3.49-1.08-4.8-.84s-5.56.91-7.52-.38-4.58,1-5.88,1-2.62,1.07-5.24.59-4.24-.31-6.53-.55-3.69-.62-6.3-.84-10-1.5-10-1.5l-3.19,1.46L16.79,53.52,9.51,52l-5,9.51Z"
          />
          <path
            fill="var(--fore_shadow)"
            d="M0,62.3h-1V90H101V57.29h-1c-2.26-.11-4.21-.4-5.73-.4-6,0-7,4.41-11.32,5.63-1.27.36-3.36-.43-5.86.64a15.15,15.15,0,0,0-4.86,0c-1.31.24-5,.74-6.94-.55s-4.8,2.18-6.11,2.18-1.75.48-4.37,0-4.54-.22-6.83-.46-4.46-.75-7.07-1a95.1,95.1,0,0,1-9.76-2.06l-3.61,2.82L15.82,55.79l-6.1-3.28L4.36,62Z"
          />
        </svg>

        <svg
          className="section_fr"
          viewBox="0 0 32 90"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--fore_highlight)"
            d="M32,65.55V58.19S12.13,55.08,7.43,56.25A25.56,25.56,0,0,1,0,56.77v8.78Z"
          />
          <path
            fill="var(--fore_shadow)"
            d="M32,61S11.83,55.53,7.13,56.7A24.25,24.25,0,0,1,0,57.29V90H32Z"
          />
        </svg>

        <svg className="section_ffog screen" preserveAspectRatio="none">
          <rect className="screen fog" width="100%" height="100%" />
        </svg>

        <svg
          className="section_trees"
          viewBox="0 0 200 40"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            id="trees"
            fill="var(--trees)"
            d="M200,12.08h-.22c-.37-.05-.11-.39.12-.71l0-.06c.11-.15.06-.21,0-.26s-.3-.08-.38-.19-.37-.34-.09-.58-.16-.21-.36-.38a.66.66,0,0,1-.19-.45c-.95,0-.79.57-1,1s.28.39,0,.72-1.18,0-.9.43.78.22.27.74-2.56.1-2.4.31,1.46.17,1.61.48,0,.53-.47.89-.94.09-1.1.4.4.63.12.63-.71-.12-.67.19.47.4.55.81-.39,0-1,.33,1.45.7,1,1-1.81-.48-1.77-.05,1.22.89.43.89-.9,0-.43.48a8.76,8.76,0,0,0,1.2.74,5.89,5.89,0,0,1-.53.44c-.48.07-1.05.12-1,.35a.29.29,0,0,0,.11.2,3.66,3.66,0,0,1-1.54.44c-1,0-1,.37.18-.94s1.85-3.84,1.41-3.43a2.35,2.35,0,0,1-1.58.48c-.43,0-1.77-.27-1.06-1.09s1.41-3.43.88-3.23-.62.76-1.85.55.08-1.58.44-2.46.09-1.17-.71-.35-1.14,0-1.41-.62.27-1.51,0-2.54A3.8,3.8,0,0,0,187,5.84c-.88-.07-1.06.48-1.08,1.37s-1,3-1.3,2.47-.71-1.23-.88.07,1.14,2.13.35,1.79-.53-1.24-1.24-.42.09,1,.89,1.79.08,1.44-.44,1.37a4.32,4.32,0,0,1-2-1.23c-.71-.69-.79-.48-.79.41S182.28,15,183,15.79s-1,1-1.49.75-.8.35-.36,1.31S180.52,19,179.81,19s-.62-1.57-1.32-.75-.44,2.29.53,3.8,1.44,2,.83,2.08a1.81,1.81,0,0,1-1.19-.29c.17-.32.31-.69-.15-.5l-.41.14c-.29-.2-.61-.44-1-.72l.1-.09c.44-.33.71-1.1.14-.93a2.87,2.87,0,0,0-.84.57c-.25-.14-.42-.16-.53-.1,0-.23.23-.6.39-.91s.68-.81.19-.7-.43-.18-.77-.21c0,0,0-1.44-.26-1.58s-.07,1.23-.21,1.47-.76,0-1,0,.79.75.74,1-1.47.17-1.61-.21-.33.32.21.74.91,1.56.69,1.6a4.84,4.84,0,0,1-2.1-1.16c-.28-.44.3,1.89,1.09,2.23s0,.33-.83.6-.65.67-.11.89a6.27,6.27,0,0,1,.94.5h-.06c-.41,0-.47.2-.33.52a7.93,7.93,0,0,1-2-.62c-.31-.21-.22,0-.05.29-.3,0-.71-.05-.58-.2s.51-.49.21-.56-1.06,0-1.12-.34.27-.35.88-.44,1.12-.64,1.11-.83-.54-.07-1.11.05a4,4,0,0,1-2-.14c-.42-.21.21-.31.85-.33s.64-.43,1.06-.66,1.72-.73,1-.71a11.82,11.82,0,0,1-1.73-.26c-.27,0-.24-.45-.12-.61s.58-.38.21-.54-1.24.14-1.09-.31,1-1,.5-1-1.8-.35-1.85-.61.63-.33.75-.57-.52-.33-.82-.37-.06-.43.12-.76-.21-.23-.32-.44-.28-.33-.07-.57-.07-.25-.27-.38c-1.12-.72-.6-.82-.63-1.14s-.79-1.49-1.49.25c-.27.65-.79.19-1.15,1.22-.13.35-.73.33-.52.8s.25.22-.15.74-1.6.09-1.48.3.76.45.88.76,0,.51-.36.87-.73.09-.85.4.3.61.09.61-.55-.12-.52.19.37.4.43.8-1,.59-1.48.9,1.12.68.75,1-1.39-.47-1.36-.05.69.74.51.84c0-.05-.1-.06-.21,0-.53,0-.64,0-.37.38-.26.23-.45.34-.58.3s0-.22.24-.8A1.55,1.55,0,0,0,158.4,23c-.21-.31-.18.29-.39.29s-.52-.08-.39-.44,0-.58-.11-.5-.65,0-.44-.28.73-.55.73-.89,0-.42-.23-.16a1.26,1.26,0,0,1-.6.47c-.16,0-.37-.21-.13-.52s.46-.36.26-.68-.13,0-.37.16.16-.18.11-.68-.16-.23-.26,0-.38-.6-.39-.94-.06-.55-.32-.52a1.83,1.83,0,0,0-.18.55c-.08.39.08.73,0,1s-.18.55-.42.23-.31-.2-.2.14.49.85.13.93-.4-.13-.55-.21,0,.92.26,1.23-.19.41-.32.41a.58.58,0,0,1-.46-.18c-.13-.15.08.81.41,1.3s.36.36.06.36a1.54,1.54,0,0,1-1-.69c-.21-.34-.19,0-.16.33a11.34,11.34,0,0,1,.31,1.54c0,.26,0,.52-.21.33a3.14,3.14,0,0,1-.44-.9c-.08-.29-.1.55,0,1.08a7.28,7.28,0,0,0,.58,1.39c.13.32-.19-.08-.4-.23s-.26.05-.25.35-.34-.34-.55-.61,0,.41,0,.73.21,1.12,0,1.06-.49-.7-.65-1-.36-.11-.4.3c-.26-.07-.88,0-.73-.23s.5-.47.21-.54-1,0-1.09-.32.27-.35.85-.44,1.09-.62,1.08-.8-.52-.07-1.08.05a3.84,3.84,0,0,1-1.93-.14c-.42-.21.2-.3.82-.32s.62-.41,1-.64,1.67-.71.94-.69a11.67,11.67,0,0,1-1.68-.25c-.26,0-.23-.43-.12-.59s.56-.37.21-.53-1.2.14-1.06-.3.88-1.21.49-1a.47.47,0,0,1-.74-.32c-.06-.25.61-.32.72-.55s-.5-.32-.79-.36-.06-.41.12-.73-.21-.23-.32-.44-.27-.32-.06-.55-.12-.2-.27-.36a.74.74,0,0,1-.15-.44c-.7.05-.58.55-.76,1s.21.36,0,.68-.88,0-.68.41.59.21.21.71-1.91.09-1.79.3,1.09.16,1.2.46,0,.5-.35.84-.7.1-.82.39.29.6.09.6-.53-.12-.5.18.35.39.41.78-.3,0-.74.32,1.09.66.74,1-1.35-.46-1.32,0,.91.84.32.84-.68,0-.32.46,1.11.66.94.94-1.24.18-1.21.52.56.44.71.83-.88.18-1.56.52l-.15.08s-.14,0-.22-.09c-.78-.39-.41-.45-.44-.63s-.55-.8-1,.14c-.18.36-.55.1-.8.66-.08.19-.5.19-.35.44s.16.12-.11.4-.85.11-1,.13c0-.24-.31-.26-.39-.48-.26-.73-.63-.41-.82-.87-.5-1.23-1,.55-1.06.79s.35.3-.45.81c-.14.09-.34.1-.19.27s0,.25-.05.4-.36.09-.23.32.3.5.08.54-.66.1-.58.27.57.21.54.4-.84.44-1.32.43.24.39.35.71-.52.1-.77.22c0,0-.06,0-.07,0a2.21,2.21,0,0,1-.38-.11s-.06-.06-.16-.08-.07,0-.08-.08.49-.2.59-.34-.4-.2-.64-.23-.05-.26.09-.46-.16-.14-.25-.27-.22-.2-.05-.35-.06-.15-.22-.23c-.87-.44-.46-.5-.49-.7s-.62-.9-1.16.16a.54.54,0,0,1-.32.25c0-.09-.09-.12-.26,0a2.24,2.24,0,0,1-1.45.27c-.24-.15.06-.59.42-.91s.57-1.06.11-.9-.69.77-1,.62,0-.65.2-1,.55-.79.16-.68-.36-.17-.64-.2c0,0,0-1.38-.2-1.51s-.06,1.17-.18,1.4-.61,0-.82,0,.65.73.6.92-1.19.17-1.3-.19-.27.3.17.7.74,1.49.56,1.54a3.86,3.86,0,0,1-1.7-1.11c-.24-.43.23,1.81.88,2.13s0,.32-.68.57c-.38.15-.5.33-.45.51l-.08,0c-.11,0-.27-.16-.09-.39s.35-.27.19-.51-.1,0-.27.12.11-.14.08-.51-.12-.18-.2,0-.28-.45-.29-.7,0-.41-.24-.4a1.28,1.28,0,0,0-.14.42c0,.29.06.54,0,.72s-.13.41-.31.18-.23-.16-.16.1.38.64.1.7-.29-.1-.41-.16,0,.14,0,.35c-.28,0-1.17.11-1.43-.15s0-.17.18-.47-.42-.06-.57-.27.17-.16,0-.44,0-.62-.64-.65a.42.42,0,0,1-.13.29c-.12.1-.39.09-.22.24s0,.22,0,.35-.42.08-.27.29.35.45.1.48-.76.09-.66.24.65.19.61.35a.2.2,0,0,1,0,.08c-.59,0-1.14-.13-1.35-.1s-.23-.32-.15-.45.45-.31.14-.41-1,.17-.93-.17.66-1,.34-.75a.43.43,0,0,1-.66-.21c-.06-.19.5-.27.58-.45s-.45-.22-.71-.24-.08-.31,0-.56-.2-.17-.31-.32-.25-.22-.1-.41-.11-.15-.25-.26a.55.55,0,0,1-.16-.33c-.6.08-.46,1.42-.57,1.76s.2.26.08.52-.75,0-.54.35.51.12.23.52-1.62.18-1.5.33.94.06,1.06.28.07.38-.23.66-.59.11-.67.34.3.44.12.45-.45-.06-.41.17.34.27.42.56-.25,0-.6.29,1,.44.7.71-1.18-.6-1.13-.29.81.59.37.63c0-.08-.07-.12-.25,0a2.49,2.49,0,0,1-1.42.22c-.24-.11.06-.47.41-.73s.56-.52.1-.39-.66.61-1,.5,0-.52.2-.83.54-.63.15-.54-.35-.14-.62-.16c0,0,0-1.1-.2-1.21s-.06.94-.17,1.13-.61,0-.81,0,.64.58.59.73-1.16-.18-1.28-.47-.26.24.18.56.71,1.19.54,1.22a1.26,1.26,0,0,1-.41-.12c0-.05,0-.07-.1-.05h0a3.94,3.94,0,0,1-1.1-.67,3,3,0,0,0,.26-.5c.22-.53.06-.7-.42-.2s-.69,0-.85-.38.16-.9,0-1.52a2.36,2.36,0,0,0-.37-.87c-.53,0-.64.29-.65.82s-.57,1.82-.78,1.49-.43-.74-.53,0,.69,1.28.21,1.08-.32-.75-.74-.25,0,.58.53,1.07,0,.87-.27.83a1.9,1.9,0,0,1-.72-.34c.19-.13.87-.12,1-.23s-1,.08-1.39-.12l-.07-.06-.16-.14c-.07-.12.16-.07.29-.29s-.41-.06-.56-.25.17-.16,0-.42,0-.57-.64-.6a.38.38,0,0,1-.12.27c-.12.09-.39.08-.22.22s0,.21-.06.33-.41.07-.26.27.34.41.1.44-.76.08-.67.22.66.18.61.34a.43.43,0,0,1-.62.19c-.3-.14.18.24.37.51a2.05,2.05,0,0,0-.5-.08c-.22,0-.2-.35-.1-.48s.48-.29.18-.41-1,.11-.91-.24.76-1,.42-.76a.42.42,0,0,1-.64-.26c0-.2.52-.25.62-.44s-.42-.25-.67-.29,0-.32.1-.58-.18-.18-.27-.35-.24-.25-.06-.43-.1-.17-.23-.29a.59.59,0,0,1-.12-.35c-.61,0-.5.44-.66.78s.18.29,0,.55-.75,0-.58.33.5.16.18.56-1.64.07-1.53.24.92.12,1,.36,0,.4-.3.67a1,1,0,0,1-.57.2.15.15,0,0,0,0-.07c-.1-.6-.31-.29-.51,0s-.76-.73-.77-1.14-.12-.66-.64-.63a1.72,1.72,0,0,0-.36.66c-.15.47.16.88,0,1.17s-.36.66-.83.28-.57-.27-.48,0a.6.6,0,0,0-.16-.08c-.67-.27-1.32-.27-.67-.6s1.11-2.68.88-2.23a3.88,3.88,0,0,1-1.7,1.16c-.18-.05.11-1.18.55-1.61s.3-1.11.18-.73-1.26.4-1.31.2.81-1,.6-1-.7.27-.82,0,.06-1.6-.17-1.47-.21,1.59-.21,1.59c-.28,0-.23.33-.63.21s0,.3.15.7.51.94.2,1.09-.53-.49-1-.66-.24.6.11.94.66.8.42.95-1,0-1.45-.28-.14.5,0,.77,1.36,1,1,1.13a2.7,2.7,0,0,1-.71.06s0,0,0,0c-.34-.2-.66,0-.59-.22s.36-.26.41-.44-.23-.11-.4-.12.19-.17.12-.34-.37-.05-.66-.26-.34-.34-.22-.51.92-.1,1-.21-1.18.06-1.46-.25,0-.15.22-.4-.4-.08-.53-.27.2-.14.08-.4,0-.54-.56-.6a.39.39,0,0,1-.15.25c-.14.08-.4.06-.25.2s0,.2-.1.31-.42,0-.29.24.28.42,0,.43-.77,0-.69.18.62.21.56.35a.47.47,0,0,1-.64.16c-.31-.17.24.31.33.57s-.6,0-.91.13,0,.22.13.32a.24.24,0,0,1,0,.28l-.34.06c-.28,0-.74-.86-1.22-.89h-.13a2.1,2.1,0,0,1-.54-.14c-.35-.18.17-.26.7-.28s.53.61.88.42,1.43-.61.81-.59-1.21-1.2-1.44-1.18-.2-.37-.1-.51.48-.31.18-.45-1,.12-.91-.25.76-1,.42-.82a.41.41,0,0,1-.64-.28c0-.21.53-.27.63-.46s-.43-.28-.68-.32,0-.35.1-.62-.18-.2-.27-.38-.23-.27-.06-.47-.1-.17-.22-.31a.61.61,0,0,1-.13-.37c-.6,0-.5.47-.65.84s.17.31,0,.59-.75,0-.58.35.51.18.18.61-1.63.08-1.53.25.93.14,1,.39,0,.43-.3.73-.61.07-.71.33.25.51.08.51-.45-.1-.43.15.3.34.35.67-.25,0-.63.27.93.57.63.84-1.15-.39-1.13,0a.52.52,0,0,0,.12.25,1,1,0,0,0-.21-.08c-.66-.19-1.29-1.16-.66-1.4a2.31,2.31,0,0,0,.83-.63c-.3.26-1.47-.12-1.63-.15s.11-.86.54-1.17.29-.82.18-.54-1.24.29-1.28.15.79-.7.59-.7-.69.19-.81,0,.06-1.17-.17-1.07-.2,1.15-.2,1.15c-.27,0-.23.24-.62.16s0,.22.15.51.5.68.2.79-.48-.26-.84-.42a.28.28,0,0,0,0-.2c-.09-.25-.36,0-.67-.32s-.39-.45-.29-.7.6-.43.7-.6-.87.17-1.19-.24-.29-.21-.12-.59-.31-.36-.4-.64c-.29-.82-.71-.46-.92-1-.56-1.38-1.17-.46-1.2-.2s.4.34-.5.92c-.16.1-.38.11-.21.3s0,.28-.06.45-.4.1-.26.36.34.56.1.6-.75.11-.65.3.64.25.59.45-.23.22-.51.31c0-.07,0-.12,0-.11a2.93,2.93,0,0,0-.27.21l-.09,0s0,0,0,0,.22-.27.18-.37-.2,0-.28.1-.22.4-.41.34-.21-.24,0-.34.24-.87.3-1.06,0-.46-.07-.28-.59.37-.74.33,0-.36.11-.43.17-.16.1-.22-.4,0-.37-.22.29-.46.35-.63.19-.47.07-.34-.66.34-.7.26.22-.33.35-.42.17-.24,0-.35-.4-.1-.2-.23.33-1,.26-.87a1.12,1.12,0,0,1-.51.45,1,1,0,0,1,.17-.62c.13-.17.08-.44,0-.29s-.37.16-.39.08.24-.37.18-.37-.21.1-.24,0,0-.63,0-.58-.06.62-.06.62-.07.13-.19.08,0,.12,0,.28.15.36.06.42-.15-.19-.29-.26-.07.24,0,.37.2.31.13.37-.28,0-.43-.11,0,.19,0,.3.4.4.29.44a1.7,1.7,0,0,1-.5,0s-.06.2,0,.25-.16-.11-.5-.08.08.17.2.29a1.76,1.76,0,0,1,.36.46c0,.06.09.32-.17.24s-.14-.11-.38-.27-.47-.1-.33,0c.35.3.19.44.17.49s-.16.12,0,.4.25.36.11.37-.32-.31-.45-.2.22.24.24.41-.5-.12-.73-.1.41.28.53.45a.31.31,0,0,1,0,.1c-.35-.14-.8-.27-.77-.49s.28-.35.3-.57-.21-.14-.36-.14.15-.21.06-.43-.32,0-.6-.29-.35-.4-.26-.62.54-.38.62-.53-.77.15-1-.22-.26-.19-.11-.52-.27-.33-.36-.57c-.26-.74-.63-.41-.82-.87-.5-1.24-1-.41-1.06-.18s.35.3-.45.81c-.14.1-.34.1-.19.27s0,.25,0,.4-.36.09-.23.32.3.51.08.54a2.51,2.51,0,0,0-.44.1c.11-.13.26-.21.28-.36s-.29-.14-.49-.14.2-.23.08-.46-.43,0-.8-.29-.46-.42-.34-.65,1.06-.19,1.17-.35-1.38.16-1.75-.22,0-.2.2-.55-.49-.07-.66-.31.2-.19,0-.52-.06-.72-.75-.75a.48.48,0,0,1-.14.33c-.14.12-.46.1-.26.28s0,.26-.06.42-.49.08-.31.33.4.52.11.56-.89.1-.77.28.76.22.71.41a.49.49,0,0,1-.73.25c-.39-.19.33.4.48.73s-.69.11-1,.23.09.28.2.4.15.47-.11.45a7.38,7.38,0,0,0-.88.14v0c0-.2.49-.25.58-.44s-.4-.26-.63-.29,0-.33.09-.59-.16-.18-.25-.35-.22-.25-.05-.44-.1-.16-.22-.29a.63.63,0,0,1-.11-.35c-.57,0-.48.44-.62.79s.17.29,0,.55-.71,0-.55.33.48.16.17.57-1.53.07-1.44.24.87.12,1,.36,0,.41-.28.68-.57.08-.66.31.23.48.07.48-.43-.09-.4.15.28.31.33.62-.17.09-.45.19a2.49,2.49,0,0,0-.39-.14c-.33-.1-.31-.18-.19-.26s.22.06.54,0,.36-.1.2-.14,0-.27-.16-.25a.64.64,0,0,1-.48-.19c-.08-.08-.15-.2,0-.24a.4.4,0,0,1,.37,0,.36.36,0,0,0,.33.09c.08,0,0-.28,0-.39s-.05-.21-.29-.27a1,1,0,0,1-.46-.25.85.85,0,0,1-.36-.39c-.12-.21.06-.24.14-.12a.29.29,0,0,0,.31.11c.06,0,0-.27,0-.33s.15-.16.25-.09a.7.7,0,0,0,.45.08c.17,0,.13-.13,0-.16s-.16-.27-.23-.38a.41.41,0,0,0-.23-.22c-.13-.05-.67-.11-.66-.21s.29,0,.48,0,.32-.21.28-.26-.3,0-.24-.11.14-.18.06-.21-.31,0-.33-.12.08-.13.26-.16A.49.49,0,0,0,49,25c0-.07-.16,0-.32,0a.9.9,0,0,1-.57-.05c-.13-.08.06-.11.24-.12s.18-.16.3-.24.5-.27.28-.27a2.91,2.91,0,0,1-.49-.09c-.08,0-.07-.17,0-.23s.17-.14.06-.2-.35.06-.31-.11.26-.46.14-.36-.2,0-.22-.13.18-.12.22-.2-.15-.13-.24-.14,0-.16,0-.28-.06-.09-.1-.17-.08-.12,0-.2,0-.08-.07-.14a.31.31,0,0,1-.05-.17c-.2,0-.17.21-.22.38s.06.13,0,.26-.26,0-.2.15.17.08.06.27-.57,0-.53.11.32.07.35.18,0,.19-.1.32-.21,0-.24.15S47,24,47,24s-.15,0-.14.07.1.15.12.3-.09,0-.22.12.32.25.22.37-.4-.17-.39,0,.27.33.09.33-.2,0-.09.17.33.25.27.36-.36.06-.35.2.16.16.21.31-.15.09-.32.14a.1.1,0,0,0,0-.14c-.09-.14-.17,0-.43,0a1.12,1.12,0,0,1-.59-.22c-.16-.14-.26-.29,0-.25s.21,0,.27-.06.14-.29-.06-.29-.32.1-.4-.1-.07-.27.14-.28.31,0,.41,0,.09-.1-.11-.23-.5,0-.46-.2.3-.18.31-.31S45,24.12,45,24s.07-.18.17-.35.08-.18-.09-.18.09-.16.09-.32-.28.14-.39,0,.35-.26.22-.37-.44-.19-.42-.33.11-.19.12-.3-.09-.07-.15-.07.06-.11,0-.23-.13,0-.25-.14-.14-.21-.1-.32.22-.2.25-.28-.31.08-.42-.11-.11-.1,0-.27-.11-.17-.15-.3c-.1-.38-.25-.21-.33-.45-.2-.64-.41-.21-.42-.09s.14.15-.18.42c-.06.05-.14.05-.08.14s0,.13,0,.21-.15,0-.09.16.12.26,0,.28-.27.05-.23.14.23.11.21.21-.34.22-.53.22.1.2.14.37-.21.05-.31.11,0,.14.06.2,0,.23,0,.23a3.33,3.33,0,0,1-.5.09c-.22,0,.16.17.28.26a.91.91,0,0,1,.13.16l-.24.19A1,1,0,0,1,41,23.1c-.38-.39-.36-.19-.15-.55a.2.2,0,0,0,0-.29c.37-.3.56-.5.16-1-.53-.62-.39-.05-.87.26a.59.59,0,0,0-.19-.13,1.88,1.88,0,0,0,.35-1.25c-.15-1.06-.43-.5-.72-.05s-1-1.29-1.06-2-.16-1.18-.88-1.12a3.3,3.3,0,0,0-.5,1.17c-.21.84.22,1.57,0,2.07s-.5,1.17-1.14.5-.86-.44-.58.28,1.36,1.84.36,2-1.07-.28-1.5-.45h0a2.49,2.49,0,0,1,.23-.23c.29-.25-.12-.4-.67,0s-.27.4-.78.56-.34-.37-.34-.51a3.88,3.88,0,0,1,.74-.93c.23-.24,1.08-.55.39-.61s-1,.29-1,.18,0-.52-.08-.52a3.54,3.54,0,0,1-1,0c-.22-.09.52-.69.6-.91s.3-.81,0-.61-.73.35-.87.23,0-.5.25-.77.34-.88.06-.74-.41.64-.59.52,0-.55.12-.87.33-.66.09-.56-.21-.15-.38-.17c0,0,0-1.16-.12-1.27s0,1-.11,1.18-.37,0-.49,0,.39.61.36.77-.71.14-.78-.16-.16.25.1.58a2.07,2.07,0,0,1,.34,1.29,2.37,2.37,0,0,1-1-.93c-.14-.36.14,1.52.53,1.78s0,.27-.41.49-.32.53,0,.71.8.69.71.86-1.16-.27-1.41-.54c.22-.28.15-.63-.47-.88-.85-.35-1.66-.35-.85-.79s1.4-3.5,1.11-2.91a4.81,4.81,0,0,1-2.14,1.51c-.23-.06.14-1.54.7-2.1s.37-1.45.22-1-1.59.53-1.64.26,1-1.25.75-1.25-.88.35-1,0,.07-2.1-.22-1.92-.26,2.07-.26,2.07c-.35,0-.3.43-.79.27s0,.4.19.92.64,1.23.25,1.42-.67-.63-1.25-.85-.3.79.14,1.22.83,1,.53,1.25-1.19-.05-1.83-.37-.17.65,0,1a1.7,1.7,0,0,0,.34.38,4.34,4.34,0,0,1-1.68.73c-.52.05-1.21-.42-.43-1.05s1.55-.73.86-1.36-.43.05-1.21.31.52-.36.35-1.36-.52-.47-.87-.05-1.24-1.21-1.27-1.89-.19-1.1-1-1A2.63,2.63,0,0,0,16.4,15c-.25.78.26,1.46,0,1.93S15.8,18,15,17.4a2.8,2.8,0,0,0-.39-.27.58.58,0,0,0,.41-.07c.35-.23.76-.37.56-.66s-.37.07-.95,0a2.43,2.43,0,0,1-1.33-.49c-.35-.31-.58-.64-.1-.57s.49.12.61-.13.31-.65-.14-.65-.7.24-.9-.23-.62-.61-.15-.63.93.1,1.17,0,.19-.21-.26-.5-1.13-.12-1-.45S13,12.3,13,12s-.68-.22-.8-.45.39-.41.62-.8.18-.39-.21-.39.19-.37.21-.72-.64.31-.87,0,.78-.59.48-.84-.52.05-.48-.28.25-.41.27-.66-.2-.16-.33-.16.13-.25.06-.5-.3,0-.55-.34-.31-.46-.23-.72S11.88,6,12,5.8,11,6,10.77,5.55s0-.22.13-.61-.33-.07-.45-.35.14-.21,0-.58,0-.8-.5-.84a.75.75,0,0,1-.1.37c-.1.14-.31.12-.18.31s0,.29,0,.47-.33.1-.21.37.27.59.08.62-.61.12-.53.32.52.25.48.46-.23.49-.49.28.22.45.32.82-.47.11-.7.25.06.31.14.45.09.53-.08.51a7.35,7.35,0,0,1-1.11.21c-.49,0,.35.39.62.59s.27.52.68.54.82.1.55.28a2.06,2.06,0,0,1-1.29.11c-.37-.09-.71-.19-.71,0a1,1,0,0,0,.71.69c.39.08.61.09.57.37s-.53.21-.72.27,0,.29.13.47-.45.12-.54.23.19.49.62.59,1.07-.12,1.09.12-1.21.35-1.48.46a1.05,1.05,0,0,0-.53.49l-.07.15c-.4-.18-1.26-.18-1.45-.46s.81-.66,1.29-1.29.36-.62-.44-.62S7,11,7,10.4s-1.33.5-1.81.06,1.61-.94,1-1.34-1.09.09-1-.44.52-.66.56-1.07-.4-.25-.68-.25.28-.41.12-.81S4.61,6.48,4.08,6s-.64-.75-.48-1.15,1.49-.35,1.65-.63-1.93.28-2.45-.41,0-.34.28-1-.68-.12-.93-.56.29-.35,0-.94S2.11.06,1.15,0A1,1,0,0,1,1,.59C.75.82.3.78.58,1.1s.06.47-.09.75S.22,2,.1,2.1s-.15.14,0,.34l0,.08c.24.42.5.87.12.93L0,3.47V40.3H200Z"
          />
        </svg>
      </div>
    </div>
  );
}

ForestMountains.propTypes = {
  timeOfDay: PropTypes.string,
};
