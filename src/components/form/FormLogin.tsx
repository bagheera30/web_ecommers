import React from "react";

const FormLogin = () => {
  return (
    <>
      <h1 class="text-black text-4xl font-bold">Masuk</h1>
      <div class="py-3">
        <input
          type="email"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="py-3">
        <input
          type="password"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="text-center">
        <a href="/dasbord">
          <button class="w-full btn btn-neutral bg-red-600">login</button>
        </a>
      </div>
      <div class="w-96 h-5 justify-center items-center gap-9 inline-flex">
        <div class="w-20 h-px border border-black border-opacity-50"></div>
        <div class="text-black text-opacity-50 text-lg font-normal font-['Roboto']">
          Belum punya akun?
        </div>
        <div class="w-20 h-px border border-black border-opacity-50"></div>
      </div>
      <div class="text-center py-5">
        <a href="/regiter">
          <button class="w-full btn btn-neutral bg-red-600">regiter</button>
        </a>
      </div>
    </>
  );
};

export default FormLogin;