/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SignUpForm from '../components/organism/SignUpForm';

function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link className="navbar-brand" href="/">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
