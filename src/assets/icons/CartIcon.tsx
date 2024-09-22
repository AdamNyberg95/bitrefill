import * as React from 'react';

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="rgba(0, 43, 40, 1)"
      fillRule="evenodd"
      d="M9.027 23.042a2.042 2.042 0 1 1 4.083 0 2.042 2.042 0 0 1-4.083 0ZM19.833 23.042a2.042 2.042 0 1 1 4.084 0 2.042 2.042 0 0 1-4.084 0ZM2.333 4.648c0-.634.514-1.148 1.148-1.148h3.825c.547 0 1.018.386 1.125.922l.773 3.86h15.315a1.148 1.148 0 0 1 1.127 1.362l-1.531 8.032a3.06 3.06 0 0 1-3.048 2.463H11.79a3.06 3.06 0 0 1-3.048-2.462v-.001L7.147 9.7a1.14 1.14 0 0 1-.018-.09l-.764-3.815H3.481a1.148 1.148 0 0 1-1.148-1.147Zm7.33 5.928 1.331 6.653a.765.765 0 0 0 .765.616h9.339a.765.765 0 0 0 .765-.613v-.003l1.269-6.652H9.662Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CartIcon;
