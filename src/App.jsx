import React from "react";
import customer1 from "./assets/customers/customer-1.jpg";
import customer2 from "./assets/customers/customer-2.jpg";
import customer3 from "./assets/customers/customer-3.jpg";
import customer4 from "./assets/customers/customer-4.jpg";
import HeroImage from "./assets/HeroImage.png";

// Reusable Button Component
const Button = ({ children, className, ...props }) => (
  <a
    {...props}
    className={`bg-customOrangeLight py-2 px-4 sm:py-4 sm:px-8 rounded-full text-white hover:bg-customOrangeDark transition-all inline-block ${className}`}
  >
    {children}
  </a>
);

// Reusable Customer Image Component
const CustomerImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="aspect-square h-full rounded-full object-cover -mr-4"
  />
);

// Reusable Stats Component
const Stats = ({ title, value }) => (
  <div className="flex items-center space-x-3">
    <div>
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-600">{title}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="py-5 sm:py-9 px-4 md:px-12 bg-customGreen">
      <div className="w-full px-2 sm:px-5">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <nav className="flex justify-between flex-wrap p-2 md:p-4">
    <div className="flex items-center gap-6">
      <Logo />
      <h2 className="uppercase text-2xl font-bold">Neux Bank</h2>
    </div>
    <div className="items-center gap-10 hidden md:flex">
      <a
        href="#"
        aria-label="Login"
        className="hover:text-customOrangeLight transition-all"
      >
        Login
      </a>
      <Button href="#" aria-label="Sign up">
        Sign up
      </Button>
    </div>
  </nav>
);

// Logo Component
const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
    />
  </svg>
);

// Main Content Component
const MainContent = () => (
  <div className="mt-12 md:px-8 grid gap-x-4 grid-cols-1 lg:grid-cols-2  md:mt-24">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        MAKE PAYMENTS EASY, SIMPLIFY YOUR FINANCES
      </h1>
      <p className="mt-6 text-gray-600 w-full md:w-10/12 ">
        A simple, secure way to create an account, transfer funds, check payment
        history, and manage loans. Take full control of your finances through
        your web application.
      </p>
      <div className="flex gap-4 items-center mt-10 flex-wrap justify-center sm:justify-normal">
        <Button href="#">Get Started</Button>
        <CustomerImages />
      </div>
      <StatsSection />
    </div>
    <HeroImageSection />
  </div>
);

// Customer Images Component
const CustomerImages = () => (
  <div className="flex gap-2 h-12 items-center flex-wrap">
    <CustomerImage src={customer1} alt="Customer 1" />
    <CustomerImage src={customer2} alt="Customer 2" />
    <CustomerImage src={customer3} alt="Customer 3" />
    <CustomerImage src={customer4} alt="Customer 4" />
    <span className="bg-customOrangeLight text-sm text-white font-semibold px-1 py-2 sm:px-2 sm:py-3  rounded-full">
      100+
    </span>
  </div>
);

// Stats Section Component
const StatsSection = () => (
  <div className="flex items-center space-x-10 p-6 rounded-lg mt-6 justify-center sm:justify-normal ">
    <Stats title="Transactions" value="$ 12M+" />
    <Stats title="Active Users" value="1200+" />
  </div>
);

// Hero Image Section Component
const HeroImageSection = () => (
  <div>
    <div className="relative flex justify-center items-center">
      <div className="absolute aspect-square h-[90%] rounded-full bg-[#ffffe6] z-0"></div>
      <img
        src={HeroImage}
        alt="Hero Image"
        className="relative w-auto h-[80%] z-10"
      />
    </div>
  </div>
);

export default App;
