/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const className = {
    label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
  };

  const onSubmit = () => {
    const userForm = {
      email,
      name,
      password,
    };

    localStorage.setItem('user-form', JSON.stringify(userForm));
    router.push('/sign-up-photo');
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
      <div className="pt-50">
        <label htmlFor="name" className={className.label}>Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email
          Address

        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={onSubmit}
        >
          Continue

        </button>
        <Link
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
        >
          Sign
          In

        </Link>
      </div>
    </>
  );
}

export default SignUpForm;
