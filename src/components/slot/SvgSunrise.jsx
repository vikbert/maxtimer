import React from 'react';

export default function SvgSunrise({
  width = 30,
  height = 30,
  color = '#ffffff',
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={`${width}px`}
        height={`${height}px`}
        style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 2614 1999"
      >
        <path
          d="M0 1305q0-40 32-74q36-31 75-31h248q43 0 72 31t29 74q0 46-29 77t-72 31H107q-43 0-75-32.5T0 1305zm355-851q0-43 28-73q36-31 75-31q42 0 73 31l175 176q30 35 30 74q0 45-29 75t-70 30q-39 0-75-31L383 532q-28-34-28-78zm213 1440q0-45 31-73q28-28 73-28h281l332-312q16-13 36 0l337 312h295q43 0 73.5 29.5t30.5 71.5q0 43-30.5 74t-73.5 31h-361q-16 0-31-8l-257-242l-255 242q-13 8-30 8H672q-43 0-73.5-31t-30.5-74zm99-589q0 155 66 282q4 19 27 19h201q12 0 16-9t-2-20q-102-123-102-272q0-180 128-306t308-126q179 0 305.5 126t126.5 306q0 150-101 272q-7 11-3.5 20t16.5 9h203q21 0 25-19q66-123 66-282q0-130-51-248t-136.5-203.5t-203.5-136t-247-50.5q-130 0-248.5 50.5t-205 136T718 1057t-51 248zm536-955V105q0-46 30-75.5T1309 0q45 0 74.5 30t29.5 75v245q0 46-29.5 75.5T1309 455q-46 0-76-29.5t-30-75.5zm677 281q0-40 29-74l173-176q31-31 75-31t74 30.5t30 73.5q0 46-28 78l-180 173q-34 31-75 31q-43 0-70.5-29.5T1880 631zm279 674q0-43 28.5-74t70.5-31h251q43 0 74 31t31 74q0 44-31 76t-74 32h-251q-43 0-71-31t-28-77z"
          fill={color}
        />
      </svg>
    </>
  );
}
