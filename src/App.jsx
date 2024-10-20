import React, { Children } from "react";
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
    <div className="w-screen overflow-hidden bg-customGreen min-h-screen">
      <Section className="pb-0">
        <Header />
        <MainContent />
      </Section>
      <div className="relative flex justify-center">
        <div className="aspect-square h-[2000px] bg-[#f5f5eb] rounded-full absolute top-0 left-1/2 -translate-x-1/2 z-0"></div>
        <div className="relative z-10 flex flex-col items-center mt-20">
          <span className="uppercase text-xl">- Process</span>
          <h2 className=" text-3xl font-bold mt-4">How it works</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3  my-7 w-10/12 pl-4 transform lg:translate-x-16">
            <div className="flex flex-col items-center">
              <div className="h-9 bg-black aspect-square flex justify-center items-center rounded-full">
                <div className="text-white text-lg">1</div>
              </div>
              <div className="flex flex-col items-center w-10/12 mt-4">
                <h3>Create an Account</h3>
                <p className="text-gray-600 text-sm text-center">
                  Sign up and set up your profile quickly.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border-l-2 lg:border-l-0 lg:border-b-2 border-dashed border-gray-500 h-12 lg:h-0 lg:w-24"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-9 bg-black aspect-square flex justify-center items-center rounded-full">
                <div className="text-white text-lg">2</div>
              </div>
              <div className="flex flex-col items-center w-10/12 mt-4">
                <h3>Transfer & Manage Funds</h3>
                <p className="text-gray-600 text-lg text-center">
                  Transfer money instantly and access your payment history
                  anytime.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border-l-2 lg:border-l-0 lg:border-b-2 border-dashed border-gray-500 h-12 lg:h-0 lg:w-24"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-9 bg-black aspect-square flex justify-center items-center rounded-full">
                <div className="text-white text-lg">3</div>
              </div>
              <div className="flex flex-col items-center w-10/12 mt-4">
                <h3>Manage Loans</h3>
                <p className="text-gray-600 text-sm text-center">
                  Apply for loans and track your repayment progress
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ children, className }) => (
  <div className={`pt-3 sm:pt-5 w-full px-4 sm:px-10 ${className}`}>
    {children}
  </div>
);
// Header Component
const Header = () => (
  <nav className="flex justify-between flex-wrap p-2 md:p-4 max-w-[1800px] mx-auto">
    <div className="flex items-center gap-6">
      <Logo />
      <h2 className="uppercase text-2xl font-bold">Nexus Bank</h2>
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
  <div className="mt-12 md:px-8 grid gap-x-4 grid-cols-1 lg:grid-cols-2 max-w-[1600px] mx-auto md:mt-24">
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
  <div className="flex items-center space-x-10 px-6 pt-6 rounded-lg mt-6 justify-center sm:justify-normal ">
    <Stats title="Transactions" value="$ 12M+" />
    <Stats title="Active Users" value="1200+" />
  </div>
);

// Hero Image Section Component
const HeroImageSection = () => (
  <div>
    <div className="relative flex justify-center items-center">
      <div className="absolute aspect-square h-[90%] rounded-full bg-[#f5f5eb] z-0"></div>
      <img
        src={HeroImage}
        alt="Hero Image"
        className="relative w-auto h-[80%] z-10"
      />
    </div>
  </div>
);

export default App;
