import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  font-family: "airnt";
  font-size: x-small;

  svg {
    height: 3.5rem;
    transform: scaleY(0.9);
    &:hover {
      filter: drop-shadow(0 0 20px rgba(70, 247, 8, 0.72));
    }
  }
`;

const MenuButton = ({
  size = 64,
  order,
  invert,
  active,
  text = "Click here",
  ...props
}) => {
  let color = active ? "#ddd" : "url(#paint0_linear_130_161)";
  return (
    <Button {...props}>
      <svg viewBox="0 0 155 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {order === 1 && (
          <g filter={active ? "url(#filter0_i_130_160)" : "none"}>
            <path d="M16 64L0 48.2462V0H16V64Z" fill={color} />
            <rect
              width="125"
              height="64"
              transform="translate(16)"
              fill={color}
            />
            <path
              d="M152 0H136L136 64H152V48L148 44V20L152 16V0Z"
              fill={color}
            />
          </g>
        )}

        {order === 2 && (
          <g filter={active ? "url(#filter0_i_130_160)" : "none"}>
            <path d="M4 0L20 0L20 64H4V48L0 44V20L4 16V0Z" fill={color} />
            <rect
              width="125"
              height="64"
              transform="translate(16)"
              fill={color}
            />
            <path
              d="M146 0L130 0L130 64H146V48L142 44V20L146 16V0Z"
              fill={color}
              transform="translate(6)"
            />
          </g>
        )}

        {order === 3 && (
          <g filter={active ? "url(#filter0_i_130_160)" : "none"}>
            <path d="M4 0H20L20 64H4V48L0 44V20L4 16V0Z" fill={color} />
            <rect
              width="120"
              height="64"
              transform="translate(16)"
              fill={color}
            />
            <path
              d="M146 0H130L130 64H146V48L150 44V20L146 16V0Z"
              fill={color}
            />
          </g>
        )}

        {order === 4 && (
          <g filter={active ? "url(#filter0_i_130_160)" : "none"}>
            <path d="M0 0H16L16 64H0V48L4 44V20L0 16V0Z" fill={color} />
            <rect
              width="120"
              height="64"
              transform="translate(16)"
              fill={color}
            />
            <path
              d="M126 0L142 15.7538V64H126V0Z"
              fill={color}
              transform="translate(9)"
            />
          </g>
        )}

        <text
          x="50%"
          y="30%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={active ? "#EB21BE" : "#fff"}
          style={{
            transform: "scaleY(1.5)",
            letterSpacing: "2px",
          }}
        >
          {text}
        </text>

        <filter
          id="filter0_i_130_160"
          x="-4"
          y="0"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="6" />
          <feGaussianBlur stdDeviation="3.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_130_160"
          />
        </filter>

        <defs>
          <linearGradient
            id="paint0_linear_130_161"
            x1="10"
            y1="0"
            x2="10"
            y2="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8F379D" />
            <stop offset="1" stopColor="#EB21BE" />
          </linearGradient>
        </defs>
      </svg>
    </Button>
  );
};

export default MenuButton;
