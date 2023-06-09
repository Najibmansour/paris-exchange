"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content shadow-lg flex">
        <Link
          href="/"
          className="text-lg font-extrabold flex place-items-center justify-center lg:flex-1 lg:justify-center lg:ml-32 lg:text-xl "
        >
          <p className="lg:text-4xl text-2xl font-logoFont lg:mt-3">
            PARIS EXCHANGE
          </p>
        </Link>
        <h1 href="/" className="lg:mr-4 lg:visible  invisible">
          <p className="font-logoFont font-[600]"> Tél: +33 954 455 444</p>
        </h1>
      </div>
      <div className="tabs lg:ml-3">
        <Link
          // className="tab tabs-boxed tab-lg"
          className="lg:btn lg:text-md lg:btn-ghost font-normal my-2 btn btn-ghost btn-sm underline underline-offset-4 lg:hover:underline lg:hover:font-bold hover:underline-offset-8"
          href="/"
        >
          Acceuil
        </Link>

        <Link
          className="lg:btn lg:text-md lg:btn-ghost font-normal my-2 btn btn-ghost btn-sm underline underline-offset-4 lg:hover:underline lg:hover:font-bold hover:underline-offset-8"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="lg:btn lg:text-md lg:btn-ghost font-normal my-2 btn btn-ghost btn-sm underline underline-offset-4 lg:hover:underline lg:hover:font-bold hover:underline-offset-8"
          href="/info"
        >
          Info
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
